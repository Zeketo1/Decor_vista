import React from 'react'
import { FaAmazon, FaGlide, FaSpotify } from 'react-icons/fa6'
import { SiCanva, SiWebflow } from 'react-icons/si'
import "../../../styles/home/Client.css";

const Clients = () => {
    const clinets = [
        {
            name: "Webflow",
            logo: SiWebflow
        },

        {
            name: "Glide",
            logo: FaGlide
        },

        
        {
            name: "Amazon",
            logo: FaAmazon
        },

        {
            name: "Spotify",
            logo: FaSpotify
        }
    ]

    return (
        <div className="client-container">
            <span>Our corporate clients</span>

            <div className="clients">
                {clinets.map(client => (
                    <div className="client">
                        <client.logo className='icon'/>
                        <span>{client.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clients