type RecentsAndPopular = {
    title: String;
    tags: String;
    photo: any
}

const RecentsAndPopular = ({ title, tags, photo }: RecentsAndPopular) => {
    return (
        <div className='flex border-b border-slate-100 w-full py-3 gap-3 group cursor-pointer hover:bg-slate-50 transition-colors rounded-lg px-2'>
            <div className='flex-shrink-0'>
                <img
                    src={photo}
                    alt={`${title}`}
                    className="h-[4.5em] w-[5.5em] rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-slate-800 text-sm font-semibold leading-snug group-hover:text-sky-600 transition-colors'>{title}</p>
                <p className='text-sky-500 text-xs mt-1 font-medium'>{tags}</p>
            </div>
        </div>
    )
}

export default RecentsAndPopular
