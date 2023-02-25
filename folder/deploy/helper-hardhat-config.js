const networkConfig = {
    5: {
        name: "goerli",
        ethUsdPriceFeed:"0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"
    },
    137: {
        name: "polygon",
        ethUsdPriceFeed
    }
}

const developmentChain = ["hardhat", "localhost"]
const DECIMALS = 8
const INITAL_ANSWER = 200000000000

module.exports = {
    networkConfig,
    developmentChain,
    DECIMALS,
    INITAL_ANSWER, 

}