export default function WTFPage() {
  return (
    <div>
      <WTFHero />
      <ExplanationSection />
    </div>
  )
}

function WTFHero() {
  return (
    <section class='flex flex-col justify-center items-center text-center text-white mt-44'>
      <h1 class='text-3xl font-semibold'>
        Treat your charity<br />
        like your investments<br />
        <a class='bg-yellow-400 text-black'>- Expect ROI</a>
      </h1>
      <p class='my-5'>
        Bringing attention to effective altruism,<br />
        and reminding you that not all charities are created equal
      </p>
      <button class="mt-4 py-3 px-8 font-bold text-xl text-black bg-yellow-400 hover:bg-yellow-500">
        Connect your wallet
      </button>
    </section>
  )
}

function ExplanationSection() {
  return (
    <section class='flex flex-col justify-center items-center text-center text-white mt-64'>
      <h1 class='text-3xl font-semibold'>
        Giving to charities<br />
        that count<br />
      </h1>
      <p class='my-8 text-xl'>
        Some “charities” manipulate emotions with imagery. This helps<br />
        fundraise, but not necessarily those in need. Treat your charity<br />
        like any other investment. Verify that your hard-earned money<br />
        benefits those in greatest need. Know what percentage of<br />
        each donation is retained vs. distributed!<br />
        <br/>
        This project brings awareness to the issue of inefficient<br />
        charities that keep most of the funds they raise internally. Let’s<br />
        help altruistic people give to the most efficient, effective<br />
        charities!<br />
        <br />
        Note: All monetary proceeds from this project will be donated<br />
        to charities deemed effective by GiveWell.<br />
      </p>
      <button class="mt-4 py-3 px-8 font-bold text-xl text-black bg-yellow-400 hover:bg-yellow-500">
        Given what we can
      </button>
    </section>
  )
}
