package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateContributors = "create_contributors"
	TypeMsgUpdateContributors = "update_contributors"
	TypeMsgDeleteContributors = "delete_contributors"
)

var _ sdk.Msg = &MsgCreateContributors{}

func NewMsgCreateContributors(creator string, projectid uint64, contributor string, amount string) *MsgCreateContributors {
	return &MsgCreateContributors{
		Creator:     creator,
		Projectid:   projectid,
		Contributor: contributor,
		Amount:      amount,
	}
}

func (msg *MsgCreateContributors) Route() string {
	return RouterKey
}

func (msg *MsgCreateContributors) Type() string {
	return TypeMsgCreateContributors
}

func (msg *MsgCreateContributors) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateContributors) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateContributors) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateContributors{}

func NewMsgUpdateContributors(creator string, id uint64, projectid uint64, contributor string, amount string) *MsgUpdateContributors {
	return &MsgUpdateContributors{
		Id:          id,
		Creator:     creator,
		Projectid:   projectid,
		Contributor: contributor,
		Amount:      amount,
	}
}

func (msg *MsgUpdateContributors) Route() string {
	return RouterKey
}

func (msg *MsgUpdateContributors) Type() string {
	return TypeMsgUpdateContributors
}

func (msg *MsgUpdateContributors) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateContributors) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateContributors) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteContributors{}

func NewMsgDeleteContributors(creator string, id uint64) *MsgDeleteContributors {
	return &MsgDeleteContributors{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteContributors) Route() string {
	return RouterKey
}

func (msg *MsgDeleteContributors) Type() string {
	return TypeMsgDeleteContributors
}

func (msg *MsgDeleteContributors) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteContributors) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteContributors) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
