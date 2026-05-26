import sanjuanico from '../assets/San_Juanico_Bridge.jpg';
import whytravel from '../assets/WHYTRAVEL.png';
import landmarks from '../assets/landmarks.jpg';
import mcarthur from '../assets/MCARTHUR.jpg';
import kalanggaman from '../assets/KALANGGAMAN.jpg';
import DestinationCard from '../components/DestinationCard';
import LatestUpdates from '../components/LatestUpdates';
import mainpicture from '../assets/island3.jpg';
import { useEffect, useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import { Link } from 'react-router-dom';

const stats = [
  { value: '50+', label: 'Destinations' },
  { value: '12', label: 'Festivals Yearly' },
  { value: '1M+', label: 'Visitors Annually' },
  { value: '100%', label: 'Natural Wonders' },
];

const Home = () => {
  const [size, setSize] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth)
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <>
      {/* Hero */}
      <div className='relative h-screen min-h-[600px]'>
        <div className='hero-gradient absolute inset-0 z-10' />
        <div className='z-20 absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center px-6 md:px-20 pb-20 md:pb-0'>
          <Fade cascade triggerOnce={true}>
            <span className='text-sky-300 text-sm font-semibold tracking-[0.3em] uppercase mb-3 block'>
              Welcome to Leyte
            </span>
            <h1 className='text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-2xl'>
              <Fade cascade={size > 768} triggerOnce={true} duration={80} delay={100}>
                Discover Leyte
              </Fade>
              <br />
              <span className='text-sky-300'>
                <Fade cascade={size > 768} triggerOnce={true} duration={80} delay={300}>
                  Where Adventure
                </Fade>
              </span>
              <br />
              <Fade cascade={size > 768} triggerOnce={true} duration={80} delay={500}>
                Meets Tranquility
              </Fade>
            </h1>
            <Fade triggerOnce={true} delay={1500}>
              <p className='text-slate-300 mt-4 text-base max-w-md leading-relaxed'>
                Explore pristine beaches, historic landmarks, and vibrant culture in the heart of the Philippines.
              </p>
              <div className='flex gap-4 mt-8'>
                <button className="btn-primary text-base px-8 py-3">
                  Explore Now
                </button>
                <button className="px-8 py-3 border border-white/40 text-white text-base font-medium rounded-full hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </Fade>
          </Fade>
        </div>
        <img src={mainpicture} alt="Leyte Island" className='h-full w-full object-cover' />
      </div>

      {/* Stats bar */}
      <div className='bg-gradient-to-r from-sky-600 to-blue-700 py-8 px-6'>
        <div className='max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6'>
          {stats.map((stat, i) => (
            <Fade key={i} triggerOnce={true} delay={i * 100}>
              <div className='text-center text-white'>
                <p className='text-3xl font-bold'>{stat.value}</p>
                <p className='text-sky-200 text-sm mt-1 tracking-wide'>{stat.label}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      {/* Top Destinations */}
      <section className='py-20 bg-slate-50'>
        <p className='section-title'>Top Destinations</p>
        <div className='section-divider' />
        <p className='section-subtitle'>Handpicked places that define the beauty and soul of Leyte</p>
        <div className='flex flex-wrap justify-center w-full mt-12 lg:px-20 md:px-14 px-4 gap-6'>
          <div className='md:flex-1 min-w-[260px] h-[22em]'>
            <DestinationCard name={"McArthur Park"} delay={200} photo={mcarthur} place={"Brgy. Candahug, Palo Leyte"} />
          </div>
          <div className='md:flex-1 min-w-[260px] h-[22em]'>
            <DestinationCard name={"Kalanggaman Island"} delay={350} photo={kalanggaman} place={"Palompon, Leyte"} />
          </div>
          <div className='md:flex-1 min-w-[260px] h-[22em]'>
            <DestinationCard name={"San Juanico Bridge"} delay={500} photo={sanjuanico} place={"Leyte and Samar"} />
          </div>
        </div>
      </section>

      {/* Beaches promo */}
      <section className='py-20 lg:px-20 md:px-14 px-6'>
        <div className='grid grid-cols-2 items-center gap-12'>
          <div className="md:col-span-1 col-span-2">
            <Slide direction='left' triggerOnce={true}>
              <span className='text-sky-500 text-sm font-semibold tracking-widest uppercase'>Explore</span>
              <h2 className='text-4xl font-bold text-slate-800 mt-2 leading-tight'>Beautiful<br />Beaches</h2>
              <p className='mt-4 text-slate-500 text-base leading-relaxed max-w-sm'>
                Discover pristine beaches where golden sands meet crystal-clear waters for an unforgettable tropical escape.
              </p>
              <div className='flex gap-3 mt-6'>
                <Link to='/beaches' className='btn-primary'>Explore Beaches</Link>
              </div>
            </Slide>
          </div>
          <div className="md:col-span-1 col-span-2">
            <Slide direction='right' triggerOnce={true}>
              <div className='relative'>
                <img src={whytravel} alt="Beaches" className='w-full h-[24em] object-cover rounded-2xl shadow-xl' />
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-t from-sky-900/20 to-transparent' />
              </div>
            </Slide>
          </div>
        </div>
      </section>

      {/* Landmarks promo */}
      <section className='py-20 lg:px-20 md:px-14 px-6 bg-slate-50'>
        <div className='grid grid-cols-2 items-center gap-12'>
          <div className="md:col-span-1 col-span-2 order-2 md:order-1">
            <Slide direction='left' triggerOnce={true}>
              <div className='relative'>
                <img src={landmarks} alt="Landmarks" className='w-full h-[24em] object-cover rounded-2xl shadow-xl' />
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/20 to-transparent' />
              </div>
            </Slide>
          </div>
          <div className="md:col-span-1 col-span-2 order-1 md:order-2">
            <Slide direction='right' triggerOnce={true}>
              <span className='text-sky-500 text-sm font-semibold tracking-widest uppercase'>Discover</span>
              <h2 className='text-4xl font-bold text-slate-800 mt-2 leading-tight'>Historic<br />Landmarks</h2>
              <p className='mt-4 text-slate-500 text-base leading-relaxed max-w-sm'>
                Walk through history and culture at Leyte's remarkable landmarks, each telling a story of resilience and heritage.
              </p>
              <div className='flex gap-3 mt-6'>
                <Link to='/landmarks' className='btn-primary'>Explore Landmarks</Link>
              </div>
            </Slide>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className='py-20'>
        <p className='section-title'>Latest Updates</p>
        <div className='section-divider' />
        <p className='section-subtitle'>Stay informed with the latest news, events, and stories from Leyte</p>
        <div className='flex flex-wrap justify-center w-full mt-12 mb-8 lg:px-20 md:px-14 px-6 gap-6'>
          <div className="md:flex-1 min-w-[260px]">
            <LatestUpdates title={'Leyte Gulf Landing'} photo={mcarthur} delay={200} description={"Join us as we commemorate the historic Leyte Gulf Landing, a pivotal moment in Philippine and World War II history."} />
          </div>
          <div className="md:flex-1 min-w-[260px]">
            <LatestUpdates title={'Pintados Festival'} photo={kalanggaman} delay={350} description={"Experience the vibrant colors and cultural pride of the Pintados-Kasadyaan Festival, celebrating Leyte's rich heritage."} />
          </div>
          <div className="md:flex-1 min-w-[260px]">
            <LatestUpdates title={'Island Adventures'} photo={sanjuanico} delay={500} description={"Discover new island hopping routes and adventure packages across Leyte's stunning coastal destinations."} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
