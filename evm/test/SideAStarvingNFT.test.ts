import { expect } from 'chai';
import { ethers } from 'hardhat';
import { SideAStarvingNFT, SideBStarvingNFT, Tap } from '../typechain-types';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { BigNumber } from 'ethers';


describe('Test NFTs', () => {
    let owner: SignerWithAddress;
    let sideA: SideAStarvingNFT;
    let sideB: SideBStarvingNFT;
    let tapToken: Tap;


    beforeEach(async () => {
        owner = (await ethers.getSigners())[0];

        const TapToken = await ethers.getContractFactory('Tap');
        tapToken = await TapToken.deploy();
        await tapToken.deployed();

        const SideAStarvingNFT = await ethers.getContractFactory('SideAStarvingNFT');
        sideA = await SideAStarvingNFT.deploy(tapToken.address);
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

    it('When returning NFTs by owner should return only the NFTs of the owner', async () => {
        const anotherAccount: SignerWithAddress = (await ethers.getSigners())[3];

        await sideA.mint(sideA.address, 'uriA0', 'uriB0');
        await sideA.mint(anotherAccount.address, 'uriA1', 'uriB1');
        await sideA.mint(anotherAccount.address, 'uriA2', 'uriB2');
        await sideA.mint(sideA.address, 'uriA3', 'uriB3');

        let [ids] = await sideA.getAllNftsByAddress(sideA.address);

        expect(ids[0]).to.equal(BigNumber.from("0"));
        expect(ids[1]).to.equal(BigNumber.from("3"));

        [ids] = await sideA.getAllNftsByAddress(anotherAccount.address);

        expect(ids[0]).to.equal(BigNumber.from("1"));
        expect(ids[1]).to.equal(BigNumber.from("2"));
    });

    it.only('When buying NFT should transfer TAP token to contract and SideA token to buyer', async () => {
        const nftPrice = BigNumber.from('490000000000000000');
        await sideA.mint(sideA.address, 'uriA0', 'uriB0');
        await tapToken.mint(owner.address, nftPrice);
        await tapToken.approve(sideA.address, nftPrice);

        await sideA.buy(0);

        expect(await tapToken.balanceOf(sideA.address)).to.equal(nftPrice);
        expect(await sideA.ownerOf(0)).to.equal(owner.address);
    });


});