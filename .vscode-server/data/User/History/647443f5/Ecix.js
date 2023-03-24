// import 
// main function
// calling of main function

// async function deployFunc() {
//        console.log("Hi!")
// }
// module.exports.default = deployFunc

// module.exports = async(hre) => {
//    const { getNamedAccounts, deployments }= hre
// }

const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { network } = require("hardhat")
const { verify } = require("../utils/verify")
require("dotenv").config()


module.exports = async function({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId

   let ethUsdPriceFeedAddress
   if(developmentChains.includes(network.name)){
      const mockV3Aggregator = await deployments.get("MockV3Aggregator")
      ethUsdPriceFeedAddress =mockV3Aggregator.address
    } else {
      ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeedAddress"]
    }
    
    log("Deploying fundMe");
  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [ethUsdPriceFeedAddress],
    log: true,
  });
  log(`FundMe contract address: ${fundMe.address}`);
};

module.exports.tags = ["all", "fundMe"];
