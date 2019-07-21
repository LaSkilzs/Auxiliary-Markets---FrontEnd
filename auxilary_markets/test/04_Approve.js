const Token = artifacts.require("./ERC20Token.sol");

contract("ERC20Token", accounts => {
  let tokenInstance;
  it("approves acounts", () => {
    return Token.deployed()
      .then(instance => {
        tokenInstance = instance;
        return tokenInstance.approve.call(accounts[1], 100);
      })
      .then(success => {
        assert.equal(success, true, "it should return true");
        return tokenInstance.approve(accounts[1], 100);
      })
      .then(receipt => {
        assert.equal(receipt.logs.length, 1, "triggers one event");
        assert.equal(receipt.logs[0].event, "Approval", "triggers one event");
        assert.equal(
          receipt.logs[0].args.tokenOwner,
          accounts[0],
          "logs the account the tokens came from"
        );
        assert.equal(
          receipt.logs[0].args.spender,
          accounts[1],
          "logs the account the tokens went to"
        );
        assert.equal(
          receipt.logs[0].args.tokens.toNumber(),
          100,
          "logs the transfer amount"
        );
        return tokenInstance.allowance.call(accounts[0], accounts[1]);
      })
      .then(allowance => {
        assert.equal(allowance.toNumber(), 100, "allowance for the transfer");
      });
  });
});
