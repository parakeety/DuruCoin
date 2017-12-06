const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = process.env.ROPSTEN_MNEMONIC;
const accessToken = process.env.INFURA_ACCESS_TOKEN;

// module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  // ganache
  // networks: {
  //   development: {
  //     host: 'localhost',
  //     port: 7545,
  //     network_id: 5777
  //   }
  // }
// };

module.exports = {
  networks: {
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          "https://ropsten.infura.io/" + accessToken
        );
      },
      network_id: 3,
      gas: 4000000
    }
  }
};
