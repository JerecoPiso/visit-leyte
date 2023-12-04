import { MdLocationOn } from "react-icons/md";
type LandmarksInfo = {
    name: String;
    photo: any;
    description: String;
};
const LandmarksCard = ({ name, photo }: LandmarksInfo) => {
    return (
        <div className="hover:shadow-2xl hover:rounded-md h-full md:w-[20em] sm:w-full">
            <div className="flex flex-col border border-slate-300 h-auto rounded-md">
                <div className="relative">
                    <div className="absolute bg-black-opacity rounded-md h-full w-full flex flex-col-reverse">
                        <p className="ml-2 mb-3 bottom-0 flex items-center text-white"><MdLocationOn size={23} color={'#ffffff'} /> <span className="ml-1 text-base font-light">Palo, Leyte</span></p>
                    </div>
                    <img src={photo} alt="" className="rounded-md h-[13em] w-full" />
                </div>
                <div className="p-4">
                    <p className="text-base font-semibold text-slate-600">{name}</p>
                </div>
            </div>
        </div>
    )
}

export default LandmarksCard