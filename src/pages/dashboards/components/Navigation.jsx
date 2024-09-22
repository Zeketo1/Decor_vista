import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import {
  // FaRegHeart,
  FaRegUserCircle,
  FaPencilAlt,
  FaInbox,
  FaRegEnvelope,
} from "react-icons/fa"; // Importing icons from Font Awesome
import NavigationLink from "./NavigationLinks";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineDashboard, MdOutlineDateRange } from "react-icons/md";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
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

const menu_items = [
  {
    path: "/user",
    name: "Overview",
    Icon: MdOutlineDashboard,
  },

  {
    path: "/messages",
    name: "Messages",
    Icon: FaRegEnvelope,
  },

  {
    path: "/purchases",
    name: "Purchases",
    Icon: IoWalletOutline,
  },

  {
    path: "/consultation",
    name: "Appointments",
    Icon: MdOutlineDateRange,
  },
];
const designer_menu_items = [
  {
    path: "/dashboard/designer-dashboard",
    name: "Overview",
    Icon: MdOutlineDashboard,
  },

  {
    path: "/dashboard/designer-designs",
    name: "My Designs",
    Icon: FaPencilAlt,
  },

  {
    path: "/dashboard/designer-dashboard/client-requests",
    name: "Client Requests",
    Icon: FaInbox,
  },

  {
    path: "/dashboard/profile",
    name: "Profile",
    Icon: FaRegUserCircle,
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();
  const userRole = localStorage.getItem("userRole"); // Retrieve user role from local storage
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
        <div className="navigation-links">
          <div className="top_nav">
            <div className="nav-header">
              <img src={logo} className="main_logo" />
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
          </div>

          <div className="navigation-links2">
            {userRole === "designer" ? (
              <div className="">
                {designer_menu_items.map(({ Icon, path, name }, i) => (
                  <NavigationLink
                    className={`navigation-link ${
                      pathname == path && "active"
                    }`}
                    key={i}
                    path={path}
                    name={name}
                  >
                    <Icon className="route-icon " />
                  </NavigationLink>
                ))}
              </div>
            ) : (
              <div className="">
                {menu_items.map(({ path, name, Icon }, i) => (
                  <NavigationLink
                    className={`navigation-link ${
                      pathname == path && "active"
                    }`}
                    key={i}
                    path={path}
                    name={name}
                  >
                    <Icon className="route-icon " />
                  </NavigationLink>
                ))}
              </div>
            )}
          </div>
        </div>
        <NavigationLink
          className={"navigation-link"}
          path={"/auth/login"}
          onClick={logout}
          name="Logout"
        >
          <IoLogOutOutline className="route-icon" />{" "}
          {/* For designers to manage their designs */}
        </NavigationLink>
      </motion.nav>
    </>
  );
};

export default Navigation;
