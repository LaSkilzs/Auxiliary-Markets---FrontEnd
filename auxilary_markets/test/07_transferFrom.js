const Token = artifacts.require("./ERC20Token.sol");

contract("Token", accounts => {
  let tokenInstance;
  it("should allow another account to transfer on its behalf", () => {
    return Token.deployed()
      .then(instance => {
        tokenInstance = instance;
        spendingAccount = accounts[2];
        fromAccount = accounts[3];
        toAccount = accounts[4];

        //Transfer some tokens
        return tokenInstance.transfer(fromAccount, 100, { from: accounts[0] });
      })
      .then(receipt => {
        // Approve spendingAccount to spend 10 tokens from fromAccount
        return tokenInstance.approve(spendingAccount, 10, {
          from: fromAccount
        });
      })
      .then(receipt => {
        // Try transferring something larger than spenders balance
        return tokenInstance.transferFrom(fromAccount, toAccount, 99999, {
          from: spendingAccount
        });
      })
      .then(assert.fail)
      .catch(error => {
        assert(
          error.message.indexOf("revert") >= 0,
          "transfer cannot be larger than balance"
        );
        // Try transferring something larger than the approved amount
        return tokenInstance.transferFrom(fromAccount, toAccount, 60, {
          from: spendingAccount
        });
      })
      .then(assert.fail)
      .catch(error => {
        assert(
          error.message.indexOf("revert") >= 0,
          "cannot transfer value larger than approved amount"
        );
        return tokenInstance.transferFrom.call(fromAccount, toAccount, 10, {
          from: spendingAccount
        });
      })
      .then(success => {
        assert.equal(success, true, "it returns true");
        return tokenInstance.transferFrom(fromAccount, toAccount, 10, {
          from: spendingAccount
        });
      })
      .then(receipt => {
        assert.equal(receipt.logs.length, 1, "triggers one event");
        assert.equal(receipt.logs[0].event, "Transfer", "triggers one event");
        assert.equal(
          receipt.logs[0].args.from,
          accounts[3],
          "logs the account the tokens came from"
        );
        assert.equal(
          receipt.logs[0].args.to,
          accounts[4],
          "logs the account the tokens went to"
        );
        assert.equal(
          receipt.logs[0].args.tokens.toNumber(),
          10,
          "logs the transfer amount"
        );
        return tokenInstance.balances(fromAccount);
      })
      .then(balance => {
        assert.equal(
          balance.toNumber(),
          90,
          "deducts the amount from the sending account"
        );
        return tokenInstance.balances(toAccount);
      })
      .then(balance => {
        assert.equal(balance.toNumber(), 10, "adds the amount to the account");
        return tokenInstance.allowance(fromAccount, spendingAccount);
      })
      .then(allowance => {
        assert.equal(
          allowance.toNumber(),
          0,
          "deducts the amount from allowance"
        );
      });
  });
});
