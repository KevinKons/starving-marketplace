import Nullstack from 'nullstack';
import { ethers } from 'ethers';

import { abi as TAP_ABI } from "../public/Tap.json";

class UserInfoMenu extends Nullstack {

  balance = 0;

  async hydrate({ userAddress, tapTokenAddress }) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const tapToken = new ethers.Contract(tapTokenAddress, TAP_ABI, provider);
    const balance = (await tapToken.balanceOf(userAddress)).toString();
    this.balance = Number(`${balance.slice(0, balance.length - 18)}.${balance.slice(balance.length - 18)}`);
  }

  async requestAccount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        context.userAddress = accounts[0];
        context.connected = true;
      } catch (error) {
        console.log('Error connecting');
      }
    } else {
      console.log('Not Detected');
    }
  }

  render({ connected, userAddress }) {
    return (
      <div class='flex justify-end text-white pt-2'>
        {
          connected && (
            <div class='flex justify-center items-center'>
              <img class='h-6 mr-4' src="tap-symbol.png" />
              <div>
                <div class='text-lg'>{`${this.balance} TAP`}</div>
                <div class='text-sm text-gray-300'>{`${userAddress.substr(0, 7)}...${userAddress.substr(userAddress.length - 6)}`}</div>
              </div>
            </div>
          )
        }
        <button onclick={this.requestAccount} class='flex justify-between items-center w-32 mx-6'>
          <img class='h-6' src="account_circle.png" />
          <div>My Account</div>
        </button>
      </div>
    )
  }
}

export default UserInfoMenu;