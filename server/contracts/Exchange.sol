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

    // mapping(address => ERC20Token)tokenAddress;
    mapping(string => address)tokenSymbolToAddress;

        // Management events
    event TokenAddedToSystem(uint _symbolIndex, string _token, uint _timestamp);

    // Deposit/Withdrawal events
    event DepositForTokenReceived(address indexed _from, uint indexed _symbolIndex, uint _amount, uint _timestamp);
    event WithdrawalToken(address indexed _to, uint indexed _symbolIndex, uint _amount, uint _timestamp);

       // Trading/Order Events
    event BuyOrderCreated(uint indexed _symbolIndex, address indexed _who, uint _amountTokens, uint _priceInWei, uint _orderKey);
    event SellOrderCreated(uint indexed _symbolIndex, address indexed _who, uint _amountTokens, uint _priceInWei, uint _orderKey);


    // Token Management
    function addToken(string memory symbolName, address erc20TokenAddress) public{
        require(!hasToken(symbolName), "token is already created");
        tokenSymbolToAddress[symbolName] = erc20TokenAddress;

    }

    function hasToken(string memory symbolName) public view returns(bool){
     tokenSymbolToAddress[symbolName] != address(0);
    }

    function buyToken(string memory symbolName, uint priceInWei, uint amount) public{
        // calculate priceInWei in this function keep amount
        currentToken = tokenSymbolToAddress[symbolName];

        // check make sure token is there
        // call oracle to confirm price
        // calcucate priceInWei
        // call approve && tranferFrom for both Zap and AssetToken
        // update tokenSymbolToAddress of TokenSymbol
        // update user average mapping.
        // call buyOrderCreated
    }

    function sellToken(string memory symbolName,  uint amount) public{
        // calculate priceInWei in this function keep amount
        currentToken = tokenSymbolToAddress[symbolName];
        // check make sure user has tokens to sell
        // call oracle to confirm price
        // calcucate priceInWei
        // call approve && tranferFrom for both Zap and AssetToken
        // calculate difference using priceHistory
        // Access mainBondingCurver(withdrawal function)
        // Update user address
        // update tokenSymbolToAddress of TokenSymbol
        // update user average mapping.
    }
}