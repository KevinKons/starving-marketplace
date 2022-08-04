import Nullstack from 'nullstack';
import { ethers } from 'ethers';
import { convertIntoGwei } from '../util.js'

import { abi as TAP_ABI } from "../../public/Tap.json";

class Faucet extends Nullstack {

  address = '';
  quantity = '0';

  async send({ tapTokenAddress }) {
    const value = convertIntoGwei(this.quantity);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const tapToken = new ethers.Contract(tapTokenAddress, TAP_ABI, provider);
    const tapTokenWithSigner = tapToken.connect(provider.getSigner());

    tapTokenWithSigner.mint(this.address, value);
  }

  render() {
    return (
      <div class='text-white ml-32 mt-20 w-96'>
        <h1 class='flex space-x-3'>
          <img src='faucet-icon.png' />
          <div class='font-semibold text-2xl'>
            Faucet
          </div>
        </h1>
        <div class='text-xl font-semibold mt-10'>
          <label>Address</label>
          <input bind={this.address} value={this.address ? this.address : undefined} placeholder='Enter your Wallet address (0x...) or ENS Domain' class="px-2 mt-1 block w-full sm:text-sm bg-gray-900 border border-white h-10" />
        </div>
        <div class='flex justify-between text-xl font-semibold mt-5'>
          <div>
            <label>Quantity</label>
            <p class='text-gray-400 font-normal text-sm'>
              Put the quantity of TAPs you'll need
            </p>
          </div>
          <div class='flex items-center'>
            <div class='border border-white h-10 flex items-center'>
              <img class='p-2' src="tap-symbol.png" />
            </div>
            <input bind={this.quantity} value={this.quantity ? this.quantity : undefined} placeholder='0.00' class='text-xl h-10 px-3 block w-20 bg-gray-900 border border-white' />
          </div>
        </div>
        <button onclick={this.send} class="h-12 w-32 mt-10 py-2 px-4 font-bold text-black bg-red-400 hover:bg-red-500">
          Mint & Send
        </button>
      </div>
    )
  }
}

export default Faucet;