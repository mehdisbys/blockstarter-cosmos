package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/mehdisbys/blockstarter-cosmos/testutil/keeper"
	"github.com/mehdisbys/blockstarter-cosmos/testutil/nullify"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/keeper"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
	"github.com/stretchr/testify/require"
)

func createNContributors(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Contributors {
	items := make([]types.Contributors, n)
	for i := range items {
		items[i].Id = keeper.AppendContributors(ctx, items[i])
	}
	return items
}

func TestContributorsGet(t *testing.T) {
	keeper, ctx := keepertest.BlockstartercosmosKeeper(t)
	items := createNContributors(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetContributors(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestContributorsRemove(t *testing.T) {
	keeper, ctx := keepertest.BlockstartercosmosKeeper(t)
	items := createNContributors(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveContributors(ctx, item.Id)
		_, found := keeper.GetContributors(ctx, item.Id)
		require.False(t, found)
	}
}

func TestContributorsGetAll(t *testing.T) {
	keeper, ctx := keepertest.BlockstartercosmosKeeper(t)
	items := createNContributors(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllContributors(ctx)),
	)
}

func TestContributorsCount(t *testing.T) {
	keeper, ctx := keepertest.BlockstartercosmosKeeper(t)
	items := createNContributors(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetContributorsCount(ctx))
}
