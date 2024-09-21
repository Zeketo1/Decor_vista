import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavigationLink = ({ children, name, path, onClick }) => (
  <Link onClick={onClick} to={path} className="navigation-link">
    {children}
    <p className="link-text">{name}</p>
  </Link>
);

NavigationLink.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavigationLink;
