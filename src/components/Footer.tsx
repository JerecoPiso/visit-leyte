import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/visit-leyte-white.png';
const Footer = () => {
    return (
        <div className='px-6 pb-6 pt-4 bg-sky-600'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 p-4'>
                <div className="col-span-1 ">
                    <img src={logoWhite} alt="San Juanico Bridge" className='w-fit h-fit md:ml-4 ml-0' />
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
    )
}

export default Footer