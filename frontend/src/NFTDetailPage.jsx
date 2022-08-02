import Nullstack from 'nullstack';
import { BigNumber, ethers } from 'ethers';


class NFTDetailPage extends Nullstack {

  tapValue = 0;
  maticValue = 0;

  render() {
    return (
      <div class='bg-black flex space-x-16 text-white'>
        <div>
          <div class="border-2 border-white p-2 w-full min-h-80 lg:h-60">
            <img src='kid1.jpeg' class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
          </div>
        </div>
        <div class='pt-10'>
          <h1 class='text-3xl font-extrabold'>
            SNFT title
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
            <img src="buy-now-icon.png" />
            <div>
              Buy now
            </div>
          </button>
          <h2 class='text-2xl font-extrabold mt-5'>
            Description
          </h2>
          <p class='w-96'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    )
  }

}

export default NFTDetailPage;