import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import {
  // FaRegHeart,
  FaRegUserCircle,
  FaPencilAlt,
  FaInbox,
  FaHome,
} from "react-icons/fa"; // Importing icons from Font Awesome
import NavigationLink from "./NavigationLinks";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();
  const userRole = localStorage.getItem("userRole"); // Retrieve user role from local storage
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpen, containerControls, svgControls]);

  const handleOpenClose = () => setIsOpen(!isOpen);
  const logout = () => navigate("/auth/login");

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="navigation"
      >
        <div className="top_nav">
          <div className="nav-header">
            <div className="logo" />
            <button className="toggle-button" onClick={handleOpenClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="toggle-icon"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={svgVariants}
                  animate={svgControls}
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </button>
          </div>

          {/* Dynamic Navigation Links */}
          <div className="navigation-links">
            <NavigationLink path={"/dashboard/designer-dashboard"} name="Home">
              <FaHome className="route-icon" />
            </NavigationLink>

            {userRole === "designer" && (
              <>
                <NavigationLink name="My Designs">
                  <FaPencilAlt className="route-icon" />{" "}
                  {/* For designers to manage their designs */}
                </NavigationLink>
                <NavigationLink
                  path={"/dashboard/designer-dashboard/client-requests"}
                  name="Client Requests"
                >
                  <FaInbox className="route-icon" /> {/* For client requests */}
                </NavigationLink>
              </>
            )}

            <NavigationLink name="Profile">
              <FaRegUserCircle className="route-icon" />{" "}
              {/* User or designer profile settings */}
            </NavigationLink>
          </div>
        </div>
        <NavigationLink path={"/auth/login"} onClick={logout} name="Logout">
          <IoLogOutOutline className="route-icon" />{" "}
          {/* For designers to manage their designs */}
        </NavigationLink>
      </motion.nav>
    </>
  );
};

export default Navigation;
