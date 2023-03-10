require("hardhat-gas-reporter")
require("./tasks/block-number")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const GOERLI_RPC_URL =process.env.GOERLI_RPC_URL 
const PRIVATE_KEY =process.env.PRIVATE_KEY 
const ETHERSCAN_API_KEY =process.env.ETHERSCAN_API_KEY


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
     goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    localhost: {
      url:"http://127.0.0.1:8545/",
      // accounts: Thanks hardhat!
      chainId: 31337,
    },
  }, 
 solidity: "0.8.17",
   etherscan: {
    apiKey: ETHERSCAN_API_KEY,
   },
   gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY

   },
  }

  