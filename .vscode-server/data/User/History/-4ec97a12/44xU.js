const { getNamedAccounts, ethers, network} = require("hardhat")
const {developmentChains} = require("../../helper-hardhat-config")
const { assert } = require ("Chai")

// let variable = true
// let someVar = variable ? "yes" : "no"

// if (variable) { someVar = "yes"} else {someVar = "no"}

developmentChains.includes(network.name) ? describe.skip:
describe("FundMe", async function(){
    let fundMe
    let deployer
    const sendValue = ethers.utils.parseEther("1")
    beforeEach(async function(){
        deployer = (await getNamedAccounts()).deployer
        fundMe = await ethers.getContract("FundMe", deployer)
    })

    it("allows people to fund and withdraw", async function(){
        await fundMe.fund({value: sendValue})
        await fundMe.withdraw()
    })
})