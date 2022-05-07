package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/blockstartercosmos module sentinel errors
var (
	ErrSample       = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrDeadline     = sdkerrors.Register(ModuleName, 1, "deadline")
	ErrSendingCoins = sdkerrors.Register(ModuleName, 2, "sending coins")
	ErrStatus       = sdkerrors.Register(ModuleName, 3, "state")
)
