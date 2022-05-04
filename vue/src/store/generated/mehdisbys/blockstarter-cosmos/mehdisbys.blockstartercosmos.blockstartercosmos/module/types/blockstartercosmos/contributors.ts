/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage =
  "mehdisbys.blockstartercosmos.blockstartercosmos";

export interface Contributors {
  id: number;
  projectid: number;
  contributor: string;
  amount: string;
  creator: string;
}

const baseContributors: object = {
  id: 0,
  projectid: 0,
  contributor: "",
  amount: "",
  creator: "",
};

export const Contributors = {
  encode(message: Contributors, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
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
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Contributors {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContributors } as Contributors;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
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
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Contributors {
    const message = { ...baseContributors } as Contributors;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Contributors): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.projectid !== undefined && (obj.projectid = message.projectid);
    message.contributor !== undefined &&
      (obj.contributor = message.contributor);
    message.amount !== undefined && (obj.amount = message.amount);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Contributors>): Contributors {
    const message = { ...baseContributors } as Contributors;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
