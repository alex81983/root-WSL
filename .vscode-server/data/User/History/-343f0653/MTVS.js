// imports
const { ethers, run } = require("hardhat")

// async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
 console.log("Deploying contract...")
 const simpleStorage = await SimpleStorageFactory.deploy()
 await simpleStorage.deployed()
 console.log(`Deployed contract to: ${simpleStorage.address}`)
 }

async function verify (contractAddress, args) {
  console.log("Verifiying contract...")
   await run("verify")
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
