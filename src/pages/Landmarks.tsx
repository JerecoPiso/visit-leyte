import LandmarksCard from "../components/LandmarksCard"
import mcarthur from '../assets/MCARTHUR.jpg';

const Landmarks = () => {
    const desc = "Kalanggaman Island is a sandbar located in the sea between Leyte and Cebu, in the Visayas Archipelago of the Philippines. It is located 10 kilometres west from the municipality of Palompon, Leyte. The island is an important breeding ground for the local ecosystem as well as a significant tourist attraction"
    return (
        <div className="mt-24">
            <p className="text-center uppercase font-semibold text-3xl text-gray-500">Explore the Secret Landmarks of Leyte</p>
            <div className="flex flex-wrap justify-center w-full mt-12 gap-8 lg:px-12 md:px-8 px-4 mb-16">
                <div className="">
                    <LandmarksCard name={"McArthur Park"} photo={mcarthur} description={desc} />
                </div>
                <div className="">
                    <LandmarksCard name={"McArthur Park"} photo={mcarthur} description={desc} />
                </div>
                <div className="">
                    <LandmarksCard name={"McArthur Park"} photo={mcarthur} description={desc} />
                </div>
                <div className="">
                    <LandmarksCard name={"McArthur Park"} photo={mcarthur} description={desc} />
                </div>
                <div className="">
                    <LandmarksCard name={"McArthur Park"} photo={mcarthur} description={desc} />
                </div>
                <div className="">
                    <LandmarksCard name={"McArthur Park"} photo={mcarthur} description={desc} />
                </div>
            </div>
        </div>
    )
}
export default Landmarks