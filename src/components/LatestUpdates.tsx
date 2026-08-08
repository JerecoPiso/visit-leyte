import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

type LatestUpdates = {
    id: string;
    title: String;
    photo: any;
    description: String;
    delay: number;
    date?: String;
    category?: String;
}

const LatestUpdates = ({ id, title, photo, description, delay, date = "", category = "News" }: LatestUpdates) => {
    return (
        <Fade delay={delay} triggerOnce={true}>
            <Link to={`/blog/${id}`} className='flex flex-col rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white group'>
                <div className="overflow-hidden relative">
                    <img
                        src={photo}
                        alt={`${title}`}
                        className='h-[13em] w-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                    <div className='absolute top-3 left-3'>
                        <span className='bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full'>
                            {category}
                        </span>
                    </div>
                </div>
                <div className='p-5 flex flex-col flex-1'>
                    <p className='text-xs text-slate-400 mb-2 tracking-wide uppercase'>{date}</p>
                    <h3 className='font-bold text-lg text-slate-800 leading-snug'>{title}</h3>
                    <p className='text-slate-500 text-sm mt-2 leading-relaxed flex-1 line-clamp-3'>{description}</p>
                    <div className='mt-4 pt-4 border-t border-slate-100'>
                        <span className="text-sky-600 text-sm font-medium group-hover:text-sky-700 flex items-center gap-1 transition-colors">
                            Read More <span className='group-hover:translate-x-1 transition-transform inline-block'>→</span>
                        </span>
                    </div>
                </div>
            </Link>
        </Fade>
    )
}

export default LatestUpdates
