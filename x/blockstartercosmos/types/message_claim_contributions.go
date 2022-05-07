package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgClaimContributions = "claim_contributions"

var _ sdk.Msg = &MsgClaimContributions{}

func NewMsgClaimContributions(creator string, projectId uint64) *MsgClaimContributions {
	return &MsgClaimContributions{
		Creator:   creator,
		ProjectId: projectId,
	}
}

func (msg *MsgClaimContributions) Route() string {
	return RouterKey
}

func (msg *MsgClaimContributions) Type() string {
	return TypeMsgClaimContributions
}

func (msg *MsgClaimContributions) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgClaimContributions) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgClaimContributions) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
