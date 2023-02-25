const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const encryptedJsonkey = await ethers.encrypt(
        process.env.PRIVATE_KEY_PASSWORD, 
        process.env.PRIVATE_KEY
        );
        console.log(encryptedJsonkey);
    }

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });