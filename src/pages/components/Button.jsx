import { Link } from "react-router-dom";
import "./Button.css";
import PropTypes from "prop-types";
const Button = ({ text, link }) => {
  return (
    <Link className="button_" to={link}>
      {text}
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default Button;
