import { Fade } from "react-awesome-reveal";
type LatestUpdates = {
    title: String;
    photo: any;
    description: String;
    delay: number;

}
const LatestUpdates = ({ title, photo, description, delay }: LatestUpdates) => {
    return (
        <Fade delay={delay} triggerOnce={true}>
            <div className='flex flex-col shadow-2xl rounded-sm'>
                <div className="overflow-hidden">
                    <img src={photo} alt="" className='h-[15em] w-full rounded-sm hover:transform hover:scale-125 duration-1000' />
                </div>
                <div className='px-4 pt-4'>
                    <p className="relative font-bold text-2xl">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                        {title}
                        </span>
                    </p>
                    {/* <p className="font-bold text-2xl">{title}</p> */}
                    <p className="text-sm mt-2">{description}</p>
                </div>
                <div className="p-4 ">
                    <button type="button" className="hover-button border text-sm border-sky-600 px-3 py-2 text-sky-600 rounded-sm">READ MORE</button>
                </div>
            </div>
        </Fade>

    )
}

export default LatestUpdates