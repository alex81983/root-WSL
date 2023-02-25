require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.RINKEBY_RPC_URL

module.exports = {
  defaultNetwork:"hardhat",
  networks: {
    goerli: {},
  
  },
  solidity: "0.8.17",
};
