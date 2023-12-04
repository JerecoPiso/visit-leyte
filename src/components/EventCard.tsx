import mainpicture from '../assets/island3.jpg';
import { Slide, Rotate } from 'react-awesome-reveal'
type EventCard = {
  title: String;
  description: String;
  date: String;
}
const EventCard = () => {
  return (
    <div className='group relative md:w-[28em] sm:w-full h-[23em] rounded-md'>
      <div className='absolute flex flex-col items-center hover:bg-slate-100/20 ml-2 mt-2 justify-center rounded-full bg-white/10 w-[5em] h-[5em] bg-white z-50'>
        <Rotate triggerOnce={true}>
          <p className='text-2xl text-white'>20</p>
          <p className='-mt-1 text-white'>OCT</p>
        </Rotate>

      </div>
      <div className='flex flex-col-reverse items-center absolute h-full w-full bg-gradient-to-b rounded-md from-gray-800 via-transparent to-gray-800'>
        <div className='bottom-0 pl-4 py-4 group-hover:bg-white/20 w-full'>
          <p className='text-white group-hover:text-slate-900 text-center text-base group-hover:text-xl'>79TH LEYTE GULF LANDING</p>
          <Slide direction={'up'} triggerOnce={true} className='hidden group-hover:block text-center'>
            <p className='text-sm text-slate-900'>Palo, Leyte</p>
          </Slide>
        </div>
      </div>
      <img src={mainpicture} alt="" className='h-full rounded-md' />
    </div>
  )
}
export default EventCard