/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage =
  "mehdisbys.blockstartercosmos.blockstartercosmos";

export interface Project {
  id: number;
  title: string;
  description: string;
  deadline: string;
  seller: string;
  targetFunding: string;
  creator: string;
  state: string;
}

const baseProject: object = {
  id: 0,
  title: "",
  description: "",
  deadline: "",
  seller: "",
  targetFunding: "",
  creator: "",
  state: "",
};

export const Project = {
  encode(message: Project, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
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
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    if (message.state !== "") {
      writer.uint32(66).string(message.state);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProject } as Project;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
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
          message.creator = reader.string();
          break;
        case 8:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Project {
    const message = { ...baseProject } as Project;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = String(object.state);
    } else {
      message.state = "";
    }
    return message;
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    message.seller !== undefined && (obj.seller = message.seller);
    message.targetFunding !== undefined &&
      (obj.targetFunding = message.targetFunding);
    message.creator !== undefined && (obj.creator = message.creator);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial(object: DeepPartial<Project>): Project {
    const message = { ...baseProject } as Project;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
    }
    return message;
  },
};

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
