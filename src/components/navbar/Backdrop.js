import React from 'react'
import './Navbar.css';

const Backdrop = ({ click, open }) => {
    return (
        <div className={open ? "backdrop backdrop--open" : "backdrop"} onClick={click}></ div>
    )
}

export default Backdrop

