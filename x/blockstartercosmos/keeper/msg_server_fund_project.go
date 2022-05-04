package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
)

func (k msgServer) FundProject(goCtx context.Context, msg *types.MsgFundProject) (*types.MsgFundProjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	project, found := k.GetProject(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// deadline, err := strconv.ParseInt(project.Deadline, 10, 64)
	// if err != nil {
	// 	return nil, sdkerrors.Wrap(types.ErrDeadline, "Deadline is at the wrong format")
	// }

	/*if ctx.BlockHeight() >= deadline {
		return nil, sdkerrors.Wrap(types.ErrDeadline, "Cannot contribute to project after deadline")
	}
	*/

	recipient, err := sdk.AccAddressFromBech32(project.Creator)
	if err != nil {
		panic(err)
	}

	sender, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}

	amount, err := sdk.ParseCoinsNormalized(msg.Amount)
	if err != nil {
		panic(err)
	}

	err = k.bankKeeper.SendCoins(ctx, sender, recipient, amount)
	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrSendingCoins, "Cannot send coins")
	}

	contributor := types.Contributors{Projectid: msg.Id, Contributor: msg.Creator, Amount: msg.Amount}

	k.AppendContributors(ctx, contributor)

	return &types.MsgFundProjectResponse{}, nil
}
