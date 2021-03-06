package blockstartercosmos

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/keeper"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the project
	for _, elem := range genState.ProjectList {
		k.SetProject(ctx, elem)
	}

	// Set project count
	k.SetProjectCount(ctx, genState.ProjectCount)
	// Set all the contributors
	for _, elem := range genState.ContributorsList {
		k.SetContributors(ctx, elem)
	}

	// Set contributors count
	k.SetContributorsCount(ctx, genState.ContributorsCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.ProjectList = k.GetAllProject(ctx)
	genesis.ProjectCount = k.GetProjectCount(ctx)
	genesis.ContributorsList = k.GetAllContributors(ctx)
	genesis.ContributorsCount = k.GetContributorsCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
