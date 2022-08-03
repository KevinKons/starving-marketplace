import Nullstack from 'nullstack';
import axios from 'axios';
import { ethers } from 'ethers';

import { abi as SIDE_A_ABI } from "../public/SideAStarvingNFT.json";

import ListNFT from './ListNFT';


class ExplorePage extends Nullstack {

  nftsForSale = [];

  async hydrate({ sideAAddress }) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const sideAContract = new ethers.Contract(sideAAddress, SIDE_A_ABI, provider);
    const [nftsIdArray, nftsUrlArray ] = await sideAContract.getAllNftsByAddress(sideAAddress);

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