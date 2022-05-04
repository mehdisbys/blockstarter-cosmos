package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
)

func (k msgServer) CreateContributors(goCtx context.Context, msg *types.MsgCreateContributors) (*types.MsgCreateContributorsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var contributors = types.Contributors{
		Creator:     msg.Creator,
		Projectid:   msg.Projectid,
		Contributor: msg.Contributor,
		Amount:      msg.Amount,
	}

	id := k.AppendContributors(
		ctx,
		contributors,
	)

	return &types.MsgCreateContributorsResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateContributors(goCtx context.Context, msg *types.MsgUpdateContributors) (*types.MsgUpdateContributorsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var contributors = types.Contributors{
		Creator:     msg.Creator,
		Id:          msg.Id,
		Projectid:   msg.Projectid,
		Contributor: msg.Contributor,
		Amount:      msg.Amount,
	}

	// Checks that the element exists
	val, found := k.GetContributors(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetContributors(ctx, contributors)

	return &types.MsgUpdateContributorsResponse{}, nil
}

func (k msgServer) DeleteContributors(goCtx context.Context, msg *types.MsgDeleteContributors) (*types.MsgDeleteContributorsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetContributors(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveContributors(ctx, msg.Id)

	return &types.MsgDeleteContributorsResponse{}, nil
}
