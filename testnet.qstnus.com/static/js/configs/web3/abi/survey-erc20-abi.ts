export const SURVEY_ERC20_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "participant",
        type: "address",
      },
      {
        indexed: true,
        internalType: "string",
        name: "surveyId",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "participant",
        type: "address",
      },
      {
        indexed: true,
        internalType: "string",
        name: "surveyId",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "surveyId",
        type: "string",
      },
    ],
    name: "SurveyCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "surveyId",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "participantsLimit",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "surveyHash",
        type: "bytes32",
      },
    ],
    name: "SurveyCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "surveyId",
        type: "string",
      },
    ],
    name: "SurveyFinished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "surveyId",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fundingAmount",
        type: "uint256",
      },
    ],
    name: "SurveyFunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "manager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "UpdateManager",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_token",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timeToExpire",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "_surveyIds",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "_participantsEncoded",
        type: "address[]",
      },
    ],
    name: "acceptRewardProof",
    outputs: [
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_token",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timeToExpire",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "_surveyIds",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "_participantsEncoded",
        type: "address[]",
      },
    ],
    name: "acceptRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_token",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timeToExpire",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_surveyId",
        type: "string",
      },
    ],
    name: "cancelProof",
    outputs: [
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_token",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timeToExpire",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_surveyId",
        type: "string",
      },
    ],
    name: "cancelSurvey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_token",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timeToExpire",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_surveyId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_participantsLimit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_surveyHash",
        type: "bytes32",
      },
    ],
    name: "createProof",
    outputs: [
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_token",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timeToExpire",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_surveyId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_participantsLimit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_surveyHash",
        type: "bytes32",
      },
    ],
    name: "createSurvey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "getSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_surveyId",
        type: "string",
      },
    ],
    name: "getSurvey",
    outputs: [
      {
        internalType: "address",
        name: "surveyCreator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "participantsLimit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "participantsRewarded",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountToFund",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "surveyHash",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "isCanceled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_surveyId",
        type: "string",
      },
    ],
    name: "getSurveyAmountToFund",
    outputs: [
      {
        internalType: "uint256",
        name: "amountToFund",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_surveyId",
        type: "string",
      },
    ],
    name: "getSurveysRewardsAmountPayded",
    outputs: [
      {
        internalType: "uint256",
        name: "amountPayded",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "managers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_message",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_token",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timeToExpire",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "preAuthValidations",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "proofTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "surveys",
    outputs: [
      {
        internalType: "address",
        name: "surveyCreator",
        type: "address",
      },
      {
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "participantsLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "participantsRewarded",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "surveyHash",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "isCanceled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "surveysUsersRewardAccepted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "surveysUsersRewarded",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_surveyId",
        type: "string",
      },
    ],
    name: "withdrawReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;
