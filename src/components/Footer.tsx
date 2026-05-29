import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/visitleyte-nobg.png';

const Footer = () => {
    return (
        <footer className='bg-gradient-to-br from-slate-900 to-slate-800'>
            <div className='md:px-20 px-6 pt-14 pb-8'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 pb-10'>
                    {/* Brand */}
                    <div className="col-span-1">
                        <img src={logoWhite} alt="Visit Leyte" className='h-24 w-auto mb-4' />
                        <p className='text-slate-400 text-sm leading-relaxed'>
                            Your premier guide to exploring the beautiful province of Leyte — where history, nature, and culture converge.
                        </p>
                        <div className='flex gap-3 mt-6'>
                            <a href="#" className='w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-500 transition-colors duration-200'>
                                <FaFacebook size={16} color="white" />
                            </a>
                            <a href="#" className='w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-colors duration-200'>
                                <FaInstagram size={16} color="white" />
                            </a>
                            <a href="#" className='w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-slate-600 transition-colors duration-200'>
                                <FaXTwitter size={15} color="white" />
                            </a>
                            <a href="#" className='w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors duration-200'>
                                <FaYoutube size={18} color="white" />
                            </a>
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="col-span-1">
                        <h4 className='text-white font-semibold text-sm tracking-widest uppercase mb-5'>Explore</h4>
                        <ul className='space-y-3'>
                            {['Destinations', 'Beaches', 'Landmarks', 'Events', 'Blog'].map(item => (
                                <li key={item}>
                                    <Link to='/' className='text-slate-400 text-sm hover:text-sky-400 transition-colors flex items-center gap-2'>
                                        <span className='w-1 h-1 bg-sky-500 rounded-full'></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-span-1">
                        <h4 className='text-white font-semibold text-sm tracking-widest uppercase mb-5'>Company</h4>
                        <ul className='space-y-3'>
                            {['About Us', 'Maps', 'Partnerships', 'Terms & Conditions', 'Privacy Policy'].map(item => (
                                <li key={item}>
                                    <Link to='/' className='text-slate-400 text-sm hover:text-sky-400 transition-colors flex items-center gap-2'>
                                        <span className='w-1 h-1 bg-sky-500 rounded-full'></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1">
                        <h4 className='text-white font-semibold text-sm tracking-widest uppercase mb-5'>Contact Us</h4>
                        <div className='space-y-4'>
                            <div className='flex items-center gap-3'>
                                <div className='w-9 h-9 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0'>
                                    <FaPhoneAlt size={13} className='text-sky-400' />
                                </div>
                                <span className='text-slate-400 text-sm'>+63 951 672 8910</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='w-9 h-9 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0'>
                                    <FaEnvelope size={13} className='text-sky-400' />
                                </div>
                                <span className='text-slate-400 text-sm'>visitleyte@tourism.com</span>
                            </div>
                            <button
                                type='button'
                                className='mt-2 w-full py-2.5 rounded-xl border border-sky-500/40 text-sky-400 text-sm font-medium hover:bg-sky-500/10 transition-colors'
                            >
                                Send a Message
                            </button>
                        </div>
                    </div>
                </div>

                <div className='border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3'>
                    <p className='text-slate-500 text-sm'>© 2025 Visit Leyte. All rights reserved.</p>
                    <p className='text-slate-600 text-xs'>Powered by the Provincial Government of Leyte</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
