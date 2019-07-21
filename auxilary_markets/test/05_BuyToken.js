const TokenSale = artifacts.require("./TokenSale.sol");
const Token = artifacts.require("./ERC20Token.sol");

contract("TokenSale", accounts => {
  let tokenInstance;
  let tokenSaleInstance;
  let tokenPrice = 1000000000000000; // in wei
  let buyer = accounts[1];
  let admin = accounts[0];
  let numberOfTokens = 10;
  let tokensAvailable = 750000;

  it("facilitates buying a token", () => {
    return Token.deployed()
      .then(instance => {
        // Grab token instance first;
        tokenInstance = instance;
        return TokenSale.deployed()
          .then(instance => {
            // then grab tokensale instance
            tokenSaleInstance = instance;
            return tokenInstance.transfer(
              tokenInstance.address,
              tokensAvailable,
              { from: admin }
            );
          })
          .then(receipt => {
            numberOfTokens = 10;
            return tokenSaleInstance.buyTokens(numberOfTokens, {
              from: buyer,
              value: numberOfTokens * tokenPrice
            });
          })
          .then(receipt => {
            assert.equal(receipt.logs.length, 1, "triggers one event");
            assert.equal(receipt.logs[0].event, "Sell", "triggers one event");
            assert.equal(
              receipt.logs[0].args._buyer,
              accounts[1],
              "logs the account the tokens came from"
            );
            assert.equal(
              receipt.logs[0].args._amount,
              numberOfTokens,
              "logs the amount of tokens bought"
            );

            return tokenSaleInstance.tokensSold();
          });
      })
      .then(amount => {
        assert.equal(
          amount.toNumber(),
          numberOfTokens,
          "increments number of tokens sold"
        );
        return tokenInstance.balanceOf(buyer);
      })
      .then(balance => {
        assert.equal(balance.toNumber(), numberOfTokens);
        return tokenInstance.balanceOf(tokenSaleInstance.address);
      })
      .then(balance => {
        assert.equal(balance.toNumber(), tokensAvailable - numberOfTokens);
        // try to buy tokens different from ether amount
        return tokenSaleInstance.buyTokens(numberOfTokens, {
          from: buyer,
          value: 1
        });
      })
      .then(assert.fail)
      .catch(error => {
        assert(
          error.message.indexOf("revert") >= 0,
          "msg.value must equal the number of tokens in wei"
        );
        return tokenSaleInstance.buyTokens(800000, {
          from: buyer,
          value: numberOfTokens * tokenPrice
        });
      })
      .then(assert.fail)
      .catch(error => {
        assert(
          error.message.indexOf("revert") >= 0,
          "can not purchase more tokens than you have"
        );
      });
  });
});
