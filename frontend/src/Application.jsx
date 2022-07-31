import Nullstack from 'nullstack';
import "./tailwind.css";
// import Home from './Home';
import ExplorePage from './ExplorePage';
import CreateNFTPage from './CreateNFTPage';

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

  render({ userAddress, connected}) {
    return (
      <main class='bg-red-400 h-screen'>
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
        <ExplorePage route='/'/>
        <CreateNFTPage route='/create'/>
      </main>
    )
  }

}

export default Application;