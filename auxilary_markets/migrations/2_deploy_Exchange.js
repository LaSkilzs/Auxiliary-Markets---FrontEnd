const ERC20Token = artifacts.require("./ERC20Token.sol");
const TokenSale = artifacts.require("./TokenSale.sol");
const Exchange = artifacts.require("./Exchange.sol");

module.exports = function(deployer) {
  deployer
    .deploy(ERC20Token, "Tokens", "TOK", 1000000)
    .then(() => {
      // price of 3000000000000000 wei in ether # 0.003
      return deployer.deploy(TokenSale, ERC20Token.address, 3000000000000000);
    })
    .then(() => {
      deployer.deploy(Exchange);
    });
};
