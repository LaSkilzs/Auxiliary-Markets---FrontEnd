pragma solidity ^ 0.5.0;
import "./ERC20Token.sol";

contract TokenSale {

  address payable admin;
  ERC20Token public tokenContract;
  uint256 public tokenPrice;
  uint256 public tokensSold;

  event Sell(address _buyer, uint256 _amount);

  constructor(ERC20Token _tokenContract, uint256 _tokenPrice) public {
    admin = msg.sender;
    tokenContract = _tokenContract;
    tokenPrice = _tokenPrice;
  }
  function multiply(uint256 x, uint256 y)internal pure returns(uint256 z){
    require(y == 0 || (z = x * y) / y == x, 'math went wrong');
  }
  // Buy tokens
  function buyTokens(uint256 _numberOfTokens) public payable {
    require(msg.value == multiply(_numberOfTokens, tokenPrice), 'invalid payment amount, not enough');
    require(tokenContract.balanceOf(address(this)) >= _numberOfTokens, 'check that contract owns enough tokens');
    require(tokenContract.transfer(msg.sender, _numberOfTokens), 'require sender has necessary amount of tokens');
    emit Sell(msg.sender, _numberOfTokens);
    tokensSold += _numberOfTokens;
  }
  // End Sell
  function endSell() public {
    require(msg.sender == admin, 'must be admin');
    require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this))), 'must transfer balance to admin');
    selfdestruct(msg.sender);
  }
}


