package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgClaimDonation = "claim_donation"

var _ sdk.Msg = &MsgClaimDonation{}

func NewMsgClaimDonation(creator string, id uint64) *MsgClaimDonation {
	return &MsgClaimDonation{
		Creator: creator,
		Id:      id,
	}
}

func (msg *MsgClaimDonation) Route() string {
	return RouterKey
}

func (msg *MsgClaimDonation) Type() string {
	return TypeMsgClaimDonation
}

func (msg *MsgClaimDonation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgClaimDonation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgClaimDonation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
