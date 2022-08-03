import Nullstack from 'nullstack';
import ExplorePage from './ExplorePage';
import CreateNFTPage from './CreateNFTPage';
import UserInfoMenu from './UserInfoMenu';
import Navbar from './Navbar';
import TapsPage from './TapsPage';
import NFTDetailPage from './NFTDetailPage';
import PublicProfilePage from './PublicProfilePage';
import AdminNavbar from './AdminNavbar';
import AdminHome from './AdminHome';

class Application extends Nullstack {

  initiate(context) {
    context.tapTokenAddress = '0x48c366D25dEC0B19f367aFf0869e9869E095c0F9';
    context.sideAAddress = '0xF8A994283ce417735383cc682698B0EfD117E21c';
    context.adminAddress = '0x0216fa489606d6c1862072aa9416db4c56524b33';
  }

  async hydrate(context) {
    const account = (await window.ethereum.request({ method: 'eth_accounts' }))[0];
    if (account) {
      context.connected = true;
      context.userAddress = account;
    }
  }

  render({ userAddress, adminAddress }) {
    const isAdmin = adminAddress === userAddress;
    return (
      <main class='min-h-min'>
        {
          isAdmin ? (
            <div class='bg-gray-900 ck min-h-screen flex'>
              <AdminNavbar />
              <CreateNFTPage route='/create' />
              <AdminHome />
            </div>
          ) : (
            <div class='bg-red-900 min-h-screen'>
              <UserInfoMenu />
              <Navbar />

              <div class='flex justify-center'>
                <div class='max-w-7xl'>
                  <ExplorePage route='/explore' />
                  <TapsPage route='/taps' />
                  <NFTDetailPage route='/explore/:nftid' />
                  <PublicProfilePage route='/user/:address' />
                </div>
              </div>
            </div>
          )
        }
      </main>
    )
  }

}

export default Application;