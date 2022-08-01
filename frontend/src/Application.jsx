import Nullstack from 'nullstack';
// import Home from './Home';
import ExplorePage from './ExplorePage';
import CreateNFTPage from './CreateNFTPage';

import "./tailwind.css";
import './Application.css';

class Application extends Nullstack {

  async hydrate(context) {
    const account = (await window.ethereum.request({ method: 'eth_accounts' }))[0];
    if (account) {
      context.connected = true;
      context.userAddress = account;
    }
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

  render({ userAddress, connected }) {
    return (
      <main class='bg-red-400 h-screen'>
        <nav class="text-white">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="flex-1 flex justify-between items-center">
                <div>
                  <div class='logo1'>NFTS FOR</div>
                  <div>STARVING</div>
                  <div>CHILDREN</div>
                </div>
                <div class="hidden sm:block sm:ml-6">
                  <div class="flex space-x-4">
                    <a href="#" class="px-3 py-2 text-sm font-semibold">Home</a>

                    <a href="#" class="px-3 py-2 text-sm font-normal">WTF?</a>

                    <a href="#" class="px-3 py-2 text-sm font-normal">Explore</a>

                    <a href="#" class="px-3 py-2 text-sm font-normal">TAPs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>






        {
          connected ? (
            <div>{userAddress}</div>
          )
            :
            (
              <button
                onclick={this.requestAccount}
                class='bg-blue-500 w-32 border'
              >
                Connect Wallet
              </button>
            )
        }
        <ExplorePage route='/' />
        <CreateNFTPage route='/create' />
      </main>
    )
  }

}

export default Application;