import Image from 'next/image'
import bgImg from './images/pattern-background-desktop.svg'
import bgImgMobile from './images/pattern-background-mobile.svg'
import heroImg from './images/illustration-hero.svg'
import musicIcon from './images/icon-music.svg'

function Home() {
  return (
    <div className='bg-[hsl(225,100%,94%)] w-full min-h-screen relative flex items-center justify-center'>
      <section className='w-full absolute z-10 top-0 left-0'>
        <Image src={bgImg} alt='bg-desktop' className='w-full hidden sm:flex' />
        <Image
          src={bgImgMobile}
          alt='bg-mobile'
          className='w-full h-auto sm:hidden'
        />
      </section>

      <main className='relative z-20 max-w-[350px] rounded-xl overflow-hidden mx-auto bg-white flex flex-col items-center '>
        <Image src={heroImg} alt='hero-img' className='' />
        <section className='flex flex-col items-center text-center px-5 gap-5 pt-10 pb-8'>
          <h2 className='text-3xl font-bold text-slate-800'>Order Summary</h2>

          <div className='flex flex-col items-center text-center gap-5'>
            <p className='text-gray-500 text-sm px-5'>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
            <article className='w-full px-3 flex items-center justify-between text-sm '>
              <div className='flex gap-2'>
                <Image src={musicIcon} alt='icon' />
                <div className='flex flex-col gap-[2px]'>
                  <h4 className='font-bold text-base'>Annual Page</h4>
                  <span className='text-gray-500 text-left'>$59.99/year</span>
                </div>
              </div>
              <button className='text-violet-800 font-medium underline cursor-pointer hover:opacity-80 hover:no-underline'>
                Change
              </button>
            </article>
          </div>

          <div className='w-full flex flex-col gap-4 pt-5 text-sm font-semibold'>
            <button className='bg-blue-700 w-full py-2 rounded-md text-white shadow-2xl hover:opacity-60'>
              Proceed to Payment
            </button>
            <button className='text-gray-600 hover:text-gray-950'>Cancel Order</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
