pragma solidity ^0.5.0;

interface ERC20Interface {
    function transfer(address to, uint tokens)  external returns(bool success);
    function transferFrom(address from, address tokenOwner, uint value)  external returns(bool success);
    function balanceOf(address tokenOwner)  external view returns(uint balance);
    function approve(address spender, uint tokens)  external returns(bool success);
    function allowance(address tokenHolder, address spender)  external view returns(uint);
    function totalSupply() external view returns(uint);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}
