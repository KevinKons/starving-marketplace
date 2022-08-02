import Nullstack from 'nullstack';
import { BigNumber, ethers } from 'ethers';

import { abi as TAP_ABI } from "../public/Tap.json";

class TapsPage extends Nullstack {

  tapValue = 0;
  maticValue = 0;

  updateTapValue({ event }) {
    this.tapValue = event.target.value;
    this.maticValue = event.target.value * 2;
  }

  updateMaticValue({ event }) {
    this.maticValue = event.target.value;
    this.tapValue = event.target.value / 2;
  }

  async buy() {
    console.log('Buying...')

    if (this.maticValue > 0) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const tapToken = new ethers.Contract('0x7F0a54e183af9e839DD4D48988690B47a3192c37', TAP_ABI, provider);
      const tapTokenWithSigner = tapToken.connect(provider.getSigner());

      tapTokenWithSigner.buy({ value: Number(this.maticValue) });
    }
  }

  render() {
    return (
      <div class='w-full flex flex-col items-center justify-center text-white '>
        <div class='text-3xl font-bold m-16'>
          Buy TAPs
        </div>
        <div class='h-368 w-613 bg-black border border-1 border-gray-600'>
          <div class='flex flex-col m-10'>
            <div class='flex flex-col'>
              <div class='flex space-x-3'>
                <img class='h-5 w-5' src="tap-symbol.png" />
                <div>
                  TAPs
                </div>
              </div>
              <input value={this.tapValue} oninput={this.updateTapValue} class='h-16 grow-1 border border-1 border-white bg-black mb-3 text-2xl p-3' />
            </div>

            <div class='flex flex-col'>
              <div class='flex space-x-3'>
                <img class='h-5 w-5' src="matic-logo.png" />
                <div>
                  MATICs
                </div>
              </div>
              <input value={this.maticValue} oninput={this.updateMaticValue} class='h-16 grow-1 border border-1 border-white bg-black mb-3 text-2xl p-3' />
            </div>
          </div>

          <div class='flex justify-center'>
            <button onclick={this.buy} class='font-bold text-black bg-yellow-400 hover:bg-yellow-500 w-52 h-11'>
              Buy TAP Token
            </button>
          </div>

        </div>
      </div>
    )
  }

}

export default TapsPage;