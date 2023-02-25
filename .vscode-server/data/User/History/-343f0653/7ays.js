// imports
const { Contract } = require("ethers")
const { ethers, run, network } = require("hardhat")

// async main
async function main() 
  const SimpleStorageFactory = await ethers.getContractFactory(
    "SimpleStorage"
    )
 console.log("Deploying contract...")
 const simpleStorageFactory = await ethers.getContractFactory(
  "SimpleStorage"
 )
 console.log("Deploying contract...")
 const simpleStorage = await SimpleStorageFactory.deploy()
 await simpleStorage.deployed()
 

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
