import Nullstack from 'nullstack';
import ExplorePage from './pages/ExplorePage';
import UserInfoMenu from './components/UserInfoMenu';
import Navbar from './components/Navbar';
import TapsPage from './pages/TapsPage';
import NFTDetailPage from './pages/NFTDetailPage';
import PublicProfilePage from './pages/PublicProfilePage';
import AdminNavbar from './admin/AdminNavbar';
import AdminHome from './admin/AdminHome';
import Footer from './components/Footer';

class Application extends Nullstack {

  initiate(context) {
    context.tapTokenAddress = '0x48c366D25dEC0B19f367aFf0869e9869E095c0F9';
    context.sideAAddress = '0xF8A994283ce417735383cc682698B0EfD117E21c';
    context.sideBAddress = '0x8D7a7e4F1413f4ac0cC4333C78bBF15501c136F8';
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
              <AdminHome />
            </div>
          ) : (
            <div class='bg-red-900 min-h-screen flex flex-col justify-between'>
              <div>
                <UserInfoMenu />
                <Navbar />

                <div class='flex justify-center'>
                  <div class='max-w-7xl'>
                    <ExplorePage route='/explore' />
                    <TapsPage route='/taps' />
                    <NFTDetailPage route='/nftdetail' />
                    <PublicProfilePage route='/user' />
                  </div>
                </div>
              </div>
              <Footer/>
            </div>
          )
        }
      </main>
    )
  }

}

export default Application;