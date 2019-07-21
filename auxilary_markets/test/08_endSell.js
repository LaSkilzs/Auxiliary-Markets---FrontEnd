const TokenSale = artifacts.require("./TokenSale.sol");
const Token = artifacts.require("./ERC20Token.sol");
contract("TokenSale", accounts => {
  let tokenSaleInstance;
  let tokenInstance;
  let buyer = accounts[1];
  let admin = accounts[0];

  it("ends token sale", () => {
    return Token.deployed().then(instance => {
      // Grab token instance first;
      tokenInstance = instance;
      return TokenSale.deployed()
        .then(instance => {
          tokenSaleInstance = instance;
          // try to end sale from account other than admin
          return tokenSaleInstance.endSell({ from: buyer });
        })
        .then(assert.fail)
        .catch(error => {
          assert(
            error.message.indexOf("revert") >= 0,
            "must be admin to end the sale"
          );
          // try to end sale from admin
          return tokenSaleInstance.endSell({ from: admin });
        })
        .then(receipt => {
          return tokenInstance.balanceOf(admin);
        })
        .then(balance => {
          assert.equal(
            balance.toNumber(),
            1000000,
            "returns all unsold tokens"
          );
          // check that tokenPrice was reset when calling self destruct;
          return tokenSaleInstance.tokenPrice();
        })
        .then(price => {
          console.log(price);
          //       assert.equal(price, 0, "token price was reset");
        });
    });
  });
});
