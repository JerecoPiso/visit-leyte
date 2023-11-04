import { Bounce } from "react-awesome-reveal";
type LatestUpdates = {
    photo: any;
    description: String;
    delay: number;

}
const LatestUpdates = ({ photo, description, delay }: LatestUpdates) => {
    return (
        <Bounce delay={delay} triggerOnce={true}>
            <div className='flex flex-col border border-gray-200 rounded-sm'>
                <div>
                    <img src={photo} alt="" className='h-[15em] w-full rounded-sm' />
                </div>
                <div className='px-4 pt-4'>
                    {description}
                </div>
                <div className="p-4 flex">
                    <button type="button" className="hover-button border border-sky-600 px-3 py-2 text-sky-600 rounded-sm">READ MORE</button>
                </div>
            </div>
        </Bounce>

    )
}

export default LatestUpdates