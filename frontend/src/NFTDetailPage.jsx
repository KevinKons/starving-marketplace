import Nullstack from 'nullstack';
import axios from 'axios';
import { BigNumber, ethers } from 'ethers';

import { abi as SIDE_A_ABI } from "../public/SideAStarvingNFT.json";

class NFTDetailPage extends Nullstack {

  nft = {};

  async hydrate({ params }) {  
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const sideAContract = new ethers.Contract('0xBD62eF39e6d0952CbF01Cb747f98BF9C9F797509', SIDE_A_ABI, provider);
    const nftIpfsUrl = await sideAContract.tokenURI(params.nftid);
    
    this.nft = (await axios.get(nftIpfsUrl)).data;
  }

  render() {
    return (
      <div class='bg-black flex space-x-16 text-white'>
        <div>
          <div class="border-2 border-white p-2 w-full min-h-80 lg:h-60">
            <img src={this.nft.image} class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
          </div>
        </div>
        <div class='pt-10'>
          <h1 class='text-3xl font-extrabold'>
            {this.nft.name}
          </h1>
          <div class='mt-3 flex space-x-3' >
            <div>
              Owned by:
            </div>
            <div class='text-red-300'>
              {`0x632b...4u9e`}
            </div>
          </div>
          <div class='text-2xl font-semibold mt-5'>
            Price
          </div>
          <div class='flex space-x-3'>
            <img src="tap-symbol.png" />
            <div class='text-2xl font-semibold'>
              0.49
            </div>
          </div>
          <button onclick={this.buy} class='flex space-x-2 justify-center items-center mt-7 font-bold text-black bg-yellow-400 hover:bg-yellow-500 w-28 h-11'>
            {/* <img src='buy-now-icon.png' /> */}
            <div>
              Buy now
            </div>
          </button>
          <h2 class='text-2xl font-extrabold mt-5'>
            Description
          </h2>
          <p class='w-96'>
            {this.nft.description}
          </p>
        </div>
      </div>
    )
  }

}

export default NFTDetailPage;