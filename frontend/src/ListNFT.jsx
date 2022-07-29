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
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <CardNFT />
        <CardNFT />
        <CardNFT />
        <CardNFT />
        <CardNFT />
      </div>
    )
  }

}

export default ListNFT;