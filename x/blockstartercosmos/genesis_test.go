package blockstartercosmos_test

import (
	"testing"

	keepertest "github.com/mehdisbys/blockstarter-cosmos/testutil/keeper"
	"github.com/mehdisbys/blockstarter-cosmos/testutil/nullify"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		ProjectList: []types.Project{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ProjectCount: 2,
		ContributorsList: []types.Contributors{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ContributorsCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BlockstartercosmosKeeper(t)
	blockstartercosmos.InitGenesis(ctx, *k, genesisState)
	got := blockstartercosmos.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ProjectList, got.ProjectList)
	require.Equal(t, genesisState.ProjectCount, got.ProjectCount)
	require.ElementsMatch(t, genesisState.ContributorsList, got.ContributorsList)
	require.Equal(t, genesisState.ContributorsCount, got.ContributorsCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
