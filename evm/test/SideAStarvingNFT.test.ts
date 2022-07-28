import { expect } from 'chai';
import { ethers } from 'hardhat';
import { SideAStarvingNFT, SideBStarvingNFT } from '../typechain-types';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';


describe('Test NFTs', () => {
    let owner: SignerWithAddress;
    let sideA: SideAStarvingNFT;
    let sideB: SideBStarvingNFT;

    beforeEach(async () => {
        owner = (await ethers.getSigners())[0];

        const SideAStarvingNFT = await ethers.getContractFactory('SideAStarvingNFT');
        sideA = await SideAStarvingNFT.deploy();
        await sideA.deployed();

        const SideBStarvingNFT = await ethers.getContractFactory('SideBStarvingNFT');
        sideB = await SideBStarvingNFT.deploy(sideA.address);
        await sideB.deployed();

        await sideA.setSideB(sideB.address);
    });

    it('When deploying contracts should deploy correctly', async () => {
        expect(await sideA.owner()).to.equal(owner.address);
        expect(await sideB.sideA()).to.equal(sideA.address);
        expect(await sideA.sideB()).to.equal(sideB.address);
    });

    it('When minting NFT should send it to given address, set uri, and emit events', async () => {
        const uriA = "side a uri";
        const uriB = "side b uri";

        await expect(sideA.mint(sideA.address, uriA, uriB))
            .to.emit(sideA, "Mint")
            .withArgs(sideA.address, 0)
            .and
            .to.emit(sideB, "Mint")
            .withArgs(sideA.address, 0);

        expect(await sideA.ownerOf(0)).to.equal(sideA.address);
        expect(await sideB.ownerOf(0)).to.equal(sideA.address);

        expect(await sideA.tokenURI(0)).to.equal(uriA);
        expect(await sideB.tokenURI(0)).to.equal(uriB);
    });
});