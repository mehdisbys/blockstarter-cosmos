// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateProject } from "./types/blockstartercosmos/tx";
import { MsgFundProject } from "./types/blockstartercosmos/tx";
import { MsgClaimContributions } from "./types/blockstartercosmos/tx";
import { MsgClaimDonation } from "./types/blockstartercosmos/tx";
import { MsgDeleteProject } from "./types/blockstartercosmos/tx";
import { MsgUpdateContributors } from "./types/blockstartercosmos/tx";
import { MsgDeleteContributors } from "./types/blockstartercosmos/tx";
import { MsgUpdateProject } from "./types/blockstartercosmos/tx";
import { MsgCreateContributors } from "./types/blockstartercosmos/tx";


const types = [
  ["/mehdisbys.blockstartercosmos.blockstartercosmos.MsgCreateProject", MsgCreateProject],
  ["/mehdisbys.blockstartercosmos.blockstartercosmos.MsgFundProject", MsgFundProject],
  ["/mehdisbys.blockstartercosmos.blockstartercosmos.MsgClaimContributions", MsgClaimContributions],
  ["/mehdisbys.blockstartercosmos.blockstartercosmos.MsgClaimDonation", MsgClaimDonation],
  ["/mehdisbys.blockstartercosmos.blockstartercosmos.MsgDeleteProject", MsgDeleteProject],
  ["/mehdisbys.blockstartercosmos.blockstartercosmos.MsgUpdateContributors", MsgUpdateContributors],
  ["/mehdisbys.blockstartercosmos.blockstartercosmos.MsgDeleteContributors", MsgDeleteContributors],
  ["/mehdisbys.blockstartercosmos.blockstartercosmos.MsgUpdateProject", MsgUpdateProject],
  ["/mehdisbys.blockstartercosmos.blockstartercosmos.MsgCreateContributors", MsgCreateContributors],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateProject: (data: MsgCreateProject): EncodeObject => ({ typeUrl: "/mehdisbys.blockstartercosmos.blockstartercosmos.MsgCreateProject", value: MsgCreateProject.fromPartial( data ) }),
    msgFundProject: (data: MsgFundProject): EncodeObject => ({ typeUrl: "/mehdisbys.blockstartercosmos.blockstartercosmos.MsgFundProject", value: MsgFundProject.fromPartial( data ) }),
    msgClaimContributions: (data: MsgClaimContributions): EncodeObject => ({ typeUrl: "/mehdisbys.blockstartercosmos.blockstartercosmos.MsgClaimContributions", value: MsgClaimContributions.fromPartial( data ) }),
    msgClaimDonation: (data: MsgClaimDonation): EncodeObject => ({ typeUrl: "/mehdisbys.blockstartercosmos.blockstartercosmos.MsgClaimDonation", value: MsgClaimDonation.fromPartial( data ) }),
    msgDeleteProject: (data: MsgDeleteProject): EncodeObject => ({ typeUrl: "/mehdisbys.blockstartercosmos.blockstartercosmos.MsgDeleteProject", value: MsgDeleteProject.fromPartial( data ) }),
    msgUpdateContributors: (data: MsgUpdateContributors): EncodeObject => ({ typeUrl: "/mehdisbys.blockstartercosmos.blockstartercosmos.MsgUpdateContributors", value: MsgUpdateContributors.fromPartial( data ) }),
    msgDeleteContributors: (data: MsgDeleteContributors): EncodeObject => ({ typeUrl: "/mehdisbys.blockstartercosmos.blockstartercosmos.MsgDeleteContributors", value: MsgDeleteContributors.fromPartial( data ) }),
    msgUpdateProject: (data: MsgUpdateProject): EncodeObject => ({ typeUrl: "/mehdisbys.blockstartercosmos.blockstartercosmos.MsgUpdateProject", value: MsgUpdateProject.fromPartial( data ) }),
    msgCreateContributors: (data: MsgCreateContributors): EncodeObject => ({ typeUrl: "/mehdisbys.blockstartercosmos.blockstartercosmos.MsgCreateContributors", value: MsgCreateContributors.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
