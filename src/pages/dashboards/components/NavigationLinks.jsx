import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavigationLink = ({ children, name, path, onClick, className }) => (
  <Link onClick={onClick} to={path} className={className}>
    {children}
    <p className="link-text">{name}</p>
  </Link>
);

NavigationLink.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  path: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavigationLink;
