import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../../../styles/home/Footer.css";
import logo from "../../../assets/images/logo.png";
const Footer = () => {
  const socials = [FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter];
  const quickLinks = [
    {
      title: "Category",
      links: ["Living Room", "Kitchen", "Bed Room", "Bed Room"],
    },

    {
      title: "Popular Product",
      links: [
        "Single Sofa Black",
        "Wooden Bookcase",
        "Wooden Chair",
        "Luxury White Bed",
      ],
    },

    {
      title: "Sitemap",
      links: ["Home", "Blog", "About Us", "Contact US"],
    },
  ];

  return (
    <footer className="main-footer">
      <div className="top-menu">
        <div className="logo-area">
          <img src={logo} className="main_logo" />
          <p>
            Crafting Timeless Interiors That Combine Functionality, Comfort, and
            Aesthetic Appeal.
          </p>
          <div className="socials">
            {socials.map((Icon, index) => (
              <Link key={index} to="#" className="icon-container">
                <Icon className="Icon" />
              </Link>
            ))}
          </div>
        </div>

        {quickLinks.map((link) => (
          <div className="links-container" key={link.title}>
            <span>{link.title}</span>

            <div className="links">
              {link.links.map((lin, index) => (
                <Link key={index} to="#" className="link">
                  {lin}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-area">
        <p>© 2024 DecorVista. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
