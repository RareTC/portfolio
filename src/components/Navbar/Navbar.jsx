import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import './Navbar.css';

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  //when setExpandbar Location changes from the import set to false (close menu)
  useEffect(() => {
    setExpandNavbar(false);
  }, [location])

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
              {/* hamburger icon from materialUI */}
              <ReorderIcon/>
            </button>
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            {/* <Link to="/experience"> Experience </Link> */}
            {/* <Link to="/about"> About </Link> */}
            <Link to="/resume"> Resume </Link>
            <Link to="/contact"> Contact </Link>
        </div>
    </div>
  )
}
