import Nullstack from 'nullstack';
import axios from 'axios';
import { ethers } from 'ethers';

import { abi as SIDE_A_ABI } from "../public/SideAStarvingNFT.json";

import ListNFT from './ListNFT';


class ExplorePage extends Nullstack {

  nftsForSale = [];

  async hydrate() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const sideAContract = new ethers.Contract('0xBD62eF39e6d0952CbF01Cb747f98BF9C9F797509', SIDE_A_ABI, provider);
    const [nftsIdArray, nftsUrlArray ] = await sideAContract.getAllNftsByAddress('0x0216fa489606D6c1862072aa9416Db4c56524B33');
    console.log(nftsUrlArray)

    nftsUrlArray.forEach(async (url, i) => {
      const nftInfo = (await axios.get(url)).data;
      this.nftsForSale.push({ id: nftsIdArray[i], ...nftInfo })
    });
  }

  render() {
    return (
      <section class='flex flex-col items-center text-black'>
        <ListNFT nfts={this.nftsForSale}/>
      </section>
    )
  }

}

export default ExplorePage;