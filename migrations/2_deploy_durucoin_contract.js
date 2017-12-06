const DuruCoin = artifacts.require("./DuruCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(DuruCoin);
};
