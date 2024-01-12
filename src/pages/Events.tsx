import EventCard from "../components/EventCard"
import mainpicture from '../assets/island3.jpg';
import RecentsAndPopular from "../components/RecentsAndPopular";
import events from '../assets/events.jpg'
const Events = () => {
  return (
    <div className="mt-28">
      <div className="px-[3em] mt-10">
        <img src={events} alt="" className="h-[25em] w-full" />
        <div className='grid grid-cols-4 gap-x-6 mt-10'>
          <div className="col-span-3">
            <p className='font-bold text-2xl mt-2 text-slate-700'>LATEST</p>
            <div className="flex flex-wrap w-full gap-4 mb-16 border-t border-slate-200 mt-2 pt-3">
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>
          <div className='col-span-1'>
            <p className="uppercase font-bold text-2xl text-slate-700 mt-2 ">RECENTS</p>
            <div className='flex flex-col mt-2'>
              <RecentsAndPopular photo={mainpicture} title={'Pintados Kasadyaan'} tags={"Culture, Festival"} />
              <RecentsAndPopular photo={mainpicture} title={'Pintados Kasadyaan'} tags={"Culture, Festival"} />
              <RecentsAndPopular photo={mainpicture} title={'Pintados Kasadyaan'} tags={"Culture, Festival"} />
              <RecentsAndPopular photo={mainpicture} title={'Pintados Kasadyaan'} tags={"Culture, Festival"} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Events