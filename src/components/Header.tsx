import { Link } from "react-router-dom";
import logo from '../assets/visitleyte.png';
const Header = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-[3em]">
        <div>
          <img src={logo} alt="Visit Leyte" />
  
        </div>
      <div>
        <ul className="flex space-x-4 text-lg">
            <li><Link to="" className="link">HOME</Link></li>
            <li><Link to="/beaches" className="link">BEACHES</Link></li>
            <li><a href="" className="link">LANDMARKS</a></li>
            <li><a href="" className="link">EVENTS</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header