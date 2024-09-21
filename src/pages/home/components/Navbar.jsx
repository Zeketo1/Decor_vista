import "../../../styles/home/Navbar.css"
import React, { useEffect, useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../../assets/images/logo.svg"
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {

    const {pathname} = useLocation();
    const [scrolled, setScroll] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const links = [
        {
            title: "Home",
            path: "/",
        },

        {
            title: "About Us",
            path: "/about",
        },
        
        {
            title: "Gallery",
            path: "/gallery",
        },

        {
            title: "Contact Us",
            path: "/contact",
        }
    ];

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuClick = () => {
        setMenuActive(!menuActive)
    } 

    return (
        <header className={`navbar-container ${scrolled ? "active" : menuActive ? "active" : ""} `}>
            <span className="logo">Logo...</span>

            <nav className={`nav-links ${menuActive ? "flex animateNavbar" : isFirstRender ? "hidden" : "unAnimate"}`}>
                {links.map(link => (
                    <Link key={link.title} to={link.path} className={`link ${link.path == pathname ? "active-link" : ""}`}>{link.title}</Link>
                ))}

                <FaCartShopping className='cart-icon'/>
            </nav>
            
            {menuActive ? (
                <LiaTimesSolid className="menu-icon" onClick={handleMenuClick} />
                ) : (
                <HiOutlineBars3BottomRight className="menu-icon" onClick={handleMenuClick} />
            )}

        </header>
    )
}

export default Navbar