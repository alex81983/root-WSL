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
module.exports = async({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId

    const address =""
    
    
    const fundMe = await deploy("FundMe", {
          from: deployer,
          args: [],
          log: true

    })
}


