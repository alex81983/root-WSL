 const ethers = require("ethers");
 const fs = require("fs")
require("dotenv").config();
 
 async function main() {
// http://172.31.0.1:7545
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY,provider);
const encryptedJson = fs.readFileSync("./encryptedkey.json" , "utf8")
let wallet = new ethers.Wallet.fromEncyrptedJsonSync(
    encryptedJson, 
    process,env.PRIVATE_KEY_PASSWORD
);
wallet = await wallet.connect(provider);
const abi = fs.readFileSync ("./SimpleStorage_sol_SimpleStorage.abi" , "utf8");
const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin" , 
"utf8"
    ); 
     const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
     console.log("Deploying, please wait...");
     const contract = await contractFactory.deploy(); // Stop here! Wait for contract to deploy
    await contract.deployTransaction.wait(1);
     // Get number
    const currentFavoriteNumber = await contract.retrieve();
    console.log(`Current Favorite Number: ${currentFavoriteNumber.toString()}`);
    const transactionResponse = await contract.store("7");
    const transactionReceipt = await transactionResponse.wait(1);
    const updatedFavoriteNumber = await contract.retrieve();
    console.log(`Updated favorite number is: ${updatedFavoriteNumber}`)};

    main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });