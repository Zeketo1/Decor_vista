import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import { FaRegHeart, FaRegUserCircle, FaPencilAlt, FaInbox, FaHome, FaRegEnvelope } from "react-icons/fa";
import { IoLogOutOutline, IoWalletOutline } from "react-icons/io5";
import { MdOutlineDashboard, MdOutlineDateRange } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import "../../../styles/dashboards/user/Side_Menu.css"

const Sidemenu = () => {

    const { pathname } = useLocation();

    const menu_items = [

        {
            path: '/user',
            name: "Overview",
            icon: MdOutlineDashboard
        },

        {
            path: "/messages",
            name: "Messages",
            icon: FaRegEnvelope
        },

        {
            path: "/purchases",
            name: "Purchases",
            icon: IoWalletOutline
        },

        {
            path: "/consultation",
            name: "Appointments",
            icon: MdOutlineDateRange
        }   
    ]

    return (
        <aside className="side-menu-container">
           <div className="logo-n-arrow">
                <span className="logo">LOGO</span>
           </div>

           <div className="side-menu-items">
                {
                    menu_items.map(item => (
                        <Link to={item.path} className={`menu-item ${item.path == pathname ? "active" : ""}`} key={item.name}>
                            <item.icon/>
                            <span>{item.name}</span>
                        </Link>
                    ))
                }

                <div className="sign-out">
                    <IoLogOutOutline />
                    <span>Logout</span>
                </div>
           </div>
        </aside>
    );
};

export default Sidemenu;