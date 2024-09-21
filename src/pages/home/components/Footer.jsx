import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import "../../../styles/home/Footer.css"

const Footer = () => {
    const socials = [FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter];
    const quickLinks = [
        {
            title: "Category",
            links: ["Living Room", "Kitchen", "Bed Room", "Bed Room"]
        },

        {
            title: "Popular Product",
            links: ["Single Sofa Black", "Wooden Bookcase", "Wooden Chair", "Luxury White Bed"]
        },

        {
            title: "Sitemap",
            links: ["Home", "Blog", "About Us", "Contact US"]
        }
    ];

    return (
        <footer className='main-footer'>
            <div className="top-area">
                <div className="logo-area">
                    <h1>LOGO</h1>
                    <p>Crafting Timeless Interiors That Combine Functionality, Comfort, and Aesthetic Appeal.</p>
                    <div className="socials">
                        {socials.map((Social, index) => (
                            <Link key={index} to="#" className='icon-container'>
                                <Social className='icon'/>
                            </Link>
                        ))}
                    </div>
                </div>

                {quickLinks.map(link => (
                    <div className="links-container" key={link.title}>
                        <span>{link.title}</span>

                        <div className="links">
                            {link.links.map((lin, index)=> (
                                <Link key={index} to="#" className='link'>{lin}</Link>
                            ))}
                        </div>
                    </div>
                ))}

            </div>

            <div className="bottom-area">
                <p>© 2024 DecorVista. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer