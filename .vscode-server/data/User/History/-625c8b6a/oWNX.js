const { ethers } = require("hardhat")



describe("SimpleStorage", function () {
  let simpleStorageFactory
  let simpleStorage
    beforeEach(async function () {
      const simpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
        )
      const simpleStorage = await simpleStorageFactory.deploy()
      })

    it()
    
})