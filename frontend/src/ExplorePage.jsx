import Nullstack from 'nullstack';
import { ethers } from 'ethers';

import { abi as SIDE_A_ABI } from "../public/SideAStarvingNFT.json";

import ListNFT from './ListNFT';


class ExplorePage extends Nullstack {

  nftsForSale = [];

  async hydrate(context) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const sideAContract = new ethers.Contract('0x5C5FfD6b61AF9C97F679b645Df278B5B36c4c049', SIDE_A_ABI, provider);
    const result = await sideAContract.getAllNftsByAddress('0x5C5FfD6b61AF9C97F679b645Df278B5B36c4c049');
    console.log(result)

    // console.log("array1", array1[0])
    // context.nftsForSale = array1[0].toNumber();
  }

  render({ nftsForSale }) {
    return (
      <section class='flex flex-col items-center text-black'>
        <ListNFT />
      </section>
    )
  }

}

export default ExplorePage;