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


module.exports = async({ getNamedAccounts, deployments }) =>{
    const { deploy, log } = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId

   let ethUsdPriceFeedAddress
   if(developmentChains.includes(network.name)){
      const ethUsdAggregator = await deployments.get("MockV3Aggregator")
      ethUsdPriceFeedAddress =ethUsdAggregator
    } else {
      ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    }
    
    const arg = [ethUsdPriceFeedAddress]
    const fundMe = await deploy("FundMe", {
          from: deployer,
          args: args, // price feed address
          log: true,
          waitConfirmation: network.config.blockConfirmations || 1,
    })
    if (!developmentChains.includes(network.name) &&        // ! means not
    process.env.ETHERSCAN_API_KEY
    ) {            
      await verify(fundMe.address, args)
    }    
    log ("-------------------------------------------")
  }
  module.exports.tags = ["all", "fundme"]


