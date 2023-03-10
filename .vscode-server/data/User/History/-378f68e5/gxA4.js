require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
module.exports = {
  defaultNetwork:"hardhat",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      account: [],
    },
      },
  solidity: "0.8.17",
};
