import Logo from './Logo'

export default function Footer() {
  return (
    <footer class='px-52 py-28 flex justify-between bg-black border-t-2 border-white text-white' >
      <div class=''>
        <Logo />
        <p class='mt-10 text-lg w-72'>
          They may not have food, but you can help an NFT-less child with this buy one, give one opportunity. Every child deserves an NFT.
        </p>
      </div>
      <div class='flex flex-col text-xl'>
        <h1 class='text-2xl font-semibold'>
          Marketplace
        </h1>
        <a href='/wtf' class='mt-5'>
          WTF?
        </a>
        <a href='/explore' class='mt-3'>
          Explore
        </a>
        <a href='/taps' class='mt-3'>
          TAPs
        </a>
      </div>
    </footer>
  )
}