pragma solidity ^0.5.0;

import "./ERC20Token.sol";

contract Exchange  {
  struct Order{
    uint amountOfTokens;
    uint8 transactionType; // 0 buy --- 1 sell
    address tokenOwner;
    }

  struct OrderBook{
    uint currentPrice;
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

    mapping(string => address)tokenSymbolToAddress;


        // Management events
    event TokenAddedToSystem(uint _symbolIndex, string _tokenSymbol, uint _timestamp);

    // Deposit/Withdrawal events
    event DepositForTokenReceived(address indexed _from, uint indexed _symbolIndex, uint _amount, uint _timestamp);
    event WithdrawalToken(address indexed _to, uint indexed _symbolIndex, uint _amount, uint _timestamp);

       // Trading/Order Events
    event BuyOrderCreated(uint indexed _symbolIndex, address indexed _who, uint _amountTokens, uint _priceInWei, uint _orderKey);
    event SellOrderCreated(uint indexed _symbolIndex, address indexed _who, uint _amountTokens, uint _priceInWei, uint _orderKey);


    // Token Management
    function hasToken(string memory symbolName) public view returns(bool){
     tokenSymbolToAddress[symbolName] != address(0);
    }
    function addToken(string memory symbolName, address erc20TokenAddress) public{
        hasToken(symbolName);
        tokenIndex++;
        tokenSymbolToAddress[symbolName] = erc20TokenAddress;
    }
    function updateTokenSupply(string memory symbolName, uint _amountOfTokens) public{
        hasToken(symbolName);
        address forToken = tokenSymbolToAddress[symbolName];
        ERC20Token newToken = ERC20Token(forToken);
        newToken.addTotalSupply(forToken, _amountOfTokens);
        emit TokenAddedToSystem(tokenIndex, symbolName, now);
    }

    // MoneyManagement

    function getPriceToZap(string memory _symbol, uint amount) public returns(uint){}
    function getZapPriceInWei(string memory _symbol, uint amount) public returns(uint){}
    function getZapToPrice(string memory _symbol, uint amount) public returns(uint){}
    function getWeiPriceInZap(string memory _symbol, uint amount) public returns(uint){}

    // Trade Management

    // function getAssetPrice(string memory symbolName) public returns(uint){}

    // function purchaseToken(string memory symbolName, uint amount) public{
          // check approval for exchange to purchase tokens
          // check allowance to ensure account has enough tokens
          // convert currency
          // Order  --- purchase tokens
          // add token --- orderbook
          // update token --- orderbook
    // }

    // function cashOutToken(string memory symbolName,  uint amount) public{
    //     // calculate priceInWei in this function keep amount
    //     address currentToken = tokenSymbolToAddress[symbolName];

    //     // check make sure user has tokens to sell
    //     // call oracle to confirm price
    //     // calculate priceInWei
    //     // call approve && tranferFrom for both Zap and AssetToken
    //     // calculate difference using priceHistory
    //     // Access mainBondingCurver(withdrawal function)
    //     // Update user address
    //     // update OrderBook
    //     // update tokenSymbolToAddress of TokenSymbol
    //     // update user average mapping.
    // }

    // function getTokenPriceInWei(string memory _symbol, uint amount) public returns(uint) {
    //     // call oracle to confirm price
            // priceOfWeiZap = queryProvider(...);
            // priceOfCurrentToken = queryProvider(...);

        // calcucate priceInWei
            // priceInWei = priceOfCurrentToken / priceOfWeiZap;
    // }

    // function updateUserAveragePrice(address user, string memory _symbol, uint amount, uint priceInWei) /*ownerOnly*/ public {
    //      // update user average mapping
    //      address currentToken = tokenSymbolToAddress[_symbol];
    //         // currentToken.userAveragePrice[user].numTokensBought += amount;
    //         // currentToken.userAveragePrice[user].numTokensBought += priceInWei;
    // }

}