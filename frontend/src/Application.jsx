import Nullstack from 'nullstack';
import ExplorePage from './ExplorePage';
import CreateNFTPage from './CreateNFTPage';
import UserInfoMenu from './UserInfoMenu';
import Navbar from './Navbar';
import TapsPage from './TapsPage';
import NFTDetailPage from './NFTDetailPage';
import PublicProfilePage from './PublicProfilePage';

class Application extends Nullstack {

  initiate(context) {
    context.tapTokenAddress = '0x48c366D25dEC0B19f367aFf0869e9869E095c0F9';
    context.sideAAddress = '0xF8A994283ce417735383cc682698B0EfD117E21c';
  }

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
            <PublicProfilePage route='/user/:address' />
          </div>
        </div>

      </main>
    )
  }

}

export default Application;