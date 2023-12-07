import { MdLocationOn } from "react-icons/md";
type LandmarksInfo = {
    name: String;
    photo: any;
    description: String;
};
const LandmarksCard = ({ name, photo }: LandmarksInfo) => {
    return (
        <div className="group group-hover hover:shadow-2xl rounded-md h-full md:w-[20em] sm:w-full ">
            <div className="flex flex-col shadow-2xl h-auto rounded-md">
                <div className="relative overflow-hidden rounded-md ">
                    <div className="absolute bg-black-opacity  rounded-md h-full w-full flex flex-col-reverse z-20">
                        <p className="ml-2 mb-3 bottom-0 flex items-center text-white ="><MdLocationOn size={23} color={'#ffffff'} /> <span className="ml-1 text-base font-light">Palompon, Leyte</span></p>
                    </div>
                    <img src={photo} alt="" className="group-hover:scale-125 group-hover:transform duration-1000 rounded-md h-[13em] w-full z-10" />
                </div>
                <div className="p-4">
                    <p className="text-base font-semibold text-slate-600">{name}</p>
                </div>
            </div>
        </div>
    )
}

export default LandmarksCard