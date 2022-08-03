import Nullstack from "nullstack";

class AdminHome extends Nullstack {

  address = '';
  quantity = 0;

  render() {
    return (
      <div>
        <div class='text-white ml-32 mt-20 w-96'>
          <h1 class='flex space-x-3'>
            <img src='faucet-icon.png' />
            <div class='font-semibold text-2xl'>
              Faucet
            </div>
          </h1>
          <div class='text-xl font-semibold mt-10'>
            <label>Address</label>
            <input bind={this.address} value={this.address ? this.address : undefined} placeholder='Enter your Wallet address (0x...) or ENS Domain' class="mt-1 block w-full sm:text-sm bg-gray-900 border border-white h-10" />
          </div>
          <div class='flex justify-between text-xl font-semibold mt-10'>
            <div>
              <label>Address</label>
              <p class='text-gray-400 font-normal text-sm'>
                Put the quantity of TAPs you'll need
              </p>
            </div>
            <div>
              <input bind={this.quantity} value={this.quantity ? this.quantity : undefined}  class="mt-1 block w-10 sm:text-sm bg-gray-900 border border-white h-10" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminHome;