import Nullstack from 'nullstack';
import ExplorePage from './ExplorePage';
import CreateNFTPage from './CreateNFTPage';
import UserInfoMenu from './UserInfoMenu';
import Navbar from './Navbar';
import TapsPage from './TapsPage';
import NFTDetailPage from './NFTDetailPage';

// import './tailwind.css'

class Application extends Nullstack {

  async hydrate(context) {
    const account = (await window.ethereum.request({ method: 'eth_accounts' }))[0];
    if (account) {
      context.connected = true;
      context.userAddress = account;
    }
  }

  render() {
    return (
      <main class='bg-red-900 h-screen'>
        <UserInfoMenu />
        <Navbar />

        <div class='flex justify-center'>
          <div class='max-w-7xl'>
            <ExplorePage route='/explore' />
            <CreateNFTPage route='/create' />
            <TapsPage route='/taps' />
            <NFTDetailPage route='/explore/:nftid' />
          </div>
        </div>

      </main>
    )
  }

}

export default Application;