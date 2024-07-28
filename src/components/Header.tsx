import { Link, useLocation } from "react-router-dom";
import logo from '../assets/visitleyte.png';
import logoWhite from '../assets/visit-leyte-white.png';
import { useEffect, useState } from 'react'
import { Bounce, Slide } from "react-awesome-reveal";
import { PiCaretDownBold } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { FaSearch } from "react-icons/fa";
const Header = () => {
  const path = useLocation()
  const currentPath = path.pathname;
  const [size, setSize] = useState(window.innerWidth)
  const [scrollY, setScrollY] = useState(Number)
  const [isHidden, setIsHidden] = useState(window.innerWidth <= 768);
  const toggleHidden = () => {
    setIsHidden(prevIsHidden => !prevIsHidden);
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
      setIsHidden(window.innerWidth <= 768 ? true : false)
    }
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        if (currentPath === "/") {
          setScrollY(51)
        }
        setScrolled(true);
      } else {
        setScrollY(50)
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
   
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    <nav className={`z-30 flex justify-between items-center py-1 px-[3em] md:h-20 h-fit fixed top-0 w-full ${scrolled && size > 768 ? 'bg-white border-b border-sky-100' : ''}`}>
      <div className="md:block hidden">
        <img src={scrolled || currentPath != '/' ? logo : logoWhite} alt="Visit Leyte " />
      </div>
      <div className="md:block">
      {/* md:bg-transparent bg-white/70 */}
        <button type="button" onClick={toggleHidden} className='z-40 xl:hidden bg-white text-sky-700 p-[4px] rounded-sm fixed right-2 top-1 lg:hidden md:hidden block'>
           {
            isHidden ? <FaBars size={28} /> : <IoMdClose size={28} />

           }
        </button>
      
        <ul className={`flex md:flex-row flex-col items-center md:space-x-8 text-lg md:bg-transparent bg-white  md:mt-0 md:pb-0 pb-2 md:space-y-0 space-y-2 space-x-2 left-0 md:static fixed top-0 w-full ${isHidden ? 'hidden' : ''}`} >
          <li className="md:pl-0 pl-2 md:pt-0 pt-2"><Link to="/" className={`${currentPath === "/" && scrollY <= 50 && size > 768 ? "text-white" : "text-sky-700"} link `}>HOME</Link></li>
          <li className="relative group">
            <Link to="javascript:void(0)" className={`${currentPath === "/" && scrollY <= 50 && size > 768 ? "text-white" : "text-sky-700"} link `}> DESTINATIONS <PiCaretDownBold className="mt-[0.19em] ml-1" size={12} />  </Link>
            <Slide direction={'up'} duration={400} className="absolute z-50  hidden group-hover:block w-[10em] ">
              <div className="bg-white border border-slate-200 mt-4">
                <ul className="w-full">
                  <li className="text-slate-700 hover:bg-gray-200 hover:text-slate-800"><Link to={'/beaches'} className="block text-sm p-2">Beaches</Link></li>
                  <li className="text-slate-700 hover:bg-gray-200 hover:text-slate-800"><Link to={'/landmarks'} className="block text-sm p-2">Landmarks</Link></li>
                </ul>
              </div>
            </Slide>
          </li>
          <li><Link to="/events" className={`${currentPath === "/" && scrollY <= 50 && size > 768 ? "text-white" : "text-sky-700"} link`}>EVENTS</Link></li>
          <li><Link to="/blog" className={`${currentPath === "/" && scrollY <= 50 && size > 768 ? "text-white" : "text-sky-700"} link`}>BLOG</Link></li>
          <li className="relative group">
            <a href="" className={`${currentPath === "/" && scrollY <= 50 && size > 768 ? "text-white" : "text-sky-700"} link`}><FaSearch size={24} /></a>
            <Slide direction={'right'} duration={400} className="fixed left-0 w-full hidden group-hover:block z-50">
              <div className="bg-white border border-slate-200 mt-4 p-12">
                <label htmlFor="" className="font-bold">Search</label>
                <input type="text" className="block w-full p-3 mt-2 border border-slate-200 hover:ring-slate-300 focus:border-slate-300" placeholder="Type in keyword" />
              </div>
            </Slide>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header