package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
)

func (k msgServer) ClaimDonation(goCtx context.Context, msg *types.MsgClaimDonation) (*types.MsgClaimDonationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgClaimDonationResponse{}, nil
}
