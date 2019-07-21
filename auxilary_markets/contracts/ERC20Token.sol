pragma solidity ^0.5.0;

contract ERC20Token  {
    string public name;
    string public symbol;
    uint256 public totalSupply;
    address admin;

    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint)) public allowed;

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);

    constructor(string memory _name, string memory _symbol, uint256 initialSupply)  public {
        name = _name;
        symbol = _symbol;
        totalSupply = initialSupply;
        admin = msg.sender;
        balances[msg.sender] += totalSupply;
    }

    function addTotalSupply(address tokenContract, uint amountOfTokens) external  {
        require(tokenContract != address(0), "Not valid addrress");
        totalSupply += amountOfTokens;
    }

    function balanceOf(address owner) public view returns(uint){
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
       require(tokens <= balances[from], 'transfer can not be greater than balance');
       require(tokens <= allowed[from][msg.sender], 'transfer can not be greater than amount');
        balances[from] -= tokens;
        balances[to] += tokens;
        allowed[from][msg.sender] -= tokens;
        emit Transfer(from, to, tokens);
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