import Nullstack from 'nullstack';

class CardNFT extends Nullstack {
  
  render({ nft }) {
    return (
      <a href={`/explore/${nft.id}`} class="group relative bg-black border-2 border-white p-2">
        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src={nft.image} class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div class="mt-4 flex flex-col justify-between text-white">
          <div class="text-lg">{nft.name}</div>
          <div class="text-xs">Creator name</div>
          <br />
          <div class="text-xs">Price</div>
          <div class="flex space-x-1">
            <img src="tap-symbol.png" />
            <div class="text-lg font-extrabold">0.49</div>
          </div>
        </div>
      </a>
    )
  }
}

export default CardNFT;