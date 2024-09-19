import React from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import "../../../styles/home/Home.css";
import image_1 from "../../../assets/images/image_1.png";
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { IoIosArrowRoundForward } from 'react-icons/io';
import vector1 from "../../../assets/images/vector1.png";
import vector2 from "../../../assets/images/vector2.png"
import vector3 from "../../../assets/images/vector3.png"
import vector4 from "../../../assets/images/vector4.png"
import vector5 from "../../../assets/images/vector5.png"
import vector6 from "../../../assets/images/vector6.png"
import vector7 from "../../../assets/images/vector7.png"
import vector8 from "../../../assets/images/vector8.png"


const Banner_Section = () => {

    const {pathname} = useLocation();

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

    return (
        <section className='landing-section'>
            <header className='navbar-container'>
                <span className="logo">Logo...</span>

                <nav className="nav-links">
                    {links.map(link => (
                        <Link to={link.path} className={`link ${link.path == pathname ? "active-link" : ""}`}>{link.title}</Link>
                    ))}

                    <FaCartShopping className='cart-icon'/>
                </nav>
            </header>

            <div className="text-n-image">
                <div className="text-container">
                    <h1>Simplicity <span>is the</span> ultimate <span>sophistication</span></h1>
                    <p>Embrace the art of minimalism and timeless elegance in every corner of your space. Transform your home into a sanctuary of beauty and comfort, where every detail is carefully curated to enhance your living experience.</p>
                    <Link to="/gallery" className='link'>
                        Explore Designs 
                        <MdKeyboardDoubleArrowRight />
                    </Link>
                </div>

                <div className="image-container">
                    <img src={image_1} alt="interior decor" />
                    <div className="numbers">
                        <div className="number">
                            <div className="line"></div>
                            <span>01</span>
                        </div>

                        <div className="number active">
                            <div className="line"></div>
                            <span>02</span>
                        </div>

                        <div className="number">
                            <div className="line"></div>
                            <span>03</span>
                        </div>

                        <div className="number">
                            <div className="line"></div>
                            <span>04</span>
                        </div>
                    </div>

                    <button className="next-btn">
                        <span>Next</span>
                        <IoIosArrowRoundForward className='next-icon'/>
                    </button>
                </div>
            </div>

            <div className="vector-images">
                <img src={vector1} alt="vector1" className='vector1'/>
                <img src={vector2} alt="vector1" className='vector2'/>
                <img src={vector3} alt="vector1" className='vector3'/>
                <img src={vector4} alt="vector1" className='vector4'/>
                <img src={vector6} alt="vector1" className='vector6'/>
                <img src={vector7} alt="vector1" className='vector7'/>
            </div>
        </section>
    )
}

export default Banner_Section