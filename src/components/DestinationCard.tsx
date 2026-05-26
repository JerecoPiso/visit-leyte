import { Zoom } from "react-awesome-reveal";
import { MdLocationOn } from "react-icons/md";

type DestinationCardProps = {
    name: String;
    delay: number;
    photo: any;
    place: String;
};

const DestinationCard = ({ name, delay, photo, place }: DestinationCardProps) => {
    return (
        <Zoom triggerOnce={true} delay={delay} className='h-full overflow-hidden rounded-2xl'>
            <div className='relative h-full group cursor-pointer overflow-hidden rounded-2xl shadow-lg'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10 transition-all duration-500 group-hover:from-black/80' />
                <div className='absolute bottom-0 left-0 right-0 z-20 p-5'>
                    <p className='text-xl font-semibold text-white leading-tight'>{name}</p>
                    <div className='flex items-center gap-1 mt-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
                        <MdLocationOn size={16} className='text-sky-300 flex-shrink-0' />
                        <p className='text-sky-200 text-sm'>{place}</p>
                    </div>
                    <div className='mt-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75'>
                        <span className='text-xs text-white/80 border border-white/30 px-3 py-1 rounded-full'>View Details →</span>
                    </div>
                </div>
                <img
                    src={photo}
                    alt={`${name}`}
                    className='h-full w-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700'
                />
            </div>
        </Zoom>
    )
}

export default DestinationCard
