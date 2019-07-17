pragma solidity ^0.5.0;

import "./ERC20Interface.sol";

contract ERC20Token is ERC20Interface {
   string public name;
    string public symbol;
    uint8 public decimals = 10;
    uint256 _totalSupply;

    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) public allowed;

    constructor(string memory _name, string memory _symbol)  public {
        name = _name;
        symbol = _symbol;
    }

    function addTotalSupply(address tokenContract, uint amountOfTokens) external  {
        require(tokenContract != address(0), "Not valid addrress");
        _totalSupply += amountOfTokens;
    }

    function totalSupply() external view returns(uint) {
        return _totalSupply;
    }

    function balanceOf(address owner) external view returns(uint){
        return balances[owner];
    }

    function transfer(address to, uint value) external returns(bool success){
        require(balances[msg.sender] >= value, "not Enough to make transfer");
        balances[msg.sender] -= value;
        balances[to] += value;
        emit Transfer(msg.sender, to, value);
        return true;
    }

    function transferFrom(address from, address to, uint tokens) external  returns(bool success){
        uint allowance = allowed[from][msg.sender];
        require(balances[msg.sender] >= tokens && allowance >= tokens,"not Enough to make transfer");
        allowed[from][msg.sender] -= tokens;
        balances[msg.sender] -= tokens;
        balances[to] += tokens;
        emit Transfer(msg.sender, to, tokens);
        return true;
    }

    function approve(address spender, uint value) external returns(bool success){
        require(spender != msg.sender, "not Enough to make transfer");
        allowed[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }

    function allowance(address owner, address spender) external view returns(uint) {
        return allowed[owner][spender];
    }

}