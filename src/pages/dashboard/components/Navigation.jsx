import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaRegHeart,
  FaRegUserCircle,
  FaPencilAlt,
  FaInbox,
  FaHome,
} from "react-icons/fa"; // Importing icons from Font Awesome
import NavigationLink from "./NavigationLinks";

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

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="navigation"
      >
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
        <div className="nav-links">
          <NavigationLink name="Home">
            <FaHome className="icon" />{" "}
            {/* For managing interior design projects */}
          </NavigationLink>
          <NavigationLink name="My Designs">
            <FaPencilAlt className="icon" />{" "}
            {/* For creating/viewing designs */}
          </NavigationLink>
          <NavigationLink name="Client Requests">
            <FaInbox className="icon" />{" "}
            {/* For client requests or inquiries */}
          </NavigationLink>
          <NavigationLink name="Favorites">
            <FaRegHeart className="icon" />{" "}
            {/* For favorited designs or inspiration */}
          </NavigationLink>
          <NavigationLink name="Profile">
            <FaRegUserCircle className="icon" />{" "}
            {/* For designer profile settings */}
          </NavigationLink>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
