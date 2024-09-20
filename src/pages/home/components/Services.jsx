import React from 'react'
import { FaCouch, FaLightbulb, FaPaintBrush } from 'react-icons/fa';
import "../../../styles/home/Services.css";
import { LuLayoutDashboard } from 'react-icons/lu';
import { PiSwatches } from 'react-icons/pi';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import Subheading from '../components/Subheading';

const Services = () => {

    const services = [
        {
            title: 'Home Furnishing',
            description: 'Curate a cozy and elegant atmosphere with our handpicked selection of furniture and decor pieces tailored to your style.',
            icon: HiOutlineHomeModern
        },
        {
            title: 'Wall Art & Painting',
            description: 'Add a splash of color to your space with our exquisite wall art and painting services that reflect your personality.',
            icon: PiSwatches
        },
        {
            title: 'Lighting Design',
            description: 'Illuminate your rooms with stylish and functional lighting solutions, creating the perfect ambiance for every occasion.',
            icon: LuLayoutDashboard
        }
    ];

    return (
        <div className="services-container">
            <div className="header">
                <div className="">
                    <Subheading title="Services"/>
                    <h2>Expert Interior Services for a Stylish Living Space</h2>
                    {/* <button>VIEW DESIGNS</button> */}
                </div>

                <p>Transform your living space with our tailored interior decor solutions. From elegant furnishings to artful accents, our services are designed to bring your vision to life with sophistication and style.</p>
            </div>

            <div className="services">
                {services.map(service => (
                    <div className="service" key={service.title}>
                        <div className="icon">
                            <service.icon/>
                        </div>
                        <span>{service.title}</span>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services