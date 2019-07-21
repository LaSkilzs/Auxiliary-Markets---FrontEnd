pragma solidity ^0.5.0;
import "./TokenSale.sol";

contract Exchange {

  address payable manager;
  TokenSale public tokenSaleContract;

  mapping(address => TokenSale) public exchangeTokenContracts;
  uint exContractKey;


  constructor() public {
    manager = msg.sender;
  }

  function addTokenSaleToExchange(address _tokenSaleContract) public returns(bool success){
    exchangeTokenContracts[_tokenSaleContract];
    exContractKey++;
    return true;
  }

}


