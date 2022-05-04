package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
)

// GetContributorsCount get the total number of contributors
func (k Keeper) GetContributorsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ContributorsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetContributorsCount set the total number of contributors
func (k Keeper) SetContributorsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ContributorsCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendContributors appends a contributors in the store with a new id and update the count
func (k Keeper) AppendContributors(
	ctx sdk.Context,
	contributors types.Contributors,
) uint64 {
	// Create the contributors
	count := k.GetContributorsCount(ctx)

	// Set the ID of the appended value
	contributors.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ContributorsKey))
	appendedValue := k.cdc.MustMarshal(&contributors)
	store.Set(GetContributorsIDBytes(contributors.Id), appendedValue)

	// Update contributors count
	k.SetContributorsCount(ctx, count+1)

	return count
}

// SetContributors set a specific contributors in the store
func (k Keeper) SetContributors(ctx sdk.Context, contributors types.Contributors) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ContributorsKey))
	b := k.cdc.MustMarshal(&contributors)
	store.Set(GetContributorsIDBytes(contributors.Id), b)
}

// GetContributors returns a contributors from its id
func (k Keeper) GetContributors(ctx sdk.Context, id uint64) (val types.Contributors, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ContributorsKey))
	b := store.Get(GetContributorsIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveContributors removes a contributors from the store
func (k Keeper) RemoveContributors(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ContributorsKey))
	store.Delete(GetContributorsIDBytes(id))
}

// GetAllContributors returns all contributors
func (k Keeper) GetAllContributors(ctx sdk.Context) (list []types.Contributors) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ContributorsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Contributors
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetContributorsIDBytes returns the byte representation of the ID
func GetContributorsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetContributorsIDFromBytes returns ID in uint64 format from a byte array
func GetContributorsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
