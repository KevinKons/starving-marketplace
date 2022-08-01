import Nullstack from 'nullstack';

class UserInfoMenu extends Nullstack {

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
                <div class='text-lg'>1.345 TAP</div>
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