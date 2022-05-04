package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
)

func TestContributorsMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateContributors(ctx, &types.MsgCreateContributors{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestContributorsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateContributors
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateContributors{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateContributors{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateContributors{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateContributors(ctx, &types.MsgCreateContributors{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateContributors(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestContributorsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteContributors
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteContributors{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteContributors{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteContributors{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateContributors(ctx, &types.MsgCreateContributors{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteContributors(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
