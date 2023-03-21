const { deployments, ethers, getNamedAccounts } = require("hardhat")
const { assert, expect } = require("chai")

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
      mockV3Aggregator = await ethers.getContract(
        "MockV3Aggregator", 
        deployer
        ) 
    })
   
    describe("constructor", function () {
        it("sets the aggregator addresses correctly", async () => {
            const response = await fundMe.getPriceFeed()
            assert.equal(response, mockV3Aggregator.address)
        
    
    })
})
describe("fund", function () {
  // https://ethereum-waffle.readthedocs.io/en/latest/matchers.html
  // could also do assert.fail
  it("Fails if you don't send enough ETH", async () => {
      await expect(fundMe.fund()).to.be.revertedWith(
          "You need to spend more ETH!"
      )
    })
  })
})