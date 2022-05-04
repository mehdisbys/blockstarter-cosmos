/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../blockstartercosmos/params";
import { Project } from "../blockstartercosmos/project";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Contributors } from "../blockstartercosmos/contributors";

export const protobufPackage =
  "mehdisbys.blockstartercosmos.blockstartercosmos";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetProjectRequest {
  id: number;
}

export interface QueryGetProjectResponse {
  Project: Project | undefined;
}

export interface QueryAllProjectRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllProjectResponse {
  Project: Project[];
  pagination: PageResponse | undefined;
}

export interface QueryGetContributorsRequest {
  id: number;
}

export interface QueryGetContributorsResponse {
  Contributors: Contributors | undefined;
}

export interface QueryAllContributorsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllContributorsResponse {
  Contributors: Contributors[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetProjectRequest: object = { id: 0 };

export const QueryGetProjectRequest = {
  encode(
    message: QueryGetProjectRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProjectRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetProjectRequest } as QueryGetProjectRequest;
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

  fromJSON(object: any): QueryGetProjectRequest {
    const message = { ...baseQueryGetProjectRequest } as QueryGetProjectRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetProjectRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProjectRequest>
  ): QueryGetProjectRequest {
    const message = { ...baseQueryGetProjectRequest } as QueryGetProjectRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetProjectResponse: object = {};

export const QueryGetProjectResponse = {
  encode(
    message: QueryGetProjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Project !== undefined) {
      Project.encode(message.Project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProjectResponse,
    } as QueryGetProjectResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Project = Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProjectResponse {
    const message = {
      ...baseQueryGetProjectResponse,
    } as QueryGetProjectResponse;
    if (object.Project !== undefined && object.Project !== null) {
      message.Project = Project.fromJSON(object.Project);
    } else {
      message.Project = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProjectResponse): unknown {
    const obj: any = {};
    message.Project !== undefined &&
      (obj.Project = message.Project
        ? Project.toJSON(message.Project)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProjectResponse>
  ): QueryGetProjectResponse {
    const message = {
      ...baseQueryGetProjectResponse,
    } as QueryGetProjectResponse;
    if (object.Project !== undefined && object.Project !== null) {
      message.Project = Project.fromPartial(object.Project);
    } else {
      message.Project = undefined;
    }
    return message;
  },
};

const baseQueryAllProjectRequest: object = {};

export const QueryAllProjectRequest = {
  encode(
    message: QueryAllProjectRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllProjectRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllProjectRequest } as QueryAllProjectRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProjectRequest {
    const message = { ...baseQueryAllProjectRequest } as QueryAllProjectRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProjectRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProjectRequest>
  ): QueryAllProjectRequest {
    const message = { ...baseQueryAllProjectRequest } as QueryAllProjectRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllProjectResponse: object = {};

export const QueryAllProjectResponse = {
  encode(
    message: QueryAllProjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Project) {
      Project.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllProjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProjectResponse,
    } as QueryAllProjectResponse;
    message.Project = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Project.push(Project.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProjectResponse {
    const message = {
      ...baseQueryAllProjectResponse,
    } as QueryAllProjectResponse;
    message.Project = [];
    if (object.Project !== undefined && object.Project !== null) {
      for (const e of object.Project) {
        message.Project.push(Project.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProjectResponse): unknown {
    const obj: any = {};
    if (message.Project) {
      obj.Project = message.Project.map((e) =>
        e ? Project.toJSON(e) : undefined
      );
    } else {
      obj.Project = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProjectResponse>
  ): QueryAllProjectResponse {
    const message = {
      ...baseQueryAllProjectResponse,
    } as QueryAllProjectResponse;
    message.Project = [];
    if (object.Project !== undefined && object.Project !== null) {
      for (const e of object.Project) {
        message.Project.push(Project.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetContributorsRequest: object = { id: 0 };

export const QueryGetContributorsRequest = {
  encode(
    message: QueryGetContributorsRequest,
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
  ): QueryGetContributorsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetContributorsRequest,
    } as QueryGetContributorsRequest;
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

  fromJSON(object: any): QueryGetContributorsRequest {
    const message = {
      ...baseQueryGetContributorsRequest,
    } as QueryGetContributorsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetContributorsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetContributorsRequest>
  ): QueryGetContributorsRequest {
    const message = {
      ...baseQueryGetContributorsRequest,
    } as QueryGetContributorsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetContributorsResponse: object = {};

export const QueryGetContributorsResponse = {
  encode(
    message: QueryGetContributorsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Contributors !== undefined) {
      Contributors.encode(
        message.Contributors,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetContributorsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetContributorsResponse,
    } as QueryGetContributorsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Contributors = Contributors.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetContributorsResponse {
    const message = {
      ...baseQueryGetContributorsResponse,
    } as QueryGetContributorsResponse;
    if (object.Contributors !== undefined && object.Contributors !== null) {
      message.Contributors = Contributors.fromJSON(object.Contributors);
    } else {
      message.Contributors = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetContributorsResponse): unknown {
    const obj: any = {};
    message.Contributors !== undefined &&
      (obj.Contributors = message.Contributors
        ? Contributors.toJSON(message.Contributors)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetContributorsResponse>
  ): QueryGetContributorsResponse {
    const message = {
      ...baseQueryGetContributorsResponse,
    } as QueryGetContributorsResponse;
    if (object.Contributors !== undefined && object.Contributors !== null) {
      message.Contributors = Contributors.fromPartial(object.Contributors);
    } else {
      message.Contributors = undefined;
    }
    return message;
  },
};

const baseQueryAllContributorsRequest: object = {};

export const QueryAllContributorsRequest = {
  encode(
    message: QueryAllContributorsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllContributorsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllContributorsRequest,
    } as QueryAllContributorsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllContributorsRequest {
    const message = {
      ...baseQueryAllContributorsRequest,
    } as QueryAllContributorsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllContributorsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllContributorsRequest>
  ): QueryAllContributorsRequest {
    const message = {
      ...baseQueryAllContributorsRequest,
    } as QueryAllContributorsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllContributorsResponse: object = {};

export const QueryAllContributorsResponse = {
  encode(
    message: QueryAllContributorsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Contributors) {
      Contributors.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllContributorsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllContributorsResponse,
    } as QueryAllContributorsResponse;
    message.Contributors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Contributors.push(
            Contributors.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllContributorsResponse {
    const message = {
      ...baseQueryAllContributorsResponse,
    } as QueryAllContributorsResponse;
    message.Contributors = [];
    if (object.Contributors !== undefined && object.Contributors !== null) {
      for (const e of object.Contributors) {
        message.Contributors.push(Contributors.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllContributorsResponse): unknown {
    const obj: any = {};
    if (message.Contributors) {
      obj.Contributors = message.Contributors.map((e) =>
        e ? Contributors.toJSON(e) : undefined
      );
    } else {
      obj.Contributors = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllContributorsResponse>
  ): QueryAllContributorsResponse {
    const message = {
      ...baseQueryAllContributorsResponse,
    } as QueryAllContributorsResponse;
    message.Contributors = [];
    if (object.Contributors !== undefined && object.Contributors !== null) {
      for (const e of object.Contributors) {
        message.Contributors.push(Contributors.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Project by id. */
  Project(request: QueryGetProjectRequest): Promise<QueryGetProjectResponse>;
  /** Queries a list of Project items. */
  ProjectAll(request: QueryAllProjectRequest): Promise<QueryAllProjectResponse>;
  /** Queries a Contributors by id. */
  Contributors(
    request: QueryGetContributorsRequest
  ): Promise<QueryGetContributorsResponse>;
  /** Queries a list of Contributors items. */
  ContributorsAll(
    request: QueryAllContributorsRequest
  ): Promise<QueryAllContributorsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "mehdisbys.blockstartercosmos.blockstartercosmos.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Project(request: QueryGetProjectRequest): Promise<QueryGetProjectResponse> {
    const data = QueryGetProjectRequest.encode(request).finish();
    const promise = this.rpc.request(
      "mehdisbys.blockstartercosmos.blockstartercosmos.Query",
      "Project",
      data
    );
    return promise.then((data) =>
      QueryGetProjectResponse.decode(new Reader(data))
    );
  }

  ProjectAll(
    request: QueryAllProjectRequest
  ): Promise<QueryAllProjectResponse> {
    const data = QueryAllProjectRequest.encode(request).finish();
    const promise = this.rpc.request(
      "mehdisbys.blockstartercosmos.blockstartercosmos.Query",
      "ProjectAll",
      data
    );
    return promise.then((data) =>
      QueryAllProjectResponse.decode(new Reader(data))
    );
  }

  Contributors(
    request: QueryGetContributorsRequest
  ): Promise<QueryGetContributorsResponse> {
    const data = QueryGetContributorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "mehdisbys.blockstartercosmos.blockstartercosmos.Query",
      "Contributors",
      data
    );
    return promise.then((data) =>
      QueryGetContributorsResponse.decode(new Reader(data))
    );
  }

  ContributorsAll(
    request: QueryAllContributorsRequest
  ): Promise<QueryAllContributorsResponse> {
    const data = QueryAllContributorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "mehdisbys.blockstartercosmos.blockstartercosmos.Query",
      "ContributorsAll",
      data
    );
    return promise.then((data) =>
      QueryAllContributorsResponse.decode(new Reader(data))
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
