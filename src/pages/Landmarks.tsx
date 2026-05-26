import LandmarksCard from "../components/LandmarksCard"
import mcarthur from '../assets/MCARTHUR.jpg';
import { Fade } from 'react-awesome-reveal';

const Landmarks = () => {
    const desc = "MacArthur Park commemorates General Douglas MacArthur's historic landing on the shores of Palo, Leyte — a pivotal moment that turned the tide of World War II in the Pacific. The park features iconic statues and monuments that draw visitors from around the world."

    return (
        <div className="pt-28 pb-20">
            {/* Page header */}
            <div className='text-center px-4 mb-12'>
                <span className='text-sky-500 text-sm font-semibold tracking-widest uppercase'>Discover</span>
                <h1 className="font-bold text-4xl md:text-5xl text-slate-800 mt-2">Landmarks To Visit</h1>
                <div className='section-divider' />
                <p className='section-subtitle'>Walk through history at Leyte's most iconic and significant landmarks</p>
            </div>

            <Fade cascade triggerOnce={true} damping={0.1}>
                <div className="flex flex-wrap justify-center w-full gap-6 lg:px-16 md:px-10 px-4">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="md:w-auto w-full">
                            <LandmarksCard name={"McArthur Park"} photo={mcarthur} description={desc} />
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    )
}

export default Landmarks
