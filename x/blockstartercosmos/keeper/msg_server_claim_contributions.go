package keeper

import (
	"context"
	"fmt"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
)

func (k msgServer) ClaimContributions(goCtx context.Context, msg *types.MsgClaimContributions) (*types.MsgClaimContributionsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	project, found := k.GetProject(ctx, msg.ProjectId)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "id %d doesn't exist")
	}

	recipient, err := sdk.AccAddressFromBech32(project.Creator)
	if err != nil {
		panic(err)
	}

	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}

	if recipient.String() != creator.String() {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Project creator and message creator must be the same")
	}

	deadline, err := strconv.ParseInt(project.Deadline, 10, 64)
	if err != nil {
		panic(err)
	}

	if ctx.BlockHeight() < deadline {
		return nil, sdkerrors.Wrap(types.ErrDeadline, "Cannot liquidate before deadline")
	}

	if project.State == "claimed" {
		return nil, sdkerrors.Wrap(types.ErrStatus, "Contributions have already been claimed")
	}

	contributors := k.GetAllContributors(ctx)

	var total uint
	for _, c := range contributors {

		amount, err := sdk.ParseCoinNormalized(c.Amount)
		if err != nil {
			panic(err)
		}
		total += uint(amount.Amount.BigInt().Int64())
	}

	totalToken, err := sdk.ParseCoinsNormalized(fmt.Sprintf("%v%v", total, "token"))

	k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, creator, totalToken)

	project.State = "claimed"

	k.SetProject(ctx, project)

	return &types.MsgClaimContributionsResponse{}, nil
}
