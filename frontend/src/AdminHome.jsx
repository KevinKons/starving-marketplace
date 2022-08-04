import Nullstack from 'nullstack'
import Faucet from './Faucet';

class AdminHome extends Nullstack {

  address = '';
  quantity = 0;

  render() {
    return (
      <div>
        <Faucet route='/' />
      </div>
    )
  }
}

export default AdminHome;