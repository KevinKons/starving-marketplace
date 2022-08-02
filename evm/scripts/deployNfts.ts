import { ethers } from 'hardhat';
import { SideAStarvingNFT, SideBStarvingNFT } from '../typechain-types';

async function main() {
    let sideA: SideAStarvingNFT;
    let sideB: SideBStarvingNFT;

    const SideAStarvingNFT = await ethers.getContractFactory('SideAStarvingNFT');
    sideA = await SideAStarvingNFT.deploy();
    console.log('Deploying SideAStarvingNFT...');
    await sideA.deployed();
    console.log('Contract deployed at:', sideA.address);

    const SideBStarvingNFT = await ethers.getContractFactory('SideBStarvingNFT');
    sideB = await SideBStarvingNFT.deploy(sideA.address);
    console.log('Deploying SideBStarvingNFT...');
    await sideB.deployed();
    console.log('Contract deployed at:', sideB.address);

    console.log('Seting B side on A side...');
    await sideA.setSideB(sideB.address);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});