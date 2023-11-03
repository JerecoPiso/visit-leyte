import { Bounce } from "react-awesome-reveal";

type DestinationCardProps = {
    name: String;
    delay: number;
    photo: any,
    place: String
};
const DestinationCard = ({ name, delay, photo, place }: DestinationCardProps) => {
    return (
        <Bounce triggerOnce={true} delay={delay} className='h-full rounded-sm'>
            <div className='relative h-full group-hover group '>
                <div className='absolute bg-black-opacity h-full w-full rounded-sm'>
                    <div className="absolute bottom-3 w-full text-center ">
                        <p className='text-2xl text-gray-100 mb-2'>{name}</p>
                        <div className="hidden group-hover:block animate-bounce duration-1000">
                            <p className="text-gray-300">{place}</p>
                        </div>
                    </div>
                </div>
                <img src={photo} alt="Mc Arthur Park" className="h-full rounded-sm" />
            </div>
        </Bounce>
    )
}

export default DestinationCard