import sanjuanico from '../assets/San_Juanico_Bridge.jpg';
import whytravel from '../assets/WHYTRAVEL.png';
import mcarthur from '../assets/MCARTHUR.jpg';
import kalanggaman from '../assets/KALANGGAMAN.jpg';
import DestinationCard from '../components/DestinationCard';
const Home = () => {
    return (
        <>
            <div>
                <img src={sanjuanico} alt="San Juanico Bridge" className='h-[70vh] w-full' />
            </div>
            <div className='mb-8 '>
                <p className='section-title'>TOP DESTINATION</p>
                {/* <div className='grid grid-cols-3 w-full mt-16 px-20 gap-8 h-[20em]'>
                    <div className='col-span-1'>
                        <DestinationCard name={"McArthur Park"} delay={300} photo={mcarthur} place={"Brgy. Candahug Palo Leyte"} />
                    </div>
                    <div className='col-span-1'>
                        <DestinationCard name={"Kalanggaman Island"} delay={500} photo={kalanggaman} place={"Palompon Leyte"} />
                    </div>
                    <div className='col-span-1'>
                        <DestinationCard name={"San Juanico Bridge"} delay={500} photo={sanjuanico} place={"Leyte and Samar"} />
                    </div>
                </div> */}
                <div className='flex flex-wrap justify-center w-full max-h-auto mt-16 px-20 gap-8 min-h-[20em]'>
                    <div className='md:flex-1'>
                        <DestinationCard name={"McArthur Park"} delay={300} photo={mcarthur} place={"Brgy. Candahug Palo Leyte"} />
                    </div>
                    <div className='md:flex-1'>
                        <DestinationCard name={"Kalanggaman Island"} delay={500} photo={kalanggaman} place={"Palompon Leyte"} />
                    </div>
                    <div className='md:flex-1'>
                        <DestinationCard name={"San Juanico Bridge"} delay={700} photo={sanjuanico} place={"Leyte and Samar"} />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 items-center w-full mt-24 px-20 gap-8'>
                <div className="md:col-span-1 col-span-2 flex flex-col items-center justify-center">
                    <p className='text-3xl text-sky-600'>BEACHES</p>
                    <p className='mt-3 text-lg text-center'>Discover the beauty of our pristine beaches, where golden sands meet crystal-clear waters for an unforgettable experience</p>
                    <button type='button' className='mt-4 px-6 py-2 rounded-sm border border-sky-600 text-sky-600'>EXPLORE</button>
                </div>
                <div className="md:col-span-1 col-span-2">
                    <img src={whytravel} alt="" className='w-full h-[20em] rounded-sm' />
                </div>
            </div>
            <div className='grid grid-cols-2 items-center w-full mt-16 px-20 gap-8'>
                <div className="md:col-span-1 col-span-2">
                    <img src={whytravel} alt="" className='w-full h-[20em] rounded-sm' />
                </div>
                <div className="md:col-span-1 col-span-2  flex flex-col items-center justify-center">
                    <p className='text-3xl text-sky-600'>LANDMARKS</p>
                    <p className='mt-3 text-lg text-center'>Join us in exploring our remarkable landmarks, each a testament to history and culture, offering unforgettable experiences for all who visit.</p>
                    <button type='button' className='mt-4 px-6 py-2 rounded-sm border border-sky-600 text-sky-600'>EXPLORE</button>
                </div>
            </div>
            <div>
                <p className='section-title'>LATEST UPDATES</p>
                <div className=''>

                </div>
            </div>
        </>
    )
}
export default Home;