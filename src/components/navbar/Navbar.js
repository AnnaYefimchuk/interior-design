import { Link } from "react-router-dom";
import React from 'react'
import './Navbar.css';


const Navbar = ({ open }) => {
    return (
        <div className={open ? "sidebar collapse" : "sidebar"}>
            <nav className="navigation-nav">
                <ul className="navigation-ul">
                    <li className="">
                        <Link to="/studio" className="sidebar-link" >THE STUDIO</Link>
                    </li>
                    <li className="">
                        <Link to="/project" className="sidebar-link">PROJECTS</Link>
                    </li>
                    <li className="">
                        <Link to="/architecture" className="sidebar-link" >ARCHITECTURE</Link>
                    </li>
                    <li className="">
                        <Link to="/blog" className="sidebar-link" >BLOG</Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Navbar