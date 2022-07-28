import Nullstack from 'nullstack';
import CardNFT from './CardNFT';

class ListNFT extends Nullstack {

  prepare({ project, page }) {
  }

  renderLink({ children, href }) {
    const link = href + '?ref=create-nullstack-app';
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }


  render({ project }) {
    return (
      <div class='w-9/12 h-96 flex justify-between space-x-10'>
        <CardNFT />
      </div>
    )
  }

}

export default ListNFT;