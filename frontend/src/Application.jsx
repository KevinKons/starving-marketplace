import Nullstack from 'nullstack';
// import Home from './Home';
import ExplorePage from './ExplorePage';
import CreateNFTPage from './CreateNFTPage';
import UserInfoMenu from './UserInfoMenu';
import Navbar from './Navbar';

import "./tailwind.css";

class Application extends Nullstack {

  connected = false
  userAddress = ''

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
            <ExplorePage route='/' class='' />
            <CreateNFTPage route='/create' />
          </div>
        </div>
        
      </main>
    )
  }

}

export default Application;