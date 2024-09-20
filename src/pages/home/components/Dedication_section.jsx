import React from 'react'
import { GrStar } from 'react-icons/gr'
import { IoHammerOutline, IoMailOutline } from 'react-icons/io5'
import { PiCouchBold } from 'react-icons/pi'
import "../../../styles/home/Dedication.css";

const Dedication_section = () => {

    const dedications = [
        {
            title: "Quality Craftsmanship",
            description: "Our furniture is meticulously handcrafted to stand the test of time, ensuring it can be enjoyed for generations to come.",
            icon: PiCouchBold
        },

        {
            title: "Extensive Selection",
            description: "Discover a wide variety of styles and options to suit your unique preferences and needs.",
            icon: IoHammerOutline
        },

        {
            title: "Dedicated Customer Support",
            description: "Quiuckly navigate you anda engage with your adience.",
            icon: IoMailOutline
        },
    ];

    return (
        <section className='dedication-container'>
            <div className="left-area">
                <h2>Our Dedication to Your Satisfaction</h2>
                <p>We take pride in our unwavering commitment to quality and customer satisfaction. With a track record of excellence, we provide you with the finest furniture and a service you can trust.</p>

                <div className="rating">
                    <div className="quantity">
                        <div className="stars">
                            <GrStar />
                            <GrStar />
                            <GrStar />
                            <GrStar />
                            <GrStar />
                        </div>
                        <span>4.9 / 5 rating</span>
                        <span>Qualitity</span>
                    </div>

                    <div className="quantity">
                        <div className="stars">
                            <GrStar />
                            <GrStar />
                            <GrStar />
                            <GrStar />
                            <GrStar />
                        </div>
                        <span>4.8 / 5 rating</span>
                        <span>Customer Satisfaction</span>
                    </div>
                </div>
            </div>
            <div className="right-area">
                {dedications.map(statement => (
                    <div className="statement-container" key={statement.title}>
                        <div>
                            <statement.icon className='icon'/>
                        </div>
                        
                        <div className="text-area">
                            <span>{statement.title}</span>
                            <p>{statement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Dedication_section
