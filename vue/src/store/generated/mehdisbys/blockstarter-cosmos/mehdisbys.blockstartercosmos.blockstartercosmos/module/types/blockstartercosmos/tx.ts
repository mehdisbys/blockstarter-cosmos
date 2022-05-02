/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage =
  "mehdisbys.blockstartercosmos.blockstartercosmos";

export interface MsgCreateProject {
  creator: string;
  title: string;
  description: string;
  deadline: string;
  seller: string;
  targetFunding: string;
}

export interface MsgCreateProjectResponse {
  id: number;
}

export interface MsgUpdateProject {
  creator: string;
  id: number;
  title: string;
  description: string;
  deadline: string;
  seller: string;
  targetFunding: string;
}

export interface MsgUpdateProjectResponse {}

export interface MsgDeleteProject {
  creator: string;
  id: number;
}

export interface MsgDeleteProjectResponse {}

export interface MsgFundProject {
  creator: string;
  id: number;
  amount: string;
}

export interface MsgFundProjectResponse {}

export interface MsgClaimDonation {
  creator: string;
  id: number;
}

export interface MsgClaimDonationResponse {}

const baseMsgCreateProject: object = {
  creator: "",
  title: "",
  description: "",
  deadline: "",
  seller: "",
  targetFunding: "",
};

export const MsgCreateProject = {
  encode(message: MsgCreateProject, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.deadline !== "") {
      writer.uint32(34).string(message.deadline);
    }
    if (message.seller !== "") {
      writer.uint32(42).string(message.seller);
    }
    if (message.targetFunding !== "") {
      writer.uint32(50).string(message.targetFunding);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateProject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateProject } as MsgCreateProject;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.deadline = reader.string();
          break;
        case 5:
          message.seller = reader.string();
          break;
        case 6:
          message.targetFunding = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProject {
    const message = { ...baseMsgCreateProject } as MsgCreateProject;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = String(object.deadline);
    } else {
      message.deadline = "";
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.targetFunding !== undefined && object.targetFunding !== null) {
      message.targetFunding = String(object.targetFunding);
    } else {
      message.targetFunding = "";
    }
    return message;
  },

  toJSON(message: MsgCreateProject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    message.seller !== undefined && (obj.seller = message.seller);
    message.targetFunding !== undefined &&
      (obj.targetFunding = message.targetFunding);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateProject>): MsgCreateProject {
    const message = { ...baseMsgCreateProject } as MsgCreateProject;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = "";
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.targetFunding !== undefined && object.targetFunding !== null) {
      message.targetFunding = object.targetFunding;
    } else {
      message.targetFunding = "";
    }
    return message;
  },
};

const baseMsgCreateProjectResponse: object = { id: 0 };

export const MsgCreateProjectResponse = {
  encode(
    message: MsgCreateProjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateProjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateProjectResponse,
    } as MsgCreateProjectResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProjectResponse {
    const message = {
      ...baseMsgCreateProjectResponse,
    } as MsgCreateProjectResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateProjectResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateProjectResponse>
  ): MsgCreateProjectResponse {
    const message = {
      ...baseMsgCreateProjectResponse,
    } as MsgCreateProjectResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateProject: object = {
  creator: "",
  id: 0,
  title: "",
  description: "",
  deadline: "",
  seller: "",
  targetFunding: "",
};

export const MsgUpdateProject = {
  encode(message: MsgUpdateProject, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.deadline !== "") {
      writer.uint32(42).string(message.deadline);
    }
    if (message.seller !== "") {
      writer.uint32(50).string(message.seller);
    }
    if (message.targetFunding !== "") {
      writer.uint32(58).string(message.targetFunding);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateProject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateProject } as MsgUpdateProject;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.deadline = reader.string();
          break;
        case 6:
          message.seller = reader.string();
          break;
        case 7:
          message.targetFunding = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateProject {
    const message = { ...baseMsgUpdateProject } as MsgUpdateProject;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = String(object.deadline);
    } else {
      message.deadline = "";
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.targetFunding !== undefined && object.targetFunding !== null) {
      message.targetFunding = String(object.targetFunding);
    } else {
      message.targetFunding = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateProject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    message.seller !== undefined && (obj.seller = message.seller);
    message.targetFunding !== undefined &&
      (obj.targetFunding = message.targetFunding);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateProject>): MsgUpdateProject {
    const message = { ...baseMsgUpdateProject } as MsgUpdateProject;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = "";
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.targetFunding !== undefined && object.targetFunding !== null) {
      message.targetFunding = object.targetFunding;
    } else {
      message.targetFunding = "";
    }
    return message;
  },
};

const baseMsgUpdateProjectResponse: object = {};

export const MsgUpdateProjectResponse = {
  encode(
    _: MsgUpdateProjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateProjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateProjectResponse,
    } as MsgUpdateProjectResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateProjectResponse {
    const message = {
      ...baseMsgUpdateProjectResponse,
    } as MsgUpdateProjectResponse;
    return message;
  },

  toJSON(_: MsgUpdateProjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateProjectResponse>
  ): MsgUpdateProjectResponse {
    const message = {
      ...baseMsgUpdateProjectResponse,
    } as MsgUpdateProjectResponse;
    return message;
  },
};

const baseMsgDeleteProject: object = { creator: "", id: 0 };

export const MsgDeleteProject = {
  encode(message: MsgDeleteProject, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteProject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteProject } as MsgDeleteProject;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteProject {
    const message = { ...baseMsgDeleteProject } as MsgDeleteProject;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteProject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteProject>): MsgDeleteProject {
    const message = { ...baseMsgDeleteProject } as MsgDeleteProject;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteProjectResponse: object = {};

export const MsgDeleteProjectResponse = {
  encode(
    _: MsgDeleteProjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteProjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteProjectResponse,
    } as MsgDeleteProjectResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteProjectResponse {
    const message = {
      ...baseMsgDeleteProjectResponse,
    } as MsgDeleteProjectResponse;
    return message;
  },

  toJSON(_: MsgDeleteProjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteProjectResponse>
  ): MsgDeleteProjectResponse {
    const message = {
      ...baseMsgDeleteProjectResponse,
    } as MsgDeleteProjectResponse;
    return message;
  },
};

const baseMsgFundProject: object = { creator: "", id: 0, amount: "" };

export const MsgFundProject = {
  encode(message: MsgFundProject, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFundProject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFundProject } as MsgFundProject;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFundProject {
    const message = { ...baseMsgFundProject } as MsgFundProject;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgFundProject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFundProject>): MsgFundProject {
    const message = { ...baseMsgFundProject } as MsgFundProject;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseMsgFundProjectResponse: object = {};

export const MsgFundProjectResponse = {
  encode(_: MsgFundProjectResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFundProjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFundProjectResponse } as MsgFundProjectResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgFundProjectResponse {
    const message = { ...baseMsgFundProjectResponse } as MsgFundProjectResponse;
    return message;
  },

  toJSON(_: MsgFundProjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgFundProjectResponse>): MsgFundProjectResponse {
    const message = { ...baseMsgFundProjectResponse } as MsgFundProjectResponse;
    return message;
  },
};

const baseMsgClaimDonation: object = { creator: "", id: 0 };

export const MsgClaimDonation = {
  encode(message: MsgClaimDonation, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgClaimDonation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimDonation } as MsgClaimDonation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimDonation {
    const message = { ...baseMsgClaimDonation } as MsgClaimDonation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgClaimDonation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimDonation>): MsgClaimDonation {
    const message = { ...baseMsgClaimDonation } as MsgClaimDonation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgClaimDonationResponse: object = {};

export const MsgClaimDonationResponse = {
  encode(
    _: MsgClaimDonationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgClaimDonationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgClaimDonationResponse,
    } as MsgClaimDonationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgClaimDonationResponse {
    const message = {
      ...baseMsgClaimDonationResponse,
    } as MsgClaimDonationResponse;
    return message;
  },

  toJSON(_: MsgClaimDonationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgClaimDonationResponse>
  ): MsgClaimDonationResponse {
    const message = {
      ...baseMsgClaimDonationResponse,
    } as MsgClaimDonationResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
  UpdateProject(request: MsgUpdateProject): Promise<MsgUpdateProjectResponse>;
  DeleteProject(request: MsgDeleteProject): Promise<MsgDeleteProjectResponse>;
  FundProject(request: MsgFundProject): Promise<MsgFundProjectResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ClaimDonation(request: MsgClaimDonation): Promise<MsgClaimDonationResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse> {
    const data = MsgCreateProject.encode(request).finish();
    const promise = this.rpc.request(
      "mehdisbys.blockstartercosmos.blockstartercosmos.Msg",
      "CreateProject",
      data
    );
    return promise.then((data) =>
      MsgCreateProjectResponse.decode(new Reader(data))
    );
  }

  UpdateProject(request: MsgUpdateProject): Promise<MsgUpdateProjectResponse> {
    const data = MsgUpdateProject.encode(request).finish();
    const promise = this.rpc.request(
      "mehdisbys.blockstartercosmos.blockstartercosmos.Msg",
      "UpdateProject",
      data
    );
    return promise.then((data) =>
      MsgUpdateProjectResponse.decode(new Reader(data))
    );
  }

  DeleteProject(request: MsgDeleteProject): Promise<MsgDeleteProjectResponse> {
    const data = MsgDeleteProject.encode(request).finish();
    const promise = this.rpc.request(
      "mehdisbys.blockstartercosmos.blockstartercosmos.Msg",
      "DeleteProject",
      data
    );
    return promise.then((data) =>
      MsgDeleteProjectResponse.decode(new Reader(data))
    );
  }

  FundProject(request: MsgFundProject): Promise<MsgFundProjectResponse> {
    const data = MsgFundProject.encode(request).finish();
    const promise = this.rpc.request(
      "mehdisbys.blockstartercosmos.blockstartercosmos.Msg",
      "FundProject",
      data
    );
    return promise.then((data) =>
      MsgFundProjectResponse.decode(new Reader(data))
    );
  }

  ClaimDonation(request: MsgClaimDonation): Promise<MsgClaimDonationResponse> {
    const data = MsgClaimDonation.encode(request).finish();
    const promise = this.rpc.request(
      "mehdisbys.blockstartercosmos.blockstartercosmos.Msg",
      "ClaimDonation",
      data
    );
    return promise.then((data) =>
      MsgClaimDonationResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
