import BeachesCard from "../components/BeachesCard"
import mainpicture from '../assets/island3.jpg';

const Beaches = () => {
    const desc = "Kalanggaman Island is a sandbar located in the sea between Leyte and Cebu, in the Visayas Archipelago of the Philippines. It is located 10 kilometres west from the municipality of Palompon, Leyte. The island is an important breeding ground for the local ecosystem as well as a significant tourist attraction"
    return (
        <div className="mt-24">
            {/* <p className="relative text-center uppercase font-semibold text-4xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                    Beaches TO Visit
                </span>
            </p> */}
            <p className="text-center uppercase font-semibold text-4xl text-slate-700">Beaches TO Visit</p>
            <hr className="w-12 h-[0.4em] mx-auto mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></hr>
            <div className="flex flex-wrap justify-center w-full mt-12 gap-8 lg:px-12 md:px-8 px-4 mb-16">
                <div className="md:w-auto w-full">
                    <BeachesCard name={"KALANGGAMAN ISLAND"} photo={mainpicture} description={desc} />
                </div>
                <div className="md:w-auto w-full">
                    <BeachesCard name={"KALANGGAMAN ISLAND"} photo={mainpicture} description={desc} />
                </div>
                <div className="md:w-auto w-full">
                    <BeachesCard name={"KALANGGAMAN ISLAND"} photo={mainpicture} description={desc} />
                </div>
                <div className="md:w-auto w-full">
                    <BeachesCard name={"KALANGGAMAN ISLAND"} photo={mainpicture} description={desc} />
                </div>
                <div className="md:w-auto w-full">
                    <BeachesCard name={"KALANGGAMAN ISLAND"} photo={mainpicture} description={desc} />
                </div>
                <div className="md:w-auto w-full">
                    <BeachesCard name={"KALANGGAMAN ISLAND"} photo={mainpicture} description={desc} />
                </div>
            </div>
        </div>
    )
}

export default Beaches