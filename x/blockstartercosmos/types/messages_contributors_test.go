package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/mehdisbys/blockstarter-cosmos/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateContributors_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateContributors
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateContributors{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateContributors{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateContributors_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateContributors
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateContributors{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateContributors{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteContributors_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteContributors
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteContributors{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteContributors{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
