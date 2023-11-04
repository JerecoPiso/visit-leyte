import sanjuanico from '../assets/San_Juanico_Bridge.jpg';
import whytravel from '../assets/WHYTRAVEL.png';
import mcarthur from '../assets/MCARTHUR.jpg';
import kalanggaman from '../assets/KALANGGAMAN.jpg';
import DestinationCard from '../components/DestinationCard';
import LatestUpdates from '../components/LatestUpdates';
import mainpicture from '../assets/mainpicture.png';
// import beach from '../assets/beach.jpg'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/visit-leyte-white.png';
import { Slide } from 'react-awesome-reveal'
const Home = () => {
    return (
        <>
            <div>
                <img src={mainpicture} alt="San Juanico Bridge" className='h-[85vh] w-full' />
            </div>
            <div className='mb-8 '>
                <p className='section-title'>TOP DESTINATION</p>
                <hr className="w-12 h-[0.4em] mx-auto mt-4 bg-gray-300 border-0 rounded"></hr>
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
                <div className="md:col-span-1 col-span-2">
                    <Slide direction={'left'} delay={200} triggerOnce={true} className='relative  flex flex-col items-center justify-center'>
                        <p className='text-3xl text-sky-600'>BEACHES</p>
                        <p className='mt-3 text-lg text-center'>Discover the beauty of our pristine beaches, where golden sands meet crystal-clear waters for an unforgettable experience</p>
                        <button type='button' className='hover-button mt-4 px-6 py-2 rounded-sm border border-sky-600 text-sky-600'>EXPLORE</button>
                    </Slide>
                </div>
                <div className="md:col-span-1 col-span-2">
                    <Slide direction={'right'} delay={200} triggerOnce={true}>
                        <img src={whytravel} alt="" className='w-full h-[20em] rounded-sm' />
                    </Slide>

                </div>
            </div>
            <div className='grid grid-cols-2 items-center w-full mt-16 px-20 gap-8'>
                <div className="md:col-span-1 col-span-2">
                    <Slide direction={'left'} delay={200} triggerOnce={true}>
                        <img src={whytravel} alt="" className='w-full h-[20em] rounded-sm' />
                    </Slide>
                </div>
                <div className="md:col-span-1 col-span-2">
                    <Slide direction={'right'} delay={200} triggerOnce={true} className='relative flex flex-col items-center justify-center'>
                        <p className='text-3xl text-sky-600'>LANDMARKS</p>
                        <p className='mt-3 text-lg text-center'>Join us in exploring our remarkable landmarks, each a testament to history and culture, offering unforgettable experiences for all who visit.</p>
                        <button type='button' className='hover-button mt-4 px-6 py-2 rounded-sm border border-sky-600 text-sky-600'>EXPLORE</button>
                    </Slide>
                </div>
            </div>
            <div>
                <p className='section-title'>LATEST UPDATES</p>
                <hr className="w-12 h-[0.4em] mx-auto mt-4 bg-gray-300 border-0 rounded"></hr>
                <div className='flex flex-wrap justify-center w-full max-h-auto mt-16 mb-8 px-20 gap-8 min-h-[20em]'>
                    <div className="md:flex-1">
                        <LatestUpdates photo={mcarthur} delay={300} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil voluptas reprehenderit asperiores sunt quo labore, sequi obcaecati accusamus. Mollitia culpa architecto, corrupti deleniti ex fugiat quia accusamus cupiditate fugit."} />
                    </div>
                    <div className="md:flex-1">
                        <LatestUpdates photo={mcarthur} delay={500} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil voluptas reprehenderit asperiores sunt quo labore, sequi obcaecati accusamus. Mollitia culpa architecto, corrupti deleniti ex fugiat quia accusamus cupiditate fugit."} />
                    </div>
                    <div className="md:flex-1">
                        <LatestUpdates photo={mcarthur} delay={700} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil voluptas reprehenderit asperiores sunt quo labore, sequi obcaecati accusamus. Mollitia culpa architecto, corrupti deleniti ex fugiat quia accusamus cupiditate fugit."} />
                    </div>
                </div>
            </div>
            {/* <div className='relative w-full h-[25em] mt-16'>
                <img src={beach} alt="" className='absolute w-full h-[25em]' />
                <form className='flex items-center absolute h-full bg-black/15 w-full left-auto pl-20'>
                    <div className='w-[40em]'>
                        <label htmlFor="email" className='text-white text-2xl '>EMAIL US FOR INQUIRIES</label>
                        <div className='flex gap-2'>
                            <input type="text" id='email' placeholder='Enter you email . . .' className='w-full placeholder:text-white block bg-transparent border border-white text-white focus:outline-none focus:ring-transparent focus:border-white' />
                            <button type='submit' className='px-4 py-2 bg-sky-600 text-white'>SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div> */}
            <div className='px-6 pb-6 pt-4 bg-sky-600'>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 p-4'>
                    <div className="col-span-1 ">
                        <img src={logoWhite} alt="San Juanico Bridge" className='w-fit h-fit' />
                    </div>
                    <div className="col-span-1 mt-3">
                        <ul className='space-y-3 text-white'>
                            <li><Link to={'/'}>Maps</Link></li>
                            <li><Link to={'/'}>Partnerships</Link></li>
                            <li><Link to={'/'}>Destinations</Link></li>
                            <li><Link to={'/'}>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1 mt-3">
                        <ul className='space-y-3 text-white'>
                            <li><Link to={'/'}>About Us</Link></li>
                            <li><Link to={'/'}>Terms and Conditions</Link></li>
                            <li><Link to={'/'}>Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1 space-y-3 text-white mt-3">
                        <button type='button' className='border border-white w-full rounded-sm py-2'>CONTACT US</button>
                        <p>+639516728910</p>
                        <p>visitleyte@tourism.com</p>
                    </div>
                </div>
                <hr className="my-8 bg-white opacity-50 border-1"></hr>
                <div className='flex justify-center items-center gap-3'>
                    <FaFacebook size={30} color="white" />
                    <FaInstagram size={30} color="white" />
                    <FaXTwitter size={30} color="white" />
                    <FaYoutube size={37} color="white" />
                </div>
                <p className='text-white text-center mt-4'>@ Copyright 2023 All rights reserved </p>
            </div>
        </>
    )
}
export default Home;