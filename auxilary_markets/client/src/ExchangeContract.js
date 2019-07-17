import web3 from "./web3";
const deployedAddress = "0x2A5AA488732cb63e87674EeB931425D711C93a42";

const deployedAbi = [
  {
    inputs: [],
    payable: true,
    stateMutability: "payable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_symbolIndex",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_tokenSymbol",
        type: "string"
      },
      {
        indexed: false,
        name: "_timestamp",
        type: "uint256"
      }
    ],
    name: "TokenAddedToSystem",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        name: "_symbolIndex",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_amount",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_timestamp",
        type: "uint256"
      }
    ],
    name: "DepositForTokenReceived",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_to",
        type: "address"
      },
      {
        indexed: true,
        name: "_symbolIndex",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_amount",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_timestamp",
        type: "uint256"
      }
    ],
    name: "WithdrawalToken",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_symbolIndex",
        type: "uint256"
      },
      {
        indexed: true,
        name: "_who",
        type: "address"
      },
      {
        indexed: false,
        name: "_amountTokens",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_priceInWei",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_orderKey",
        type: "uint256"
      }
    ],
    name: "BuyOrderCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_symbolIndex",
        type: "uint256"
      },
      {
        indexed: true,
        name: "_who",
        type: "address"
      },
      {
        indexed: false,
        name: "_amountTokens",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_priceInWei",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_orderKey",
        type: "uint256"
      }
    ],
    name: "SellOrderCreated",
    type: "event"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_symbolName",
        type: "string"
      },
      {
        name: "erc20TokenAddress",
        type: "address"
      }
    ],
    name: "addToken",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "symbolName",
        type: "string"
      },
      {
        name: "_amountOfTokens",
        type: "uint256"
      }
    ],
    name: "updateTokenSupply",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "symbolName",
        type: "string"
      },
      {
        name: "_amountOfTokens",
        type: "uint256"
      }
    ],
    name: "hasToken",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "symbolName",
        type: "string"
      }
    ],
    name: "hasToken",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

export default new web3.eth.Contract(deployedAddress, deployedAbi);
