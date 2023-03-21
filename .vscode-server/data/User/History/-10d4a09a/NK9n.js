const { inputToConfig } = require("@ethereum-waffle/compiler")
const { deployments, ethers } = require("hardhat")

describe("FundMe", async function () {
   let fundMe
   let deployer
   let mockV3Aggregator
   beforeEach(async function () {
     // deploy our fundMe contract
     // using Hardhat deploy
     // const accounts = await ethers.getSigners()
     // const accountZero = accounts[0]
     deployer = (await getNamedAccounts()).deployer
     await deployments.fixture(["all"])
      fundMe = await ethers.getContract("FundMe", deployer)
      mockV3Aggregator = await ethers.getContract("MockV3Aggregator",) 
    })
   
describe("constructor", async function () {
    it("sets the aggregator addresses correctly", async function(){
        const response = await fundMe.priceFeed()
    
    })
})
})