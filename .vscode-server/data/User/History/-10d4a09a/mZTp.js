const { deployments, ethers } = require("hardhat")

describe("FundMe", async function () {
   let fundMe
   beforeEach(async function () {
     // deploy our fundMe contract
     // using Hardhat deploy
     const { deployer } = await getNamedAccounts()
     await deployments.fixture(["all"])
      fundMe = await ethers.getContract("FundMe")  
    })
   
describe("constructor", async function () {})
})