pragma solidity ^0.5.0;

import "./ERC20Token.sol";

contract Exchange  {
   // create a function called calculatePriceInWei

    struct Order{
        uint amountOfTokens;
        uint8 transactionType; // 0 buy --- 1 sell
        address tokenOwner;
    }

    struct OrderBook{
        uint currentMarketPrice;
        uint timestamp;

        mapping(uint => Order) orders;
        uint order_key;
    }

    struct Token {
        address tokenContract;
        string symbolName;

        mapping(uint => OrderBook) buyBook;
        uint currentBuyPrice;
        uint previousBuyPrice;

        mapping(uint => OrderBook) sellBook;
        uint currentSellPrice;
        uint previousSellPrice;

    }

    mapping(uint => Token)token;
    uint8 tokenIndex = 0;


    mapping(string => address) public tokenSymbolToAddress;

    constructor()payable public{}
        // Management events
    event TokenAddedToSystem(uint _symbolIndex, string _tokenSymbol, uint _timestamp);

    // Deposit/Withdrawal events
    event DepositForTokenReceived(address indexed _from, uint indexed _symbolIndex, uint _amount, uint _timestamp);
    event WithdrawalToken(address indexed _to, uint indexed _symbolIndex, uint _amount, uint _timestamp);

       // Trading/Order Events
    event BuyOrderCreated(uint indexed _symbolIndex, address indexed _who, uint _amountTokens, uint _priceInWei, uint _orderKey);
    event SellOrderCreated(uint indexed _symbolIndex, address indexed _who, uint _amountTokens, uint _priceInWei, uint _orderKey);


    // Token Management
    function addToken(string memory symbolName, address erc20TokenAddress) public returns(bool){
        if(!hasToken(symbolName)){
            tokenIndex++;
            tokenSymbolToAddress[symbolName] = erc20TokenAddress;
            return true;
        }else{
            return false;
        }

    }

    function updateTokenSupply(string memory symbolName, uint _amountOfTokens) public{
        hasToken(symbolName);
        address forToken = tokenSymbolToAddress[symbolName];
        ERC20Token newToken = ERC20Token(forToken);
        newToken.addTotalSupply(forToken, _amountOfTokens);
        emit TokenAddedToSystem(tokenIndex, symbolName, now);
    }

    function hasToken(string memory symbolName) public view returns(bool){
     return tokenSymbolToAddress[symbolName] != address(0);

    }

}