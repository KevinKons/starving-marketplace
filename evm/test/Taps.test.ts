import { expect } from 'chai';
import { ethers, waffle } from 'hardhat';
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

    it('When buying should send the correct amout of taps token to buyer', async () => {
        await expect(tapToken.buy({ value: BigNumber.from('2') }))
            .to.emit(tapToken, 'Buy')
            .withArgs(owner.address, BigNumber.from('1'));
        expect(await tapToken.balanceOf(owner.address)).to.equal(BigNumber.from('1'));

        const balanceResult = await waffle.provider.getBalance(tapToken.address);
        expect(balanceResult).to.equal(BigNumber.from('2'));
    });
});