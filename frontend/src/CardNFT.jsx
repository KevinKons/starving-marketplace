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
      <div class="group relative bg-black border-2 border-white p-2">
        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src="pexels-christian-tchouankam-juengue.jpeg" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div class="mt-4 flex flex-col justify-between text-white">
          <div class="text-lg">NFT name</div>
          <div class="text-xs">Creator name</div>
          <br />
          <div class="text-xs">Price</div>
          <div class="flex space-x-1">
            <img src="tap-symbol.png" />
            <div class="text-lg font-extrabold">0.49</div>
          </div>
        </div>
      </div>
    )
  }

}

export default CardNFT;