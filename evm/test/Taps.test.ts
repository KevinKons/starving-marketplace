import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Tap } from '../typechain-types';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { BigNumber } from 'ethers';


describe('Test NFTs', () => {
    let owner: SignerWithAddress;
    let tapToken: Tap;

    beforeEach(async () => {
        owner = (await ethers.getSigners())[0];

        const TapToken = await ethers.getContractFactory('Tap');
        tapToken = await TapToken.deploy();
        await tapToken.deployed();
    });

    it('Name and Symbol shoud be correct', async () => {
        expect(await tapToken.name()).to.equal('TAP');
        expect(await tapToken.symbol()).to.equal('TAP');
    });
});