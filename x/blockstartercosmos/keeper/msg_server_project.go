package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
)

func (k msgServer) CreateProject(goCtx context.Context, msg *types.MsgCreateProject) (*types.MsgCreateProjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var project = types.Project{
		Creator:       msg.Creator,
		Title:         msg.Title,
		Description:   msg.Description,
		Deadline:      msg.Deadline,
		Seller:        msg.Seller,
		TargetFunding: msg.TargetFunding,
	}

	borrower, _ := sdk.AccAddressFromBech32(msg.Creator)

	// Get the collateral as sdk.Coins
	target, err := sdk.ParseCoinsNormalized(project.TargetFunding)
	if err != nil {
		panic(err)
	}

	// Use the module account as escrow account
	sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, borrower, types.ModuleName, target)
	if sdkError != nil {
		return nil, sdkError
	}

	id := k.AppendProject(
		ctx,
		project,
	)

	return &types.MsgCreateProjectResponse{
		Id: id,
	}, nil
}

/*
func (k msgServer) UpdateProject(goCtx context.Context, msg *types.MsgUpdateProject) (*types.MsgUpdateProjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var project = types.Project{
		Creator:       msg.Creator,
		Id:            msg.Id,
		Title:         msg.Title,
		Description:   msg.Description,
		Deadline:      msg.Deadline,
		Seller:        msg.Seller,
		TargetFunding: msg.TargetFunding,
	}

	// Checks that the element exists
	val, found := k.GetProject(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetProject(ctx, project)

	return &types.MsgUpdateProjectResponse{}, nil
}

func (k msgServer) DeleteProject(goCtx context.Context, msg *types.MsgDeleteProject) (*types.MsgDeleteProjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetProject(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveProject(ctx, msg.Id)

	return &types.MsgDeleteProjectResponse{}, nil
}
*/
