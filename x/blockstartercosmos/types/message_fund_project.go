package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgFundProject = "fund_project"

var _ sdk.Msg = &MsgFundProject{}

func NewMsgFundProject(creator string, id uint64, amount string) *MsgFundProject {
	return &MsgFundProject{
		Creator: creator,
		Id:      id,
		Amount:  amount,
	}
}

func (msg *MsgFundProject) Route() string {
	return RouterKey
}

func (msg *MsgFundProject) Type() string {
	return TypeMsgFundProject
}

func (msg *MsgFundProject) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgFundProject) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgFundProject) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
