import BeachesCard from "../components/BeachesCard";
import { beaches } from "../data/beaches";
import { Fade } from 'react-awesome-reveal';

const Beaches = () => {
    return (
        <div className="pt-28 pb-20">
            {/* Page header */}
            <div className='text-center px-4 mb-12'>
                <span className='text-sky-500 text-sm font-semibold tracking-widest uppercase'>Explore</span>
                <h1 className="font-bold text-4xl md:text-5xl text-slate-800 mt-2">Beaches To Visit</h1>
                <div className='section-divider' />
                <p className='section-subtitle'>Discover Leyte's pristine coastlines and breathtaking island destinations</p>
            </div>

            <Fade cascade triggerOnce={true} damping={0.1}>
                <div className="flex flex-wrap justify-center w-full gap-6 lg:px-16 md:px-10 px-4">
                    {beaches.map((beach) => (
                        <div key={beach.id} className="md:w-auto w-full">
                            <BeachesCard id={beach.id} name={beach.name} photo={beach.photo} description={beach.description} location={beach.location} />
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    )
}

export default Beaches
