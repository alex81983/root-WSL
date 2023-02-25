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
      ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPRiceFeed"]
    }
    
    
    const fundMe = await deploy("FundMe", {
          from: deployer,
          args: [ethUsdPriceFeedAddress],
          log: true

    })
    if (!developmentChains.includes(network.name) &&        // ! means not
    process.env.ETHERSCAN_API_KEY
    ) {            
        // verify
    }    
    log ("-------------------------------------------")
  }
  module.exports.tags = all["all", "fundme"]


