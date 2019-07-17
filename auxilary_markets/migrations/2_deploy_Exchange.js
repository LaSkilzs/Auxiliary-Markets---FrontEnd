const ERC20Token = artifacts.require("./ERC20Token.sol");
const Exchange = artifacts.require("./Exchange.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC20Token, "Tokens", "TOK");
  deployer.deploy(Exchange);
};
