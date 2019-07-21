const Token = artifacts.require("ERC20Token");

contract("ERC20Token", function(accounts) {
  let tokenInstance;

  it("sets inital contract to correct values", () => {
    return Token.deployed()
      .then(data => {
        tokenInstance = data;
        return tokenInstance.name();
      })
      .then(name => {
        assert.equal(name, "Tokens", "has the correct name");
        return tokenInstance.symbol();
      })
      .then(symbol => {
        assert.equal(symbol, "TOK", "has correct symbol");
      });
  });

  it("sets inital total supply on deployment", () => {
    return Token.deployed().then(data => {
      tokenInstance = data;
      return tokenInstance
        .totalSupply()
        .then(supply => {
          assert.equal(
            supply.toNumber(),
            1000000,
            "sets total supply too 1000000"
          );
          return tokenInstance.balances(accounts[0]);
        })
        .then(function(adminBalance) {
          assert.equal(
            adminBalance.toNumber(),
            1000000,
            "it sets inital account to admin and all token supply"
          );
        });
    });
  });
});
