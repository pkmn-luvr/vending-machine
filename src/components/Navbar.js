import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Ensure the path is correct

function Navbar() {
    return (
        <nav className="navbar">
            <div className="menu-icon"> <center>🪄</center></div>
            <div className="menu">
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}><span>🏠</span> Home</NavLink>
                <NavLink to="/ramen" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}><span>🍜</span> Ramen</NavLink>
                <NavLink to="/sushi" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}><span>🍣</span> Sushi</NavLink>
                <NavLink to="/poke-bowl" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}><span>🥗</span> Poke Bowl</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
