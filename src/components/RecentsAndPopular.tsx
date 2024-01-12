type RecentsAndPopular = {
    title: String;
    tags: String;
    photo: any
}
const RecentsAndPopular = ({ title, tags, photo }: RecentsAndPopular) => {
    return (
        <div className='flex border-t border-slate-200 w-full py-3 gap-x-2'>
            <div className=''>
                <img src={photo} alt="" className="h-[5em] w-[6em] rounded-sm" />
            </div>
            <div>
                <p className='text-slate-700 text-base'>{ title }</p>
                <p className='text-slate-400 text-xs'>{ tags }</p>
            </div>
        </div>
    )
}
export default RecentsAndPopular