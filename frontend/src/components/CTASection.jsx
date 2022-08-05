export default function CTASection() {
    return (
      <section class='flex justify-center items-center text-white text-center h-613 mt-32' style='background-image: url(./cta-background.svg)'>
        <div>
          <h2 class='text-3xl font-semibold text-center'>
            With <a class='bg-yellow-400 text-black'>great power</a> comes non-fungibility
          </h2>
          <p class='mt-5 mb-16'>
            What Uncle Ben and Uncle Satoshi mean is that you can use<br />
            your “power” to change the world... by minting a few NFTs.
          </p>
          <a href='/explore' class="py-4 px-14 text-lg font-bold text-black bg-red-400 hover:bg-red-500">
            BUY A NFT TO A STARVING CHILD
          </a>
        </div>
      </section>
    )
  }