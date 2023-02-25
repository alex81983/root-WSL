 const ethers = require("ethers");
 const fs = require("fs")

 async function main() {
// http://172.31.0.1:7545
const provider = new ethers.providers.JsonRpcProvider("http://172.31.0.1:7545");
const wallet = new ethers.Wallet(
    "c737676911e2ec9e29eceb4c8548deba4fc44e568e3a516da8f691b1de7ac8c7",
    provider
    );
    const abi = fs.readFileSync ("./SimpleStorage_sol_SimpleStorage.abi" , "utf8");
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin" , 
    "utf8"
    ); 
    // const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    // console.log("Deploying, please wait...");
    // const contract = await contractFactory.deploy(); // Stop here! Wait for contract to deploy
    // const transactionReceipt = await contract.deployTransaction.wait(1);
        
    console.log("Let's deploy with only transaction data!");
    const nonce = await wallet.getTransactionCount();
    const tx = {
        nonce: nonce,
        gasPrice:20000000000,
        gasLimit:1000000,
        to: null,
        value: 0,
        data:"0x208601610541565b80840191505092915050565b60006108fa82846108bd565b91508190509291505056fea2646970667358221220f71a0ca71d53a7447398fd2e426c07bac9b49b7be9af07f0b0a0d4d6c45ff28f64736f6c63430008120033", 
        chainId: 1377,
    };
    const signedTxResponse = await wallet.sendTransaction(tx);
    await sentTxResponse.wait(1);
    console.log(signedTxResponse);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});