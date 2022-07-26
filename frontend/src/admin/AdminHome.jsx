import Nullstack from 'nullstack'
import Faucet from './Faucet';
import CreateNFTPage from '../pages/CreateNFTPage';

class AdminHome extends Nullstack {

  render() {
    return (
      <div>
        <Faucet route='/' />
        <CreateNFTPage route='/create' />
      </div>
    )
  }
}

export default AdminHome;