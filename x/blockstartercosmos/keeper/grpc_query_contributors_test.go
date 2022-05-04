package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/mehdisbys/blockstarter-cosmos/testutil/keeper"
	"github.com/mehdisbys/blockstarter-cosmos/testutil/nullify"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
)

func TestContributorsQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.BlockstartercosmosKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNContributors(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetContributorsRequest
		response *types.QueryGetContributorsResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetContributorsRequest{Id: msgs[0].Id},
			response: &types.QueryGetContributorsResponse{Contributors: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetContributorsRequest{Id: msgs[1].Id},
			response: &types.QueryGetContributorsResponse{Contributors: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetContributorsRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Contributors(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestContributorsQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.BlockstartercosmosKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNContributors(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllContributorsRequest {
		return &types.QueryAllContributorsRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ContributorsAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Contributors), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Contributors),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ContributorsAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Contributors), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Contributors),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.ContributorsAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Contributors),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.ContributorsAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}