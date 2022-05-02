package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/mehdisbys/blockstarter-cosmos/testutil/keeper"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/keeper"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.BlockstartercosmosKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
