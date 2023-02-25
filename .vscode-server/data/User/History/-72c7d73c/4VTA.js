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

module.exports = {
    networkConfig,
    developmentChain,
}