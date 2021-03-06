package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		ProjectList:      []Project{},
		ContributorsList: []Contributors{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in project
	projectIdMap := make(map[uint64]bool)
	projectCount := gs.GetProjectCount()
	for _, elem := range gs.ProjectList {
		if _, ok := projectIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for project")
		}
		if elem.Id >= projectCount {
			return fmt.Errorf("project id should be lower or equal than the last id")
		}
		projectIdMap[elem.Id] = true
	}
	// Check for duplicated ID in contributors
	contributorsIdMap := make(map[uint64]bool)
	contributorsCount := gs.GetContributorsCount()
	for _, elem := range gs.ContributorsList {
		if _, ok := contributorsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for contributors")
		}
		if elem.Id >= contributorsCount {
			return fmt.Errorf("contributors id should be lower or equal than the last id")
		}
		contributorsIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
