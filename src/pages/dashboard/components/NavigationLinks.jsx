import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavigationLink = ({ children, name }) => (
  <Link to={"#"} className="navigation-link">
    {children}
    <p className="link-text">{name}</p>
  </Link>
);

NavigationLink.propTypes = {
  // children: PropTypes.func,
  name: PropTypes.string,
};

export default NavigationLink;
