import { Outlet, Link } from "react-router-dom";
import './Header.css';
import Menu from '../../images/Vector.png';
import NavBar from '../navbar/Navbar'

export default function Header({ click }) {
    return (
        <div className="header-info">
            <div className='header-block'>
                <div className="header-navigation-block">
                    <Link to="/" className='header-logo'>RMC</Link>
                    <nav className="header-navigation-nav">
                        <ul className="header-navigation-ul">
                            <li className="header-navigation-li">
                                <Link to="/studio" className="header-navigation-element">THE STUDIO</Link>
                            </li>
                            <li className="header-navigation-li">
                                <Link to="/project" className="header-navigation-element">PROJECTS</Link>
                            </li>
                            <li className="header-navigation-li">
                                <Link to="/architecture" className="header-navigation-element">ARCHITECTURE</Link>
                            </li>
                            <li className="header-navigation-li">
                                <Link to="/blog" className="header-navigation-element padding-r">BLOG</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='header-contact'>
                    <button className="contact-button">CONTACT</button>
                    <button className='contact-button-menu'><img className='contact-button-menu' width="36px" src={Menu} alt='star' onClick={click} /></button>
                </div>

            </div>
            <Outlet />
        </div>
    );
}