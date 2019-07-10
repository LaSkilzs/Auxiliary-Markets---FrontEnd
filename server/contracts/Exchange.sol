pragma solidity ^0.5.0;

import "./ERC20Token.sol";

contract Exchange  {
    // create a function calleed calculatePriceInWei

    address currentToken;

    struct Order{
        uint amount;
        uint8 transactionType; // 0 buy --- 1 sell
        address who;
    }

    mapping(uint => Order)orders;
    uint orderIndex = 0;

    // mapping(address => ERC20Token)tokenAddress;
    mapping(string => address)tokenSymbolToAddress;

    // Management events
    event TokenAddedToSystem(uint _symbol, string _token, uint _timestamp);

    // Deposit/Withdrawal events
    /*
    event DepositForTokenReceived(address indexed _from, uint indexed _symbol, uint _amount, uint _timestamp);
    event WithdrawalToken(address indexed _to, uint indexed _symbol, uint _amount, uint _timestamp);
    */

    // Trading/Order Events
    event BuyOrderCreated(uint indexed _symbol, address indexed _who, uint _amountTokens, uint _orderKey);
    event SellOrderCreated(uint indexed _symbol, address indexed _who, uint _amountTokens, uint _orderKey);


    // Token Management
    function addToken(string memory _symbol, address erc20TokenAddress) public /*ownerOnly*/ {
        require(!hasToken(_symbol), "token has already been added");
        tokenSymbolToAddress[_symbol] = erc20TokenAddress;
    }

    function hasToken(string memory _symbol) public view returns(bool){
        return (tokenSymbolToAddress[_symbol] != address(0));
    }

    function getTokenPriceInWei(string memory _symbol, uint amount) public returns(uint) {
        // call oracle to confirm price
            // priceOfWeiZap = queryProvider(...);
            // priceOfCurrentToken = queryProvider(...);
        
        // calcucate priceInWei
            // priceInWei = priceOfCurrentToken / priceOfWeiZap;
    }

    function updateUserAveragePrice(address user, string memory _symbol, uint amount, uint priceInWei) /*ownerOnly*/ {
         // update user average mapping
         address currentToken = tokenSymbolToAddress[_symbol];
            // currentToken.userAveragePrice[user].numTokensBought += amount;
            // currentToken.userAveragePrice[user].numTokensBought += priceInWei;
    }

    function buyToken(string memory _symbol, uint priceInWei, uint amount) public{
        // calculate priceInWei in this function keep amount
        address currentToken = tokenSymbolToAddress[_symbol];

        // check make sure token is there
        require(currentToken != address(0), "Token not recognized");

        getTokenPriceInWei(_symbol, amount);
        
        // call approve && tranferFrom for both Zap and AssetToken
            // zapToken.approve(this, priceInWei);
            // require(zapToeken.transferFrom(msg.sender, this, priceInWei));

            // currentToken.approve(this, amount);
            // require(currentToken.transferFrom(msg.sender, this, amount));
        
        // update tokenSymbolToAddress of TokenSymbol

        updateUserAveragePrice(msg.sender, _symbol, amount);

        orders[orderIndex] = order(amount, 0, msg.sender);
        oderIndex++;
        emit BuyOrderCreated(_symbol, msg.sender, amount, orderIndex - 1);
    }

    function sellToken(string memory _symbol,  uint amount) public{
        // calculate priceInWei in this function keep amount
        currentToken = tokenSymbolToAddress[_symbol];
        
        // check make sure user has tokens to sell
        
        uint priceInWei = getTokenPriceInWei(_symbol, amount);
        
        // call approve && tranferFrom for both Zap and AssetToken
        
        // calculate difference using priceHistory
            // int priceDifference = priceInWei - currentToken.userAveragePrice[msg.sender]
        
        // Access mainBondingCurver(withdrawal function)
        
        // Update user address
        
        // update tokenSymbolToAddress of TokenSymbol
        
        updateUserAveragePrice(msg.sender, _symbol, amount, priceInWei);

        orders[orderIndex] = order(amount, 1, msg.sender);
        oderIndex++;
        emit BuyOrderCreated(_symbol, msg.sender, amount, orderIndex - 1);
        
        emit SellOrderCreated(_symbol, msg.sender, amount, now);
    }
}