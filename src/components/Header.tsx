import { Link, useLocation } from "react-router-dom";
import logo from '../assets/visitleyte.png';
import { useEffect, useState } from 'react'
const Header = () => {
  const path = useLocation()
  const currentPath = path.pathname;
  const [scrollY, setScrollY] = useState(Number)
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        if(currentPath === "/"){
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
    <nav className={`flex justify-between items-center py-1 px-[3em] h-20 fixed top-0 w-full z-20 ${scrolled ? 'bg-white/70 border-b border-sky-100' : ''}`}>
      <div className="md:block hidden">
        <img src={logo} alt="Visit Leyte " />
      </div>
      <div className="md:block hidden">
        <ul className="flex space-x-4 text-lg">
           <li><Link to="/" className={`${currentPath === "/" && scrollY <= 50 ? "text-white" : "text-sky-700"} link`}>HOME </Link></li>
          <li><Link to="/beaches" className={`${currentPath === "/" && scrollY <= 50 ? "text-white" : "text-sky-700"} link`}>BEACHES</Link></li>
          <li><Link to="/landmarks" className={`${currentPath === "/" && scrollY <= 50 ? "text-white" : "text-sky-700"} link`}>LANDMARKS</Link></li>
          <li><Link to="/events" className={`${currentPath === "/" && scrollY <= 50 ? "text-white" : "text-sky-700"} link`}>EVENTS</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header