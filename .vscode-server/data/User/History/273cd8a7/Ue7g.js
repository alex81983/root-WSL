const {getNamedAccounts} = require("hardhat")

async function main() {
    const {deployer} = await getNamedAccounts()
    const
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })