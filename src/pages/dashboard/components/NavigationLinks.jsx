import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavigationLink = ({ children, name, path }) => (
  <Link to={path} className="navigation-link">
    {children}
    <p className="link-text">{name}</p>
  </Link>
);

NavigationLink.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  path: PropTypes.string,
};

export default NavigationLink;
