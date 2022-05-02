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

func createNProject(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Project {
	items := make([]types.Project, n)
	for i := range items {
		items[i].Id = keeper.AppendProject(ctx, items[i])
	}
	return items
}

func TestProjectGet(t *testing.T) {
	keeper, ctx := keepertest.BlockstartercosmosKeeper(t)
	items := createNProject(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetProject(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestProjectRemove(t *testing.T) {
	keeper, ctx := keepertest.BlockstartercosmosKeeper(t)
	items := createNProject(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveProject(ctx, item.Id)
		_, found := keeper.GetProject(ctx, item.Id)
		require.False(t, found)
	}
}

func TestProjectGetAll(t *testing.T) {
	keeper, ctx := keepertest.BlockstartercosmosKeeper(t)
	items := createNProject(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllProject(ctx)),
	)
}

func TestProjectCount(t *testing.T) {
	keeper, ctx := keepertest.BlockstartercosmosKeeper(t)
	items := createNProject(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetProjectCount(ctx))
}
