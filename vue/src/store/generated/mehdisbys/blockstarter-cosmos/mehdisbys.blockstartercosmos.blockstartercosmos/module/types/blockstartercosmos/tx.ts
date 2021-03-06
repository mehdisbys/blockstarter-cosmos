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
  state: string;
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

export interface MsgCreateContributors {
  creator: string;
  projectid: number;
  contributor: string;
  amount: string;
}

export interface MsgCreateContributorsResponse {
  id: number;
}

export interface MsgUpdateContributors {
  creator: string;
  id: number;
  projectid: number;
  contributor: string;
  amount: string;
}

export interface MsgUpdateContributorsResponse {}

export interface MsgDeleteContributors {
  creator: string;
  id: number;
}

export interface MsgDeleteContributorsResponse {}

export interface MsgClaimContributions {
  creator: string;
  projectId: number;
}

export interface MsgClaimContributionsResponse {}

const baseMsgCreateProject: object = {
  creator: "",
  title: "",
  description: "",
  deadline: "",
  seller: "",
  targetFunding: "",
  state: "",
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
    if (message.state !== "") {
      writer.uint32(58).string(message.state);
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
        case 7:
          message.state = reader.string();
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
    if (object.state !== undefined && object.state !== null) {
      message.state = String(object.state);
    } else {
      message.state = "";
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
    message.state !== undefined && (obj.state = message.state);
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
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
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

const baseMsgCreateContributors: object = {
  creator: "",
  projectid: 0,
  contributor: "",
  amount: "",
};

export const MsgCreateContributors = {
  encode(
    message: MsgCreateContributors,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.projectid !== 0) {
      writer.uint32(16).uint64(message.projectid);
    }
    if (message.contributor !== "") {
      writer.uint32(26).string(message.contributor);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateContributors {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateContributors } as MsgCreateContributors;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projectid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.contributor = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateContributors {
    const message = { ...baseMsgCreateContributors } as MsgCreateContributors;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.projectid !== undefined && object.projectid !== null) {
      message.projectid = Number(object.projectid);
    } else {
      message.projectid = 0;
    }
    if (object.contributor !== undefined && object.contributor !== null) {
      message.contributor = String(object.contributor);
    } else {
      message.contributor = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgCreateContributors): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.projectid !== undefined && (obj.projectid = message.projectid);
    message.contributor !== undefined &&
      (obj.contributor = message.contributor);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateContributors>
  ): MsgCreateContributors {
    const message = { ...baseMsgCreateContributors } as MsgCreateContributors;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.projectid !== undefined && object.projectid !== null) {
      message.projectid = object.projectid;
    } else {
      message.projectid = 0;
    }
    if (object.contributor !== undefined && object.contributor !== null) {
      message.contributor = object.contributor;
    } else {
      message.contributor = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseMsgCreateContributorsResponse: object = { id: 0 };

export const MsgCreateContributorsResponse = {
  encode(
    message: MsgCreateContributorsResponse,
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
  ): MsgCreateContributorsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateContributorsResponse,
    } as MsgCreateContributorsResponse;
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

  fromJSON(object: any): MsgCreateContributorsResponse {
    const message = {
      ...baseMsgCreateContributorsResponse,
    } as MsgCreateContributorsResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateContributorsResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateContributorsResponse>
  ): MsgCreateContributorsResponse {
    const message = {
      ...baseMsgCreateContributorsResponse,
    } as MsgCreateContributorsResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateContributors: object = {
  creator: "",
  id: 0,
  projectid: 0,
  contributor: "",
  amount: "",
};

export const MsgUpdateContributors = {
  encode(
    message: MsgUpdateContributors,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.projectid !== 0) {
      writer.uint32(24).uint64(message.projectid);
    }
    if (message.contributor !== "") {
      writer.uint32(34).string(message.contributor);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateContributors {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateContributors } as MsgUpdateContributors;
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
          message.projectid = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.contributor = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateContributors {
    const message = { ...baseMsgUpdateContributors } as MsgUpdateContributors;
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
    if (object.projectid !== undefined && object.projectid !== null) {
      message.projectid = Number(object.projectid);
    } else {
      message.projectid = 0;
    }
    if (object.contributor !== undefined && object.contributor !== null) {
      message.contributor = String(object.contributor);
    } else {
      message.contributor = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateContributors): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.projectid !== undefined && (obj.projectid = message.projectid);
    message.contributor !== undefined &&
      (obj.contributor = message.contributor);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateContributors>
  ): MsgUpdateContributors {
    const message = { ...baseMsgUpdateContributors } as MsgUpdateContributors;
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
    if (object.projectid !== undefined && object.projectid !== null) {
      message.projectid = object.projectid;
    } else {
      message.projectid = 0;
    }
    if (object.contributor !== undefined && object.contributor !== null) {
      message.contributor = object.contributor;
    } else {
      message.contributor = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseMsgUpdateContributorsResponse: object = {};

export const MsgUpdateContributorsResponse = {
  encode(
    _: MsgUpdateContributorsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateContributorsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateContributorsResponse,
    } as MsgUpdateContributorsResponse;
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

  fromJSON(_: any): MsgUpdateContributorsResponse {
    const message = {
      ...baseMsgUpdateContributorsResponse,
    } as MsgUpdateContributorsResponse;
    return message;
  },

  toJSON(_: MsgUpdateContributorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateContributorsResponse>
  ): MsgUpdateContributorsResponse {
    const message = {
      ...baseMsgUpdateContributorsResponse,
    } as MsgUpdateContributorsResponse;
    return message;
  },
};

const baseMsgDeleteContributors: object = { creator: "", id: 0 };

export const MsgDeleteContributors = {
  encode(
    message: MsgDeleteContributors,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteContributors {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteContributors } as MsgDeleteContributors;
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

  fromJSON(object: any): MsgDeleteContributors {
    const message = { ...baseMsgDeleteContributors } as MsgDeleteContributors;
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

  toJSON(message: MsgDeleteContributors): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteContributors>
  ): MsgDeleteContributors {
    const message = { ...baseMsgDeleteContributors } as MsgDeleteContributors;
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

const baseMsgDeleteContributorsResponse: object = {};

export const MsgDeleteContributorsResponse = {
  encode(
    _: MsgDeleteContributorsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteContributorsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteContributorsResponse,
    } as MsgDeleteContributorsResponse;
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

  fromJSON(_: any): MsgDeleteContributorsResponse {
    const message = {
      ...baseMsgDeleteContributorsResponse,
    } as MsgDeleteContributorsResponse;
    return message;
  },

  toJSON(_: MsgDeleteContributorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteContributorsResponse>
  ): MsgDeleteContributorsResponse {
    const message = {
      ...baseMsgDeleteContributorsResponse,
    } as MsgDeleteContributorsResponse;
    return message;
  },
};

const baseMsgClaimContributions: object = { creator: "", projectId: 0 };

export const MsgClaimContributions = {
  encode(
    message: MsgClaimContributions,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).uint64(message.projectId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgClaimContributions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimContributions } as MsgClaimContributions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projectId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimContributions {
    const message = { ...baseMsgClaimContributions } as MsgClaimContributions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.projectId !== undefined && object.projectId !== null) {
      message.projectId = Number(object.projectId);
    } else {
      message.projectId = 0;
    }
    return message;
  },

  toJSON(message: MsgClaimContributions): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgClaimContributions>
  ): MsgClaimContributions {
    const message = { ...baseMsgClaimContributions } as MsgClaimContributions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.projectId !== undefined && object.projectId !== null) {
      message.projectId = object.projectId;
    } else {
      message.projectId = 0;
    }
    return message;
  },
};

const baseMsgClaimContributionsResponse: object = {};

export const MsgClaimContributionsResponse = {
  encode(
    _: MsgClaimContributionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgClaimContributionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgClaimContributionsResponse,
    } as MsgClaimContributionsResponse;
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

  fromJSON(_: any): MsgClaimContributionsResponse {
    const message = {
      ...baseMsgClaimContributionsResponse,
    } as MsgClaimContributionsResponse;
    return message;
  },

  toJSON(_: MsgClaimContributionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgClaimContributionsResponse>
  ): MsgClaimContributionsResponse {
    const message = {
      ...baseMsgClaimContributionsResponse,
    } as MsgClaimContributionsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
  UpdateProject(request: MsgUpdateProject): Promise<MsgUpdateProjectResponse>;
  DeleteProject(request: MsgDeleteProject): Promise<MsgDeleteProjectResponse>;
  FundProject(request: MsgFundProject): Promise<MsgFundProjectResponse>;
  ClaimDonation(request: MsgClaimDonation): Promise<MsgClaimDonationResponse>;
  CreateContributors(
    request: MsgCreateContributors
  ): Promise<MsgCreateContributorsResponse>;
  UpdateContributors(
    request: MsgUpdateContributors
  ): Promise<MsgUpdateContributorsResponse>;
  DeleteContributors(
    request: MsgDeleteContributors
  ): Promise<MsgDeleteContributorsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ClaimContributions(
    request: MsgClaimContributions
  ): Promise<MsgClaimContributionsResponse>;
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

  CreateContributors(
    request: MsgCreateContributors
  ): Promise<MsgCreateContributorsResponse> {
    const data = MsgCreateContributors.encode(request).finish();
    const promise = this.rpc.request(
      "mehdisbys.blockstartercosmos.blockstartercosmos.Msg",
      "CreateContributors",
      data
    );
    return promise.then((data) =>
      MsgCreateContributorsResponse.decode(new Reader(data))
    );
  }

  UpdateContributors(
    request: MsgUpdateContributors
  ): Promise<MsgUpdateContributorsResponse> {
    const data = MsgUpdateContributors.encode(request).finish();
    const promise = this.rpc.request(
      "mehdisbys.blockstartercosmos.blockstartercosmos.Msg",
      "UpdateContributors",
      data
    );
    return promise.then((data) =>
      MsgUpdateContributorsResponse.decode(new Reader(data))
    );
  }

  DeleteContributors(
    request: MsgDeleteContributors
  ): Promise<MsgDeleteContributorsResponse> {
    const data = MsgDeleteContributors.encode(request).finish();
    const promise = this.rpc.request(
      "mehdisbys.blockstartercosmos.blockstartercosmos.Msg",
      "DeleteContributors",
      data
    );
    return promise.then((data) =>
      MsgDeleteContributorsResponse.decode(new Reader(data))
    );
  }

  ClaimContributions(
    request: MsgClaimContributions
  ): Promise<MsgClaimContributionsResponse> {
    const data = MsgClaimContributions.encode(request).finish();
    const promise = this.rpc.request(
      "mehdisbys.blockstartercosmos.blockstartercosmos.Msg",
      "ClaimContributions",
      data
    );
    return promise.then((data) =>
      MsgClaimContributionsResponse.decode(new Reader(data))
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
