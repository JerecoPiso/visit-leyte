import mainpicture from '../assets/island3.jpg';

const EventCard = () => {
  return (
    <div className='group relative md:w-[31%] w-full h-[20em] rounded-2xl overflow-hidden cursor-pointer'>
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-all duration-500 group-hover:from-black/90' />

      {/* Date badge */}
      <div className='absolute top-4 left-4 z-20 bg-white rounded-xl overflow-hidden shadow-lg w-14 text-center'>
        <div className='bg-gradient-to-r from-sky-500 to-blue-600 py-1'>
          <p className='text-white text-[10px] font-bold tracking-widest uppercase'>Oct</p>
        </div>
        <p className='text-slate-800 text-lg font-bold py-1'>20</p>
      </div>

      {/* Category tag */}
      <div className='absolute top-4 right-4 z-20'>
        <span className='bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/30'>
          Festival
        </span>
      </div>

      {/* Content */}
      <div className='absolute bottom-0 left-0 right-0 z-20 p-5'>
        <p className='text-white font-bold text-lg leading-tight'>79th Leyte Gulf Landing</p>
        <p className='text-slate-300 text-sm mt-1 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
          Palo, Leyte
        </p>
        <div className='mt-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75'>
          <button className='text-sky-300 text-xs font-medium border border-sky-400/50 px-4 py-1.5 rounded-full hover:bg-sky-500/20 transition-colors'>
            View Event
          </button>
        </div>
      </div>

      <img src={mainpicture} alt="" className='h-full w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700' />
    </div>
  )
}

export default EventCard
