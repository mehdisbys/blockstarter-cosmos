package blockstartercosmos

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/mehdisbys/blockstarter-cosmos/testutil/sample"
	blockstartercosmossimulation "github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/simulation"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = blockstartercosmossimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateProject = "op_weight_msg_project"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateProject int = 100

	opWeightMsgUpdateProject = "op_weight_msg_project"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateProject int = 100

	opWeightMsgDeleteProject = "op_weight_msg_project"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteProject int = 100

	opWeightMsgFundProject = "op_weight_msg_fund_project"
	// TODO: Determine the simulation weight value
	defaultWeightMsgFundProject int = 100

	opWeightMsgClaimDonation = "op_weight_msg_claim_donation"
	// TODO: Determine the simulation weight value
	defaultWeightMsgClaimDonation int = 100

	opWeightMsgCreateContributors = "op_weight_msg_contributors"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateContributors int = 100

	opWeightMsgUpdateContributors = "op_weight_msg_contributors"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateContributors int = 100

	opWeightMsgDeleteContributors = "op_weight_msg_contributors"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteContributors int = 100

	opWeightMsgClaimContributions = "op_weight_msg_claim_contributions"
	// TODO: Determine the simulation weight value
	defaultWeightMsgClaimContributions int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	blockstartercosmosGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		ProjectList: []types.Project{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ProjectCount: 2,
		ContributorsList: []types.Contributors{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ContributorsCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&blockstartercosmosGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateProject int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateProject, &weightMsgCreateProject, nil,
		func(_ *rand.Rand) {
			weightMsgCreateProject = defaultWeightMsgCreateProject
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateProject,
		blockstartercosmossimulation.SimulateMsgCreateProject(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateProject int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateProject, &weightMsgUpdateProject, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateProject = defaultWeightMsgUpdateProject
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateProject,
		blockstartercosmossimulation.SimulateMsgUpdateProject(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteProject int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteProject, &weightMsgDeleteProject, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteProject = defaultWeightMsgDeleteProject
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteProject,
		blockstartercosmossimulation.SimulateMsgDeleteProject(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgFundProject int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgFundProject, &weightMsgFundProject, nil,
		func(_ *rand.Rand) {
			weightMsgFundProject = defaultWeightMsgFundProject
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgFundProject,
		blockstartercosmossimulation.SimulateMsgFundProject(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgClaimDonation int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgClaimDonation, &weightMsgClaimDonation, nil,
		func(_ *rand.Rand) {
			weightMsgClaimDonation = defaultWeightMsgClaimDonation
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgClaimDonation,
		blockstartercosmossimulation.SimulateMsgClaimDonation(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateContributors int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateContributors, &weightMsgCreateContributors, nil,
		func(_ *rand.Rand) {
			weightMsgCreateContributors = defaultWeightMsgCreateContributors
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateContributors,
		blockstartercosmossimulation.SimulateMsgCreateContributors(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateContributors int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateContributors, &weightMsgUpdateContributors, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateContributors = defaultWeightMsgUpdateContributors
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateContributors,
		blockstartercosmossimulation.SimulateMsgUpdateContributors(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteContributors int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteContributors, &weightMsgDeleteContributors, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteContributors = defaultWeightMsgDeleteContributors
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteContributors,
		blockstartercosmossimulation.SimulateMsgDeleteContributors(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgClaimContributions int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgClaimContributions, &weightMsgClaimContributions, nil,
		func(_ *rand.Rand) {
			weightMsgClaimContributions = defaultWeightMsgClaimContributions
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgClaimContributions,
		blockstartercosmossimulation.SimulateMsgClaimContributions(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
