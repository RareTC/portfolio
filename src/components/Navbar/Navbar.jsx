import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import Logo from '../../assets/tclogo.png';
import './Navbar.css';

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location])

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
              <ReorderIcon/>
            </button>
        </div>
        <div className="links">
            <img className='logo' src={Logo} alt="" />
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            {/* <Link to="/experience"> Experience </Link> */}
            <Link to="/resume"> Resume </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/about"> About </Link>
        </div>
    </div>
  )
}
