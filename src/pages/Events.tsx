import EventCard from "../components/EventCard"
import mainpicture from '../assets/island3.jpg';
import RecentsAndPopular from "../components/RecentsAndPopular";
import events from '../assets/events.jpg'

const Events = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="md:px-16 px-4">

        {/* Page header */}
        <div className='mb-10'>
          <span className='text-sky-500 text-sm font-semibold tracking-widest uppercase'>What's Happening</span>
          <h1 className='font-bold text-4xl md:text-5xl text-slate-800 mt-2'>Events in Leyte</h1>
        </div>

        {/* Hero image */}
        <div className='relative rounded-2xl overflow-hidden'>
          <img src={events} alt="Events" className="h-[28em] w-full object-cover" />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
          <div className='absolute bottom-6 left-6'>
            <span className='bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full'>
              Featured Event
            </span>
            <h2 className='text-white text-3xl font-bold mt-2'>79th Leyte Gulf Landing</h2>
            <p className='text-slate-300 text-sm mt-1'>October 20 · Palo, Leyte</p>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-x-8 mt-12'>
          {/* Events list */}
          <div className="md:col-span-3 col-span-4">
            <div className='flex items-center justify-between mb-6'>
              <h2 className='font-bold text-2xl text-slate-800'>Latest Events</h2>
              <span className='text-sky-500 text-sm font-medium cursor-pointer hover:text-sky-600'>View All →</span>
            </div>
            <div className="flex flex-wrap w-full gap-5 border-t border-slate-100 pt-6">
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>

          {/* Sidebar */}
          <div className='md:col-span-1 col-span-4 mt-8 md:mt-0'>
            <h2 className="font-bold text-xl text-slate-800 mb-4 pb-3 border-b border-slate-100">Recent Events</h2>
            <div className='flex flex-col gap-1'>
              <RecentsAndPopular photo={mainpicture} title={'Pintados Kasadyaan'} tags={"Culture · Festival"} />
              <RecentsAndPopular photo={mainpicture} title={'Sinulog sa Leyte'} tags={"Heritage · Festival"} />
              <RecentsAndPopular photo={mainpicture} title={'Leyte Golf Cup'} tags={"Sports · Tourism"} />
              <RecentsAndPopular photo={mainpicture} title={'Kasadyaan Festival'} tags={"Culture · Music"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
