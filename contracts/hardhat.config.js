require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");


Goerli_Private_key = "bc4f3d33b152f763143e8cadb233f7a3b4dc66a25fedfa8a9269da0c9f56ed69"
Goerli_Alchemy_Url = "https://eth-goerli.g.alchemy.com/v2/H56uoJhC7IqjtizCUgxsn4I_TmSI7m1o"
ETHERSCAN_API_KEY = "7B7D9JUQT8I2V79PDE844A7P7ZGPFXX8Z9"


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: Goerli_Alchemy_Url,
      accounts: [Goerli_Private_key]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  }
};
