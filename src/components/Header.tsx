import { Link, useLocation  } from "react-router-dom";
import logo from '../assets/visitleyte.png';
const Header = () => {
  const path = useLocation()
  const linkColor = path.pathname === "/" ? "text-white" : "text-sky-700"
  return (
    <nav className="flex justify-between items-center py-1 px-[3em] h-20 fixed top-0 w-full z-20">
      <div>
        <img src={logo} alt="Visit Leyte"/>
      </div>
      <div className="md:block hidden">
        <ul className="flex space-x-4 text-lg">
          <li><Link to="/" className={linkColor+' link'}>HOME </Link></li>
          <li><Link to="/beaches" className={linkColor+' link'}>BEACHES</Link></li>
          <li><Link to="/landmarks" className={linkColor+' link'}>LANDMARKS</Link></li>
          <li><Link to="/events" className={linkColor+' link'}>EVENTS</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header