import Nullstack from 'nullstack';
import axios from 'axios';
import { ethers } from 'ethers';

import { abi as SIDE_A_ABI } from "../../public/SideAStarvingNFT.json";

import ListNFT from '../ListNFT';

class PublicProfilePage extends Nullstack {

  userNfts = [];

  async hydrate({ sideAAddress, params }) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const sideAContract = new ethers.Contract(sideAAddress, SIDE_A_ABI, provider);
    const [nftsIdArray, nftsUrlArray] = await sideAContract.getAllNftsByAddress(params.address);

    nftsUrlArray.forEach(async (url, i) => {
      const nftInfo = (await axios.get(url)).data;
      this.userNfts.push({ id: nftsIdArray[i], ...nftInfo })
    });
  }

  render({ params }) {
    return (
      <section class='flex flex-col items-start text-black mt-28'>
        <div class='flex space-x-5 items-center'>
          <div class='bg-yellow-300 w-24 h-24 ml-1 flex justify-center items-center grow'>
            <img class='h-8' src="tap-symbol.png" />
          </div>
          <div class='border border-1 px-3 text-gray-400 text-sm'>
            {`${params.address.slice(0, 14)}....${params.address.slice(params.address.length - 7)}`}
          </div>
        </div>
        <ListNFT nfts={this.userNfts} />
      </section>
    )
  }

}

export default PublicProfilePage;