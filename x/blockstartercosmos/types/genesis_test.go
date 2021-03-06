package types_test

import (
	"testing"

	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated project",
			genState: &types.GenesisState{
				ProjectList: []types.Project{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid project count",
			genState: &types.GenesisState{
				ProjectList: []types.Project{
					{
						Id: 1,
					},
				},
				ProjectCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated contributors",
			genState: &types.GenesisState{
				ContributorsList: []types.Contributors{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid contributors count",
			genState: &types.GenesisState{
				ContributorsList: []types.Contributors{
					{
						Id: 1,
					},
				},
				ContributorsCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
