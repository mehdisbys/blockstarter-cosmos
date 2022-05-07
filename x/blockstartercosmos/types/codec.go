package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateProject{}, "blockstartercosmos/CreateProject", nil)
	cdc.RegisterConcrete(&MsgUpdateProject{}, "blockstartercosmos/UpdateProject", nil)
	cdc.RegisterConcrete(&MsgDeleteProject{}, "blockstartercosmos/DeleteProject", nil)
	cdc.RegisterConcrete(&MsgFundProject{}, "blockstartercosmos/FundProject", nil)
	cdc.RegisterConcrete(&MsgClaimDonation{}, "blockstartercosmos/ClaimDonation", nil)
	cdc.RegisterConcrete(&MsgCreateContributors{}, "blockstartercosmos/CreateContributors", nil)
	cdc.RegisterConcrete(&MsgUpdateContributors{}, "blockstartercosmos/UpdateContributors", nil)
	cdc.RegisterConcrete(&MsgDeleteContributors{}, "blockstartercosmos/DeleteContributors", nil)
	cdc.RegisterConcrete(&MsgClaimContributions{}, "blockstartercosmos/ClaimContributions", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateProject{},
		&MsgUpdateProject{},
		&MsgDeleteProject{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgFundProject{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgClaimDonation{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateContributors{},
		&MsgUpdateContributors{},
		&MsgDeleteContributors{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgClaimContributions{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
