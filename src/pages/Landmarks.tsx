import LandmarksCard from "../components/LandmarksCard"
import { landmarks } from "../data/landmarks";
import { Fade } from 'react-awesome-reveal';

const Landmarks = () => {
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
                    {landmarks.map((landmark) => (
                        <div key={landmark.id} className="md:w-auto w-full">
                            <LandmarksCard id={landmark.id} name={landmark.name} photo={landmark.photo} description={landmark.description} location={landmark.location} />
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    )
}

export default Landmarks
