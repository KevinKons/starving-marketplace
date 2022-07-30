import Nullstack from 'nullstack';
import "./tailwind.css";
// import Home from './Home';
import ExplorePage from './ExplorePage';
import CreateNFTPage from './CreateNFTPage';

class Application extends Nullstack {

  connected = false;
  userAddress = "empty";
  tapsBalance = 0;

  async hydrate() {
    const account = (await window.ethereum.request({ method: 'eth_accounts' }))[0];
    if (account) {
      this.connected = true;
      this.userAddress = account;
    }
  }

  async requestAccount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        this.userAddress = accounts[0];
        this.connected = true;
      } catch (error) {
        console.log('Error connecting');
      }
    } else {
      console.log('Not Detected');
    }
  }

  render() {
    return (
      <main class='bg-red-400 h-screen'>
        {
          this.connected ? (
            <div>{this.userAddress}</div>
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