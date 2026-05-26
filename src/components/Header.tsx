import { Link, useLocation } from "react-router-dom";
import logo from '../assets/visitleyte-nobg.png';
import logoWhite from '../assets/visitleyte-nobg.png';
import { useEffect, useState } from 'react'
import { PiCaretDownBold } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const path = useLocation()
  const currentPath = path.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);

  const isHome = currentPath === "/";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 50);
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setDestOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeAll = () => {
    setIsOpen(false);
    setDestOpen(false);
    setSearchOpen(false);
  };

  const navLinkClass = isTransparent
    ? 'text-white/90 hover:text-white'
    : 'text-slate-700 hover:text-sky-600';

  return (
    <>
      {/* Backdrop overlay when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main navbar */}
      <nav className={`z-30 flex justify-between items-center px-5 py-12 md:px-12 h-22 md:h-16 fixed top-0 w-full transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}>

        {/* Logo */}
        <Link to="/" onClick={closeAll} className="flex-shrink-0 z-40">
          <img
            src={isTransparent ? logoWhite : logo}
            alt="Visit Leyte"
            className="h-18 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              to="/"
              className={`text-sm font-medium tracking-wide transition-colors flex items-center gap-1 ${navLinkClass} ${currentPath === '/' ? 'font-semibold' : ''}`}
            >
              HOME
            </Link>
          </li>

          {/* Destinations dropdown */}
          <li className="relative group">
            <button className={`text-sm font-medium tracking-wide transition-colors flex items-center gap-1 ${navLinkClass}`}>
              DESTINATIONS
              <PiCaretDownBold size={11} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden min-w-[160px]">
                <Link to="/beaches" className="flex items-center gap-2 px-5 py-3 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors">
                  Beaches
                </Link>
                <Link to="/landmarks" className="flex items-center gap-2 px-5 py-3 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors border-t border-slate-50">
                  Landmarks
                </Link>
              </div>
            </div>
          </li>

          <li>
            <Link
              to="/events"
              className={`text-sm font-medium tracking-wide transition-colors flex items-center gap-1 ${navLinkClass} ${currentPath === '/events' ? 'font-semibold' : ''}`}
            >
              EVENTS
            </Link>
          </li>

          <li>
            <Link
              to="/blog"
              className={`text-sm font-medium tracking-wide transition-colors flex items-center gap-1 ${navLinkClass} ${currentPath === '/blog' ? 'font-semibold' : ''}`}
            >
              BLOG
            </Link>
          </li>

          <li>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded-full transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <FaSearch size={15} />
            </button>
          </li>
        </ul>

        {/* Mobile hamburger button — always visible */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className={`md:hidden z-40 flex items-center justify-center w-10 h-10 rounded-xl shadow-sm transition-colors ${
            isTransparent
              ? 'bg-white/20 backdrop-blur-sm border border-white/30 text-white'
              : 'bg-slate-100 border border-slate-200 text-slate-700'
          }`}
        >
          {isOpen
            ? <IoMdClose size={22} />
            : <FaBars size={20} />
          }
        </button>
      </nav>

      {/* Search bar (desktop) */}
      {searchOpen && (
        <div className="hidden md:block fixed top-20 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100 z-20 px-12 py-6">
          <div className="max-w-2xl mx-auto">
            <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-widest">Search</label>
            <div className="flex gap-3">
              <input
                autoFocus
                type="text"
                className="block w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300 text-slate-800 placeholder:text-slate-400 text-sm"
                placeholder="Search destinations, events, blogs..."
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-medium rounded-xl hover:shadow-md transition-all"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile slide-down menu */}
      <div className={`
        md:hidden fixed top-16 left-0 w-full z-30
        bg-white shadow-xl
        transition-all duration-300 ease-in-out origin-top
        ${isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}
      `}>
        {/* Search bar inside mobile menu */}
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-4 py-2.5">
            <FaSearch size={13} className="text-slate-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search..."
              className="block w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300 text-slate-800 placeholder:text-slate-400 text-sm"
            />
          </div>
        </div>

        <ul className="flex flex-col px-3 pb-5">
          <li>
            <Link
              to="/"
              onClick={closeAll}
              className={`flex items-center px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${currentPath === '/' ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              Home
            </Link>
          </li>

          {/* Destinations accordion */}
          <li>
            <button
              type="button"
              onClick={() => setDestOpen(!destOpen)}
              className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Destinations
              <FaChevronDown size={12} className={`transition-transform duration-200 text-slate-400 ${destOpen ? 'rotate-180' : ''}`} />
            </button>
            {destOpen && (
              <ul className="ml-4 mb-1">
                <li>
                  <Link
                    to="/beaches"
                    onClick={closeAll}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm transition-colors ${currentPath === '/beaches' ? 'text-sky-600 bg-sky-50' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0"></span>
                    Beaches
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/landmarks"
                    onClick={closeAll}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm transition-colors ${currentPath === '/landmarks' ? 'text-sky-600 bg-sky-50' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0"></span>
                    Landmarks
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/events"
              onClick={closeAll}
              className={`flex items-center px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${currentPath === '/events' ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              Events
            </Link>
          </li>

          <li>
            <Link
              to="/blog"
              onClick={closeAll}
              className={`flex items-center px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${currentPath === '/blog' ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              Blog
            </Link>
          </li>
        </ul>

        <div className="px-5 pb-5 border-t border-slate-100 pt-4">
          <button className="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold rounded-xl shadow-sm">
            Plan Your Trip
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
