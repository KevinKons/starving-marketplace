export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ShredsOfHopeSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section class='flex justify-between items-center text-white mt-16 mb-44'>
      <div>
        <h1 class='text-3xl font-semibold text-left'>
          Your kindness can make<br />
          the world of a difference<br />
          for a<a class='bg-yellow-400 text-black'> child's crypto wallet.</a>
        </h1>
        <p class='text-left my-5'>
          They may not have food, but you can help<br />
          an NFT-less child with this buy one, give one<br />
          opportunity. Every child deserves an NFT.
        </p>
        <div class='flex space-x-4 text-lg'>
          <a href='/explore' class="py-3 px-8 font-bold text-black bg-yellow-400 hover:bg-yellow-500">
            Explore
          </a>
          <a href='/taps' class="py-3 px-8 font-bold text-red-400 border-2 border-red-400">
            Buy TAPs
          </a>
        </div>
      </div>

      <div>
        <img src='./kid-in-sofa-small.png' class='w-96 border-4 border-white' />
      </div>

    </section>
  )
}

function ShredsOfHopeSection() {
  return (
    <section class='my-20 text-white'>
      <h2 class='text-3xl font-semibold text-center'>
        Don't let these weary children lose<br />their<a class='bg-yellow-400 text-black'> last shreds of hope</a>
      </h2>

      <div class='flex justify-between items-start space-x-24 mt-16'>
        <div class='flex flex-col justify-center items-center w-80 text-center'>
          <img src='./kid-circle-1.png' class='w-48' />
          <div class='mt-5'>
            <h3 class='text-xl'>Unimaginable poverty</h3>
            <p class='mt-3'>
              There are children raised in<br />
              unimaginable poverty. Not only are they<br />
              deprived of clean water, nutritious food,<br />
              reliable electricity and educational<br />
              opportunities... but they also lack NFTs.
            </p>
          </div>
        </div>

        <div class='flex flex-col justify-center items-center w-80 text-center'>
          <img src='./kid-circle-2.png' class='w-48' />
          <div class='mt-5'>
            <h3 class='text-xl'>They need you</h3>
            <p class='mt-3'>
              Please offer your support. Even if a<br />
              warlord steals their family’s smartphone,<br />
              you will have provided a “token” of non-<br />
              fungible support.
            </p>
          </div>
        </div>

        <div class='flex flex-col justify-center items-center w-80 text-center'>
          <img src='./kid-circle-3.png' class='w-48' />
          <div class='mt-5'>
            <h3 class='text-xl'>A bottle of hope</h3>
            <p class='mt-3'>
              Every dehydrated child can receive an<br />
              NFT of a water bottle today, if only you<br />
              can find it in your heart and crypto-<br />
              wallet to give.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}