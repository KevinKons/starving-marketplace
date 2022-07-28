import Nullstack from 'nullstack';

class CardNFT extends Nullstack {

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
      <div class='bg-black flex-grow border-2 border-white p-1 text-white max-w-xs'>
        <img src="pexels-christian-tchouankam-juengue.jpeg" class='h-64' />
        <div>NFT name</div>
        <div>Creator name</div>
        <div>Price</div>
        <div>0.49</div>
      </div>
    )
  }

}

export default CardNFT;