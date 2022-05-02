package keeper

import (
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
)

var _ types.QueryServer = Keeper{}
