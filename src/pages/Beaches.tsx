import BeachesCard from "../components/BeachesCard";
import mainpicture from '../assets/island3.jpg';
import { Fade } from 'react-awesome-reveal';

const Beaches = () => {
    const desc = "Kalanggaman Island is a sandbar located in the sea between Leyte and Cebu, in the Visayas Archipelago of the Philippines. It is located 10 kilometres west from the municipality of Palompon, Leyte."

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
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="md:w-auto w-full">
                            <BeachesCard name={"KALANGGAMAN ISLAND"} photo={mainpicture} description={desc} />
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    )
}

export default Beaches
