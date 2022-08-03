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

  countDecimals({ value }) {
    const numStr = String(value);
    if (numStr.includes('.')) {
      return numStr.split('.')[1].length;
    };
    return 0;
  }

  convertIntoGwei({ value }) {
    const decimalsCount = this.countDecimals({ value: value })
    const decimalsToAdd = 18 - decimalsCount;
    let numberWithoutDot = String(Math.floor(value));
    if (String(value).includes('.')) {
      numberWithoutDot = numberWithoutDot.concat(value.split('.')[1]);
    } 

    for (var i = 0; i < decimalsToAdd; i++) {
      numberWithoutDot = numberWithoutDot.concat('0');
    }

    return numberWithoutDot;
  }

  async buy({ tapTokenAddress }) {
    const value = this.convertIntoGwei({ value: this.maticValue });

    if (this.maticValue > 0) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const tapToken = new ethers.Contract(tapTokenAddress, TAP_ABI, provider);
      const tapTokenWithSigner = tapToken.connect(provider.getSigner());

      tapTokenWithSigner.buy({ value: value });
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