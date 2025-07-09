/* eslint-disable */
import {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  ComputeError,
  TupleItem,
  TupleReader,
  Dictionary,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  ABIType,
  ABIGetter,
  ABIReceiver,
  TupleBuilder,
  DictionaryValue,
} from "@ton/core";

export type StateInit = {
  $$type: "StateInit";
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: src => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

export type Context = {
  $$type: "Context";
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Slice;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw.asCell());
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef().asSlice();
  return { $$type: "Context" as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell().asSlice();
  return { $$type: "Context" as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadGetterTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell().asSlice();
  return { $$type: "Context" as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw.asCell());
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: src => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

export type SendParameters = {
  $$type: "SendParameters";
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function loadGetterTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function storeTupleSendParameters(source: SendParameters) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: src => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

export type Deploy = {
  $$type: "Deploy";
  queryId: bigint;
};

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function loadGetterTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: src => {
      return loadDeploy(src.loadRef().beginParse());
    },
  };
}

export type DeployOk = {
  $$type: "DeployOk";
  queryId: bigint;
};

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function loadGetterTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: src => {
      return loadDeployOk(src.loadRef().beginParse());
    },
  };
}

export type FactoryDeploy = {
  $$type: "FactoryDeploy";
  queryId: bigint;
  cashback: Address;
};

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return { $$type: "FactoryDeploy" as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return { $$type: "FactoryDeploy" as const, queryId: _queryId, cashback: _cashback };
}

function loadGetterTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return { $$type: "FactoryDeploy" as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.cashback);
  return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
    },
    parse: src => {
      return loadFactoryDeploy(src.loadRef().beginParse());
    },
  };
}

export type ChangeOwner = {
  $$type: "ChangeOwner";
  queryId: bigint;
  newOwner: Address;
};

export function storeChangeOwner(src: ChangeOwner) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2174598809, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwner(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2174598809) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return { $$type: "ChangeOwner" as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return { $$type: "ChangeOwner" as const, queryId: _queryId, newOwner: _newOwner };
}

function loadGetterTupleChangeOwner(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return { $$type: "ChangeOwner" as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
    },
    parse: src => {
      return loadChangeOwner(src.loadRef().beginParse());
    },
  };
}

export type ChangeOwnerOk = {
  $$type: "ChangeOwnerOk";
  queryId: bigint;
  newOwner: Address;
};

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(846932810, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwnerOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 846932810) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return { $$type: "ChangeOwnerOk" as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return { $$type: "ChangeOwnerOk" as const, queryId: _queryId, newOwner: _newOwner };
}

function loadGetterTupleChangeOwnerOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return { $$type: "ChangeOwnerOk" as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
    },
    parse: src => {
      return loadChangeOwnerOk(src.loadRef().beginParse());
    },
  };
}

export type NewSurveyRequest = {
  $$type: "NewSurveyRequest";
  participantsLimit: bigint;
  rewardAmount: bigint;
  surveyHash: Cell;
};

export function storeNewSurveyRequest(src: NewSurveyRequest) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(163183003, 32);
    b_0.storeUint(src.participantsLimit, 256);
    b_0.storeCoins(src.rewardAmount);
    b_0.storeRef(src.surveyHash);
  };
}

export function loadNewSurveyRequest(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 163183003) {
    throw Error("Invalid prefix");
  }
  let _participantsLimit = sc_0.loadUintBig(256);
  let _rewardAmount = sc_0.loadCoins();
  let _surveyHash = sc_0.loadRef();
  return {
    $$type: "NewSurveyRequest" as const,
    participantsLimit: _participantsLimit,
    rewardAmount: _rewardAmount,
    surveyHash: _surveyHash,
  };
}

function loadTupleNewSurveyRequest(source: TupleReader) {
  let _participantsLimit = source.readBigNumber();
  let _rewardAmount = source.readBigNumber();
  let _surveyHash = source.readCell();
  return {
    $$type: "NewSurveyRequest" as const,
    participantsLimit: _participantsLimit,
    rewardAmount: _rewardAmount,
    surveyHash: _surveyHash,
  };
}

function loadGetterTupleNewSurveyRequest(source: TupleReader) {
  let _participantsLimit = source.readBigNumber();
  let _rewardAmount = source.readBigNumber();
  let _surveyHash = source.readCell();
  return {
    $$type: "NewSurveyRequest" as const,
    participantsLimit: _participantsLimit,
    rewardAmount: _rewardAmount,
    surveyHash: _surveyHash,
  };
}

function storeTupleNewSurveyRequest(source: NewSurveyRequest) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.participantsLimit);
  builder.writeNumber(source.rewardAmount);
  builder.writeCell(source.surveyHash);
  return builder.build();
}

function dictValueParserNewSurveyRequest(): DictionaryValue<NewSurveyRequest> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeNewSurveyRequest(src)).endCell());
    },
    parse: src => {
      return loadNewSurveyRequest(src.loadRef().beginParse());
    },
  };
}

export type FinalizeNewSurveyRequest = {
  $$type: "FinalizeNewSurveyRequest";
  participantsLimit: bigint;
  rewardAmount: bigint;
  surveyHash: Cell;
  creator: Address;
};

export function storeFinalizeNewSurveyRequest(src: FinalizeNewSurveyRequest) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1660255987, 32);
    b_0.storeUint(src.participantsLimit, 256);
    b_0.storeCoins(src.rewardAmount);
    b_0.storeRef(src.surveyHash);
    b_0.storeAddress(src.creator);
  };
}

export function loadFinalizeNewSurveyRequest(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1660255987) {
    throw Error("Invalid prefix");
  }
  let _participantsLimit = sc_0.loadUintBig(256);
  let _rewardAmount = sc_0.loadCoins();
  let _surveyHash = sc_0.loadRef();
  let _creator = sc_0.loadAddress();
  return {
    $$type: "FinalizeNewSurveyRequest" as const,
    participantsLimit: _participantsLimit,
    rewardAmount: _rewardAmount,
    surveyHash: _surveyHash,
    creator: _creator,
  };
}

function loadTupleFinalizeNewSurveyRequest(source: TupleReader) {
  let _participantsLimit = source.readBigNumber();
  let _rewardAmount = source.readBigNumber();
  let _surveyHash = source.readCell();
  let _creator = source.readAddress();
  return {
    $$type: "FinalizeNewSurveyRequest" as const,
    participantsLimit: _participantsLimit,
    rewardAmount: _rewardAmount,
    surveyHash: _surveyHash,
    creator: _creator,
  };
}

function loadGetterTupleFinalizeNewSurveyRequest(source: TupleReader) {
  let _participantsLimit = source.readBigNumber();
  let _rewardAmount = source.readBigNumber();
  let _surveyHash = source.readCell();
  let _creator = source.readAddress();
  return {
    $$type: "FinalizeNewSurveyRequest" as const,
    participantsLimit: _participantsLimit,
    rewardAmount: _rewardAmount,
    surveyHash: _surveyHash,
    creator: _creator,
  };
}

function storeTupleFinalizeNewSurveyRequest(source: FinalizeNewSurveyRequest) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.participantsLimit);
  builder.writeNumber(source.rewardAmount);
  builder.writeCell(source.surveyHash);
  builder.writeAddress(source.creator);
  return builder.build();
}

function dictValueParserFinalizeNewSurveyRequest(): DictionaryValue<FinalizeNewSurveyRequest> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeFinalizeNewSurveyRequest(src)).endCell());
    },
    parse: src => {
      return loadFinalizeNewSurveyRequest(src.loadRef().beginParse());
    },
  };
}

export type UpdateMinStorageRequest = {
  $$type: "UpdateMinStorageRequest";
  amount: bigint;
};

export function storeUpdateMinStorageRequest(src: UpdateMinStorageRequest) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3104772641, 32);
    b_0.storeUint(src.amount, 256);
  };
}

export function loadUpdateMinStorageRequest(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3104772641) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadUintBig(256);
  return { $$type: "UpdateMinStorageRequest" as const, amount: _amount };
}

function loadTupleUpdateMinStorageRequest(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: "UpdateMinStorageRequest" as const, amount: _amount };
}

function loadGetterTupleUpdateMinStorageRequest(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: "UpdateMinStorageRequest" as const, amount: _amount };
}

function storeTupleUpdateMinStorageRequest(source: UpdateMinStorageRequest) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  return builder.build();
}

function dictValueParserUpdateMinStorageRequest(): DictionaryValue<UpdateMinStorageRequest> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeUpdateMinStorageRequest(src)).endCell());
    },
    parse: src => {
      return loadUpdateMinStorageRequest(src.loadRef().beginParse());
    },
  };
}

export type UpdateMinUserRequest = {
  $$type: "UpdateMinUserRequest";
  amount: bigint;
};

export function storeUpdateMinUserRequest(src: UpdateMinUserRequest) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3635351990, 32);
    b_0.storeUint(src.amount, 256);
  };
}

export function loadUpdateMinUserRequest(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3635351990) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadUintBig(256);
  return { $$type: "UpdateMinUserRequest" as const, amount: _amount };
}

function loadTupleUpdateMinUserRequest(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: "UpdateMinUserRequest" as const, amount: _amount };
}

function loadGetterTupleUpdateMinUserRequest(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: "UpdateMinUserRequest" as const, amount: _amount };
}

function storeTupleUpdateMinUserRequest(source: UpdateMinUserRequest) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  return builder.build();
}

function dictValueParserUpdateMinUserRequest(): DictionaryValue<UpdateMinUserRequest> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeUpdateMinUserRequest(src)).endCell());
    },
    parse: src => {
      return loadUpdateMinUserRequest(src.loadRef().beginParse());
    },
  };
}

export type NewSurveyResponse = {
  $$type: "NewSurveyResponse";
  seqno: bigint;
};

export function storeNewSurveyResponse(src: NewSurveyResponse) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(564833051, 32);
    b_0.storeUint(src.seqno, 256);
  };
}

export function loadNewSurveyResponse(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 564833051) {
    throw Error("Invalid prefix");
  }
  let _seqno = sc_0.loadUintBig(256);
  return { $$type: "NewSurveyResponse" as const, seqno: _seqno };
}

function loadTupleNewSurveyResponse(source: TupleReader) {
  let _seqno = source.readBigNumber();
  return { $$type: "NewSurveyResponse" as const, seqno: _seqno };
}

function loadGetterTupleNewSurveyResponse(source: TupleReader) {
  let _seqno = source.readBigNumber();
  return { $$type: "NewSurveyResponse" as const, seqno: _seqno };
}

function storeTupleNewSurveyResponse(source: NewSurveyResponse) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.seqno);
  return builder.build();
}

function dictValueParserNewSurveyResponse(): DictionaryValue<NewSurveyResponse> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeNewSurveyResponse(src)).endCell());
    },
    parse: src => {
      return loadNewSurveyResponse(src.loadRef().beginParse());
    },
  };
}

export type PayRequest = {
  $$type: "PayRequest";
  surveyHash: Cell;
  userAddress: Address;
};

export function storePayRequest(src: PayRequest) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1686526556, 32);
    b_0.storeRef(src.surveyHash);
    b_0.storeAddress(src.userAddress);
  };
}

export function loadPayRequest(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1686526556) {
    throw Error("Invalid prefix");
  }
  let _surveyHash = sc_0.loadRef();
  let _userAddress = sc_0.loadAddress();
  return { $$type: "PayRequest" as const, surveyHash: _surveyHash, userAddress: _userAddress };
}

function loadTuplePayRequest(source: TupleReader) {
  let _surveyHash = source.readCell();
  let _userAddress = source.readAddress();
  return { $$type: "PayRequest" as const, surveyHash: _surveyHash, userAddress: _userAddress };
}

function loadGetterTuplePayRequest(source: TupleReader) {
  let _surveyHash = source.readCell();
  let _userAddress = source.readAddress();
  return { $$type: "PayRequest" as const, surveyHash: _surveyHash, userAddress: _userAddress };
}

function storeTuplePayRequest(source: PayRequest) {
  let builder = new TupleBuilder();
  builder.writeCell(source.surveyHash);
  builder.writeAddress(source.userAddress);
  return builder.build();
}

function dictValueParserPayRequest(): DictionaryValue<PayRequest> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storePayRequest(src)).endCell());
    },
    parse: src => {
      return loadPayRequest(src.loadRef().beginParse());
    },
  };
}

export type FinalizePayRequest = {
  $$type: "FinalizePayRequest";
  manager: Address;
  surveyHash: Cell;
  userAddress: Address;
};

export function storeFinalizePayRequest(src: FinalizePayRequest) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2245583674, 32);
    b_0.storeAddress(src.manager);
    b_0.storeRef(src.surveyHash);
    b_0.storeAddress(src.userAddress);
  };
}

export function loadFinalizePayRequest(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2245583674) {
    throw Error("Invalid prefix");
  }
  let _manager = sc_0.loadAddress();
  let _surveyHash = sc_0.loadRef();
  let _userAddress = sc_0.loadAddress();
  return {
    $$type: "FinalizePayRequest" as const,
    manager: _manager,
    surveyHash: _surveyHash,
    userAddress: _userAddress,
  };
}

function loadTupleFinalizePayRequest(source: TupleReader) {
  let _manager = source.readAddress();
  let _surveyHash = source.readCell();
  let _userAddress = source.readAddress();
  return {
    $$type: "FinalizePayRequest" as const,
    manager: _manager,
    surveyHash: _surveyHash,
    userAddress: _userAddress,
  };
}

function loadGetterTupleFinalizePayRequest(source: TupleReader) {
  let _manager = source.readAddress();
  let _surveyHash = source.readCell();
  let _userAddress = source.readAddress();
  return {
    $$type: "FinalizePayRequest" as const,
    manager: _manager,
    surveyHash: _surveyHash,
    userAddress: _userAddress,
  };
}

function storeTupleFinalizePayRequest(source: FinalizePayRequest) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.manager);
  builder.writeCell(source.surveyHash);
  builder.writeAddress(source.userAddress);
  return builder.build();
}

function dictValueParserFinalizePayRequest(): DictionaryValue<FinalizePayRequest> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeFinalizePayRequest(src)).endCell());
    },
    parse: src => {
      return loadFinalizePayRequest(src.loadRef().beginParse());
    },
  };
}

export type WithdrawRequest = {
  $$type: "WithdrawRequest";
  surveyHash: Cell;
  userAddress: Address;
};

export function storeWithdrawRequest(src: WithdrawRequest) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3023427087, 32);
    b_0.storeRef(src.surveyHash);
    b_0.storeAddress(src.userAddress);
  };
}

export function loadWithdrawRequest(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3023427087) {
    throw Error("Invalid prefix");
  }
  let _surveyHash = sc_0.loadRef();
  let _userAddress = sc_0.loadAddress();
  return { $$type: "WithdrawRequest" as const, surveyHash: _surveyHash, userAddress: _userAddress };
}

function loadTupleWithdrawRequest(source: TupleReader) {
  let _surveyHash = source.readCell();
  let _userAddress = source.readAddress();
  return { $$type: "WithdrawRequest" as const, surveyHash: _surveyHash, userAddress: _userAddress };
}

function loadGetterTupleWithdrawRequest(source: TupleReader) {
  let _surveyHash = source.readCell();
  let _userAddress = source.readAddress();
  return { $$type: "WithdrawRequest" as const, surveyHash: _surveyHash, userAddress: _userAddress };
}

function storeTupleWithdrawRequest(source: WithdrawRequest) {
  let builder = new TupleBuilder();
  builder.writeCell(source.surveyHash);
  builder.writeAddress(source.userAddress);
  return builder.build();
}

function dictValueParserWithdrawRequest(): DictionaryValue<WithdrawRequest> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeWithdrawRequest(src)).endCell());
    },
    parse: src => {
      return loadWithdrawRequest(src.loadRef().beginParse());
    },
  };
}

export type ManagerWithdrawRequest = {
  $$type: "ManagerWithdrawRequest";
  amount: bigint;
  userAddress: Address;
};

export function storeManagerWithdrawRequest(src: ManagerWithdrawRequest) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3993659857, 32);
    b_0.storeUint(src.amount, 256);
    b_0.storeAddress(src.userAddress);
  };
}

export function loadManagerWithdrawRequest(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3993659857) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadUintBig(256);
  let _userAddress = sc_0.loadAddress();
  return { $$type: "ManagerWithdrawRequest" as const, amount: _amount, userAddress: _userAddress };
}

function loadTupleManagerWithdrawRequest(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _userAddress = source.readAddress();
  return { $$type: "ManagerWithdrawRequest" as const, amount: _amount, userAddress: _userAddress };
}

function loadGetterTupleManagerWithdrawRequest(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _userAddress = source.readAddress();
  return { $$type: "ManagerWithdrawRequest" as const, amount: _amount, userAddress: _userAddress };
}

function storeTupleManagerWithdrawRequest(source: ManagerWithdrawRequest) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  builder.writeAddress(source.userAddress);
  return builder.build();
}

function dictValueParserManagerWithdrawRequest(): DictionaryValue<ManagerWithdrawRequest> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeManagerWithdrawRequest(src)).endCell());
    },
    parse: src => {
      return loadManagerWithdrawRequest(src.loadRef().beginParse());
    },
  };
}

export type ChangeManagerRequest = {
  $$type: "ChangeManagerRequest";
  manager: Address;
};

export function storeChangeManagerRequest(src: ChangeManagerRequest) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(111526560, 32);
    b_0.storeAddress(src.manager);
  };
}

export function loadChangeManagerRequest(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 111526560) {
    throw Error("Invalid prefix");
  }
  let _manager = sc_0.loadAddress();
  return { $$type: "ChangeManagerRequest" as const, manager: _manager };
}

function loadTupleChangeManagerRequest(source: TupleReader) {
  let _manager = source.readAddress();
  return { $$type: "ChangeManagerRequest" as const, manager: _manager };
}

function loadGetterTupleChangeManagerRequest(source: TupleReader) {
  let _manager = source.readAddress();
  return { $$type: "ChangeManagerRequest" as const, manager: _manager };
}

function storeTupleChangeManagerRequest(source: ChangeManagerRequest) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.manager);
  return builder.build();
}

function dictValueParserChangeManagerRequest(): DictionaryValue<ChangeManagerRequest> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeChangeManagerRequest(src)).endCell());
    },
    parse: src => {
      return loadChangeManagerRequest(src.loadRef().beginParse());
    },
  };
}

export type SurveysManager$Data = {
  $$type: "SurveysManager$Data";
  owner: Address;
  manager: Address;
  surveysAmount: bigint;
  minTonsForStorage: bigint;
  minTonsForUser: bigint;
};

export function storeSurveysManager$Data(src: SurveysManager$Data) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.owner);
    b_0.storeAddress(src.manager);
    b_0.storeUint(src.surveysAmount, 256);
    b_0.storeCoins(src.minTonsForStorage);
    let b_1 = new Builder();
    b_1.storeCoins(src.minTonsForUser);
    b_0.storeRef(b_1.endCell());
  };
}

export function loadSurveysManager$Data(slice: Slice) {
  let sc_0 = slice;
  let _owner = sc_0.loadAddress();
  let _manager = sc_0.loadAddress();
  let _surveysAmount = sc_0.loadUintBig(256);
  let _minTonsForStorage = sc_0.loadCoins();
  let sc_1 = sc_0.loadRef().beginParse();
  let _minTonsForUser = sc_1.loadCoins();
  return {
    $$type: "SurveysManager$Data" as const,
    owner: _owner,
    manager: _manager,
    surveysAmount: _surveysAmount,
    minTonsForStorage: _minTonsForStorage,
    minTonsForUser: _minTonsForUser,
  };
}

function loadTupleSurveysManager$Data(source: TupleReader) {
  let _owner = source.readAddress();
  let _manager = source.readAddress();
  let _surveysAmount = source.readBigNumber();
  let _minTonsForStorage = source.readBigNumber();
  let _minTonsForUser = source.readBigNumber();
  return {
    $$type: "SurveysManager$Data" as const,
    owner: _owner,
    manager: _manager,
    surveysAmount: _surveysAmount,
    minTonsForStorage: _minTonsForStorage,
    minTonsForUser: _minTonsForUser,
  };
}

function loadGetterTupleSurveysManager$Data(source: TupleReader) {
  let _owner = source.readAddress();
  let _manager = source.readAddress();
  let _surveysAmount = source.readBigNumber();
  let _minTonsForStorage = source.readBigNumber();
  let _minTonsForUser = source.readBigNumber();
  return {
    $$type: "SurveysManager$Data" as const,
    owner: _owner,
    manager: _manager,
    surveysAmount: _surveysAmount,
    minTonsForStorage: _minTonsForStorage,
    minTonsForUser: _minTonsForUser,
  };
}

function storeTupleSurveysManager$Data(source: SurveysManager$Data) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.owner);
  builder.writeAddress(source.manager);
  builder.writeNumber(source.surveysAmount);
  builder.writeNumber(source.minTonsForStorage);
  builder.writeNumber(source.minTonsForUser);
  return builder.build();
}

function dictValueParserSurveysManager$Data(): DictionaryValue<SurveysManager$Data> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSurveysManager$Data(src)).endCell());
    },
    parse: src => {
      return loadSurveysManager$Data(src.loadRef().beginParse());
    },
  };
}

export type Survey$Data = {
  $$type: "Survey$Data";
  surveysManager: Address;
  participantsLimit: bigint;
  rewardAmount: bigint;
  rewardedUsers: bigint;
  creator: Address | null;
};

export function storeSurvey$Data(src: Survey$Data) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.surveysManager);
    b_0.storeUint(src.participantsLimit, 256);
    b_0.storeCoins(src.rewardAmount);
    b_0.storeUint(src.rewardedUsers, 256);
    let b_1 = new Builder();
    b_1.storeAddress(src.creator);
    b_0.storeRef(b_1.endCell());
  };
}

export function loadSurvey$Data(slice: Slice) {
  let sc_0 = slice;
  let _surveysManager = sc_0.loadAddress();
  let _participantsLimit = sc_0.loadUintBig(256);
  let _rewardAmount = sc_0.loadCoins();
  let _rewardedUsers = sc_0.loadUintBig(256);
  let sc_1 = sc_0.loadRef().beginParse();
  let _creator = sc_1.loadMaybeAddress();
  return {
    $$type: "Survey$Data" as const,
    surveysManager: _surveysManager,
    participantsLimit: _participantsLimit,
    rewardAmount: _rewardAmount,
    rewardedUsers: _rewardedUsers,
    creator: _creator,
  };
}

function loadTupleSurvey$Data(source: TupleReader) {
  let _surveysManager = source.readAddress();
  let _participantsLimit = source.readBigNumber();
  let _rewardAmount = source.readBigNumber();
  let _rewardedUsers = source.readBigNumber();
  let _creator = source.readAddressOpt();
  return {
    $$type: "Survey$Data" as const,
    surveysManager: _surveysManager,
    participantsLimit: _participantsLimit,
    rewardAmount: _rewardAmount,
    rewardedUsers: _rewardedUsers,
    creator: _creator,
  };
}

function loadGetterTupleSurvey$Data(source: TupleReader) {
  let _surveysManager = source.readAddress();
  let _participantsLimit = source.readBigNumber();
  let _rewardAmount = source.readBigNumber();
  let _rewardedUsers = source.readBigNumber();
  let _creator = source.readAddressOpt();
  return {
    $$type: "Survey$Data" as const,
    surveysManager: _surveysManager,
    participantsLimit: _participantsLimit,
    rewardAmount: _rewardAmount,
    rewardedUsers: _rewardedUsers,
    creator: _creator,
  };
}

function storeTupleSurvey$Data(source: Survey$Data) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.surveysManager);
  builder.writeNumber(source.participantsLimit);
  builder.writeNumber(source.rewardAmount);
  builder.writeNumber(source.rewardedUsers);
  builder.writeAddress(source.creator);
  return builder.build();
}

function dictValueParserSurvey$Data(): DictionaryValue<Survey$Data> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSurvey$Data(src)).endCell());
    },
    parse: src => {
      return loadSurvey$Data(src.loadRef().beginParse());
    },
  };
}

type SurveysManager_init_args = {
  $$type: "SurveysManager_init_args";
  manager: Address;
};

function initSurveysManager_init_args(src: SurveysManager_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.manager);
  };
}

async function SurveysManager_init(manager: Address) {
  const __code = Cell.fromBase64(
    "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",
  );
  const __system = Cell.fromBase64(
    "te6cckECRwEACsMAAQHAAQIBZgIZAQW3zjADART/APSkE/S88sgLBAIBYgULA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFNs88uCCFQYKAvABkjB/4HAh10nCH5UwINcLH94gghBi9X7zuo5RMNMfAYIQYvV+87ry4IHT//oA1PpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgUQzBsFDEzNIIA5VL4QlJwxwXy9IIAm90FwAAV8vR/4CCCEIXY4zq64wIHCQP+MNMfAYIQhdjjOrry4IH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdT6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIQzBsEzGCAOVS+EJSgMcF8vSBId1TZLzy9AOkUTRwckMwbW1t2zxwgEJwVSBtbW3bPC0tCAACfwGwghC0NdYPuo7M0x8BghC0NdYPuvLggdT6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIEmwSMTKCAOVS+EJSYMcF8vQjAnCDBn9VIG1tbds8f+AwcC0Aysj4QwHMfwHKAFVAUFQg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYSy/8B+gISy//IWCBulTBwAcsBjh4g10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbiyQHMye1UAgEgDBACASANDgIRujA9s82zxsUYFUACEbrW3bPNs8bFGBUPAAIjAgFYERQCAWISEwAQqr7tRNDSAAECEKsU2zzbPGxRFTgCEbY0G2ebZ42KMBUYAertRNDUAfhj0gABjl36QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdP/+gDT/9QB0CDXCwHDAI4f+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiJRy1yFt4jEVFEMwbBXg+CjXCwqDCbry4IkWAU76QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdRZAtEB2zwXAAowcFMAbQAMICBu8tCAAQW2NjAaART/APSkE/S88sgLGwIBYhwxA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFNs88uCCQh0wA+4BkjB/4HAh10nCH5UwINcLH94gghAJufmbuo6aMNMfAYIQCbn5m7ry4IHT//oA1FUgbBPbPH/gIIIQZIZaXLqOtDDTHwGCEGSGWly68uCB1PpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBLbPH/gIB4iJAL2+EFvJBNfA12oJqBTVKhw+CdvECm5kjAn3lMhoAGgKKADggCSKgS+E/L0B6T4Q/goJNs8XHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCI+EIQOEdgJh8ElshVMIIQYvV+81AFyx8Ty/8B+gLMASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFskDSFR/BQRwQTPbPFJEcn9VIG1tbds8iC0tICEAFAAAAABSZWZ1bmQBDvhCAX9t2zwsArz4QlJgxwWRf5b4QlJwxwXi8uah+EP4KCPbPHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCI+EJaJiMBrshVIIIQhdjjOlAEyx9YINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WzAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJcIBAfwQDbW3bPC0D9oIQtDXWD7qOtDDTHwGCELQ11g+68uCB1PpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBLbPH/gIIIQ7gpp0brjAiCCELkPEiG6jicw0x8BghC5DxIhuvLggdP/ATEy+EJSQMcFkX+W+EJSUMcF4vLmoX/gICUoKgK4+EJSYMcFkX+W+EJScMcF4vLmofhD+Cgj2zxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFkmJwCaAtD0BDBtAYFecQGAEPQPb6Hy4IcBgV5xIgKAEPQXyAHI9ADJAcxwAcoAQANZINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WzMkBbshZghC0NdYPUAPLH8wBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyXCAQH8EA21t2zwtA8Yw0x8BghDuCmnRuvLggdP/+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEvhCUmDHBZF/lvhCUnDHBeLy5qGBXnX4J28QI7zy9AFyf1UgbW1t2zyI+EIBf23bPH8tKSwAJgAAAABXaXRoZHJhdyByZWZ1bmQC/oIQ2K8RtrqOJzDTHwGCENivEba68uCB0/8BMTH4QlJAxwWRf5b4QlJQxwXi8uahf+AgghAGpcKguo45MNMfAYIQBqXCoLry4IH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIMTT4QlJQxwXy5qF/4IIQlGqYtrrjAjArLwFO0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/LAE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwtAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AC4AmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAAnAAssj4QwHMfwHKAFVAUFQg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZYINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wy/9Y+gLIWPoCyQHMye1UAgEgMj0CASAzOwIBIDQ5AgFqNTcCFKoU2zxVFNs8bFFCNgA2UhCoI6BSIqhw+CdvECW5kjAj3lmgAaAioCGgAhCqTNs82zxsUUI4AAIiAhW1gRtniqCbZ42KMEI6ACpSEKgioHD4J28QJLmSMCLeoCKgIaACEbhR3bPNs8bFGEI8AAIkAgEgPkYCASA/QQIRt6gbZ5tnjYowQkAAAiECEbZeO2ebZ42KMEJFAdDtRNDUAfhj0gABjlD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0//6ANQB0PoAMBUUQzBsFeD4KNcLCoMJuvLgiUMBRvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0ds8RAAWcIIK+vCAIPhCVTAAAiAAEbgr7tRNDSAAGPaIuw8=",
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initSurveysManager_init_args({ $$type: "SurveysManager_init_args", manager })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const SurveysManager_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack underflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
  1697: { message: `SurveysManager: Sender is not the manager` },
  8669: { message: `Survey: Finished` },
  24181: { message: `SurveysManager: Invalid amount` },
  37418: { message: `SurveysManager: Invalid value` },
  39901: { message: `Survey: Already initialized` },
  58706: { message: `Survey: Manager contract only` },
};

const SurveysManager_types: ABIType[] = [
  {
    name: "StateInit",
    header: null,
    fields: [
      { name: "code", type: { kind: "simple", type: "cell", optional: false } },
      { name: "data", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "Context",
    header: null,
    fields: [
      { name: "bounced", type: { kind: "simple", type: "bool", optional: false } },
      { name: "sender", type: { kind: "simple", type: "address", optional: false } },
      { name: "value", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "raw", type: { kind: "simple", type: "slice", optional: false } },
    ],
  },
  {
    name: "SendParameters",
    header: null,
    fields: [
      { name: "bounce", type: { kind: "simple", type: "bool", optional: false } },
      { name: "to", type: { kind: "simple", type: "address", optional: false } },
      { name: "value", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "mode", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "body", type: { kind: "simple", type: "cell", optional: true } },
      { name: "code", type: { kind: "simple", type: "cell", optional: true } },
      { name: "data", type: { kind: "simple", type: "cell", optional: true } },
    ],
  },
  {
    name: "Deploy",
    header: 2490013878,
    fields: [{ name: "queryId", type: { kind: "simple", type: "uint", optional: false, format: 64 } }],
  },
  {
    name: "DeployOk",
    header: 2952335191,
    fields: [{ name: "queryId", type: { kind: "simple", type: "uint", optional: false, format: 64 } }],
  },
  {
    name: "FactoryDeploy",
    header: 1829761339,
    fields: [
      { name: "queryId", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "cashback", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "ChangeOwner",
    header: 2174598809,
    fields: [
      { name: "queryId", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "newOwner", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "ChangeOwnerOk",
    header: 846932810,
    fields: [
      { name: "queryId", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "newOwner", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "NewSurveyRequest",
    header: 163183003,
    fields: [
      { name: "participantsLimit", type: { kind: "simple", type: "uint", optional: false, format: 256 } },
      { name: "rewardAmount", type: { kind: "simple", type: "uint", optional: false, format: "coins" } },
      { name: "surveyHash", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "FinalizeNewSurveyRequest",
    header: 1660255987,
    fields: [
      { name: "participantsLimit", type: { kind: "simple", type: "uint", optional: false, format: 256 } },
      { name: "rewardAmount", type: { kind: "simple", type: "uint", optional: false, format: "coins" } },
      { name: "surveyHash", type: { kind: "simple", type: "cell", optional: false } },
      { name: "creator", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "UpdateMinStorageRequest",
    header: 3104772641,
    fields: [{ name: "amount", type: { kind: "simple", type: "uint", optional: false, format: 256 } }],
  },
  {
    name: "UpdateMinUserRequest",
    header: 3635351990,
    fields: [{ name: "amount", type: { kind: "simple", type: "uint", optional: false, format: 256 } }],
  },
  {
    name: "NewSurveyResponse",
    header: 564833051,
    fields: [{ name: "seqno", type: { kind: "simple", type: "uint", optional: false, format: 256 } }],
  },
  {
    name: "PayRequest",
    header: 1686526556,
    fields: [
      { name: "surveyHash", type: { kind: "simple", type: "cell", optional: false } },
      { name: "userAddress", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "FinalizePayRequest",
    header: 2245583674,
    fields: [
      { name: "manager", type: { kind: "simple", type: "address", optional: false } },
      { name: "surveyHash", type: { kind: "simple", type: "cell", optional: false } },
      { name: "userAddress", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "WithdrawRequest",
    header: 3023427087,
    fields: [
      { name: "surveyHash", type: { kind: "simple", type: "cell", optional: false } },
      { name: "userAddress", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "ManagerWithdrawRequest",
    header: 3993659857,
    fields: [
      { name: "amount", type: { kind: "simple", type: "uint", optional: false, format: 256 } },
      { name: "userAddress", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "ChangeManagerRequest",
    header: 111526560,
    fields: [{ name: "manager", type: { kind: "simple", type: "address", optional: false } }],
  },
  {
    name: "SurveysManager$Data",
    header: null,
    fields: [
      { name: "owner", type: { kind: "simple", type: "address", optional: false } },
      { name: "manager", type: { kind: "simple", type: "address", optional: false } },
      { name: "surveysAmount", type: { kind: "simple", type: "uint", optional: false, format: 256 } },
      { name: "minTonsForStorage", type: { kind: "simple", type: "uint", optional: false, format: "coins" } },
      { name: "minTonsForUser", type: { kind: "simple", type: "uint", optional: false, format: "coins" } },
    ],
  },
  {
    name: "Survey$Data",
    header: null,
    fields: [
      { name: "surveysManager", type: { kind: "simple", type: "address", optional: false } },
      { name: "participantsLimit", type: { kind: "simple", type: "uint", optional: false, format: 256 } },
      { name: "rewardAmount", type: { kind: "simple", type: "uint", optional: false, format: "coins" } },
      { name: "rewardedUsers", type: { kind: "simple", type: "uint", optional: false, format: 256 } },
      { name: "creator", type: { kind: "simple", type: "address", optional: true } },
    ],
  },
];

const SurveysManager_getters: ABIGetter[] = [
  { name: "surveysAmount", arguments: [], returnType: { kind: "simple", type: "int", optional: false, format: 257 } },
  {
    name: "createFee",
    arguments: [{ name: "participantsLimit", type: { kind: "simple", type: "int", optional: false, format: 257 } }],
    returnType: { kind: "simple", type: "int", optional: false, format: 257 },
  },
  {
    name: "createFullFee",
    arguments: [
      { name: "participantsLimit", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "rewardAmount", type: { kind: "simple", type: "int", optional: false, format: 257 } },
    ],
    returnType: { kind: "simple", type: "int", optional: false, format: 257 },
  },
  {
    name: "minTonsForStorage",
    arguments: [],
    returnType: { kind: "simple", type: "int", optional: false, format: 257 },
  },
  { name: "minTonsForUser", arguments: [], returnType: { kind: "simple", type: "int", optional: false, format: 257 } },
  { name: "owner", arguments: [], returnType: { kind: "simple", type: "address", optional: false } },
];

export const SurveysManager_getterMapping: { [key: string]: string } = {
  surveysAmount: "getSurveysAmount",
  createFee: "getCreateFee",
  createFullFee: "getCreateFullFee",
  minTonsForStorage: "getMinTonsForStorage",
  minTonsForUser: "getMinTonsForUser",
  owner: "getOwner",
};

const SurveysManager_receivers: ABIReceiver[] = [
  { receiver: "internal", message: { kind: "typed", type: "NewSurveyRequest" } },
  { receiver: "internal", message: { kind: "typed", type: "PayRequest" } },
  { receiver: "internal", message: { kind: "typed", type: "WithdrawRequest" } },
  { receiver: "internal", message: { kind: "typed", type: "ManagerWithdrawRequest" } },
  { receiver: "internal", message: { kind: "typed", type: "UpdateMinStorageRequest" } },
  { receiver: "internal", message: { kind: "typed", type: "UpdateMinUserRequest" } },
  { receiver: "internal", message: { kind: "typed", type: "ChangeManagerRequest" } },
  { receiver: "internal", message: { kind: "typed", type: "Deploy" } },
];

export class SurveysManager implements Contract {
  static async init(manager: Address) {
    return await SurveysManager_init(manager);
  }

  static async fromInit(manager: Address) {
    const init = await SurveysManager_init(manager);
    const address = contractAddress(0, init);
    return new SurveysManager(address, init);
  }

  static fromAddress(address: Address) {
    return new SurveysManager(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: SurveysManager_types,
    getters: SurveysManager_getters,
    receivers: SurveysManager_receivers,
    errors: SurveysManager_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message:
      | NewSurveyRequest
      | PayRequest
      | WithdrawRequest
      | ManagerWithdrawRequest
      | UpdateMinStorageRequest
      | UpdateMinUserRequest
      | ChangeManagerRequest
      | Deploy,
  ) {
    let body: Cell | null = null;
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "NewSurveyRequest"
    ) {
      body = beginCell().store(storeNewSurveyRequest(message)).endCell();
    }
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "PayRequest") {
      body = beginCell().store(storePayRequest(message)).endCell();
    }
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "WithdrawRequest") {
      body = beginCell().store(storeWithdrawRequest(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "ManagerWithdrawRequest"
    ) {
      body = beginCell().store(storeManagerWithdrawRequest(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "UpdateMinStorageRequest"
    ) {
      body = beginCell().store(storeUpdateMinStorageRequest(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "UpdateMinUserRequest"
    ) {
      body = beginCell().store(storeUpdateMinUserRequest(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "ChangeManagerRequest"
    ) {
      body = beginCell().store(storeChangeManagerRequest(message)).endCell();
    }
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "Deploy") {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getSurveysAmount(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("surveysAmount", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getCreateFee(provider: ContractProvider, participantsLimit: bigint) {
    let builder = new TupleBuilder();
    builder.writeNumber(participantsLimit);
    let source = (await provider.get("createFee", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getCreateFullFee(provider: ContractProvider, participantsLimit: bigint, rewardAmount: bigint) {
    let builder = new TupleBuilder();
    builder.writeNumber(participantsLimit);
    builder.writeNumber(rewardAmount);
    let source = (await provider.get("createFullFee", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getMinTonsForStorage(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("minTonsForStorage", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getMinTonsForUser(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("minTonsForUser", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getOwner(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("owner", builder.build())).stack;
    let result = source.readAddress();
    return result;
  }
}
