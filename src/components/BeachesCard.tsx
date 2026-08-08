import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

type BeachesInfo = {
    id: string;
    name: String;
    photo: any;
    description: String;
    location?: String;
}

const BeachesCard = ({ id, name, photo, description, location = "Leyte" }: BeachesInfo) => {
    return (
        <Link to={`/beaches/${id}`} className="group md:w-[22em] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 block">
            <div className="relative overflow-hidden">
                <img
                    src={photo}
                    alt={`${name}`}
                    className="group-hover:scale-110 transition-transform duration-700 h-[14em] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-1">
                    <MdLocationOn size={16} className='text-sky-300' />
                    <span className="text-white/90 text-xs font-light">{location}</span>
                </div>
                <div className='absolute top-3 right-3'>
                    <span className='bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/30'>
                        Beach
                    </span>
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-base font-bold text-slate-800">{name}</h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed line-clamp-2">{description}</p>
                <span className="mt-4 text-sky-600 text-sm font-medium group-hover:text-sky-700 flex items-center gap-1 transition-colors">
                    Explore <span>→</span>
                </span>
            </div>
        </Link>
    )
}

export default BeachesCard;
