import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer-block">

            <div className="footer-block-size">
                <div>
                    <div className="footer-firstblock-elements">
                        <img className='' src={Logo} alt='RMC' />
                        <p className="footer-block-about">Take a look at how we designed this housesimply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                </div>

                <div className="footer-block-second">
                    <nav className="footer-block-first-nav">
                        <ul className="footer-block-first-ul">
                            <li className="footer-block-first-li">
                                <Link to="/studio" className="footer-block-first-link orangeColor">THE STUDIO</Link>
                            </li>
                            <li className="footer-block-first-li">
                                <Link to="/project" className="footer-block-first-link">PROJECTS</Link>
                            </li>
                            <li className="footer-block-first-li">
                                <Link to="/architecture" className="footer-block-first-link">ARCHITECTURE</Link>
                            </li>
                            <li className="footer-block-first-li">
                                <Link to="/blog" className="footer-block-first-link">BLOG</Link>
                            </li>
                            <li className="footer-block-first-li">
                                <Link to="/blog" className="footer-block-first-link">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <div  className="footer-last-elements">
                        <div className="footer-visitcall">
                            <p className="footer-block-last-title">Visit</p>
                            <p className="footer-block-last-description">Logan Barker, 865 Oak Boulevard, Elk Grove, Vermont 95184</p>
                        </div>
                        <div className="footer-visitcall">
                            <p className="footer-block-last-title">Call</p>
                            <p className="footer-block-last-description">017-6153-1774</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-block-horizontal">
                <p className="footer-block-horizontal-info">©  Copyright 2022 Email: <span className="orangeColor">Asibulasik@gmail.com</span></p>
            </div>
 
        </div>
    );
}