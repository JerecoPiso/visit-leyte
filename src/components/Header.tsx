import { Link, useLocation } from "react-router-dom";
import logo from '../assets/visitleyte.png';
import logoWhite from '../assets/visit-leyte-white.png';
import { useEffect, useState } from 'react'
import { Slide } from "react-awesome-reveal";
import { PiCaretDownBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const path = useLocation()
  const currentPath = path.pathname;
  const [scrollY, setScrollY] = useState(Number)
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  return (
    <nav className={`z-30 flex justify-between items-center py-1 px-[3em] h-20 fixed top-0 w-full ${scrolled ? 'bg-white/70 border-b border-sky-100' : ''}`}>
      <div className="md:block hidden">
        <img src={scrolled || currentPath != '/' ? logo : logoWhite} alt="Visit Leyte " />
      </div>
      <div className="md:block hidden">
        <ul className="flex space-x-8  text-lg">
          <li><Link to="/" className={`${currentPath === "/" && scrollY <= 50 ? "text-white" : "text-sky-700"} link `}>HOME </Link></li>
          <li className="relative group">
            <Link to="javascript:void(0)" className={`${currentPath === "/" && scrollY <= 50 ? "text-white" : "text-sky-700"} link `}> DESTINATIONS <PiCaretDownBold className="mt-[0.19em] ml-1" size={12} />  </Link>
            <Slide direction={'up'} duration={400} className="absolute z-50  hidden group-hover:block w-[10em] ">
              <div className="bg-white border border-slate-200 mt-4">
                <ul className="w-full">
                  <li className="text-slate-700 hover:bg-gray-200 hover:text-slate-800"><Link to={'/beaches'} className="block text-sm p-2">Beaches</Link></li>
                  <li className="text-slate-700 hover:bg-gray-200 hover:text-slate-800"><Link to={'/landmarks'} className="block text-sm p-2">Landmarks</Link></li>
                </ul>
              </div>

            </Slide>
          </li>
          <li><Link to="/events" className={`${currentPath === "/" && scrollY <= 50 ? "text-white" : "text-sky-700"} link`}>EVENTS</Link></li>
          <li><Link to="/blog" className={`${currentPath === "/" && scrollY <= 50 ? "text-white" : "text-sky-700"} link`}>BLOG</Link></li>
          <li className="relative group">
            <a href="" className={`${currentPath === "/" && scrollY <= 50 ? "text-white" : "text-sky-700"} link`}><FaSearch size={24} /></a>
            <Slide  direction={'right'} duration={400} className="fixed left-0 w-full hidden group-hover:block z-50">
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