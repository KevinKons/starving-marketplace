import { ethers } from 'hardhat';
import { Tap } from '../typechain-types';

async function main() {
    let tapToken: Tap;

    const TapToken = await ethers.getContractFactory('Tap');
    tapToken = await TapToken.deploy();
    console.log('Deploying Tap token...');
    await tapToken.deployed();
    console.log('Contract deployed at:', tapToken.address);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});