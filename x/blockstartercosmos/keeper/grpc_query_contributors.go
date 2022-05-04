package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ContributorsAll(c context.Context, req *types.QueryAllContributorsRequest) (*types.QueryAllContributorsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var contributorss []types.Contributors
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	contributorsStore := prefix.NewStore(store, types.KeyPrefix(types.ContributorsKey))

	pageRes, err := query.Paginate(contributorsStore, req.Pagination, func(key []byte, value []byte) error {
		var contributors types.Contributors
		if err := k.cdc.Unmarshal(value, &contributors); err != nil {
			return err
		}

		contributorss = append(contributorss, contributors)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllContributorsResponse{Contributors: contributorss, Pagination: pageRes}, nil
}

func (k Keeper) Contributors(c context.Context, req *types.QueryGetContributorsRequest) (*types.QueryGetContributorsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	contributors, found := k.GetContributors(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetContributorsResponse{Contributors: contributors}, nil
}
