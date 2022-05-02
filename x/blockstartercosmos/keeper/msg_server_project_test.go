package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
)

func TestProjectMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateProject(ctx, &types.MsgCreateProject{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestProjectMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateProject
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateProject{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateProject{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateProject{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateProject(ctx, &types.MsgCreateProject{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateProject(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestProjectMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteProject
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteProject{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteProject{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteProject{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateProject(ctx, &types.MsgCreateProject{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteProject(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
