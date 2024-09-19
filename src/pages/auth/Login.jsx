import { useState } from "react";
import "../../styles/auth/auth.css";
import image1 from "../../assets/images/pexels-fotoaibe-1571453.jpg";
import image2 from "../../assets/images/pexels-fotoaibe-1571460.jpg";
import video3 from "../../assets/videos/3444429-hd_1920_1080_30fps.mp4";
import video4 from "../../assets/videos/3444430-hd_1920_1080_30fps.mp4";
import { motion } from "framer-motion";
import { MdEmail, MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";
import VideoPlayer from "./utils/VideoPlayer";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!validateEmail(formData.email)) {
      validationErrors.email = "Invalid email format";
    }
    if (!formData.email || !formData.password) {
      validationErrors.general = "All fields are required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted:", formData);
      setErrors({});
    }
  };

  return (
    <motion.div className="container">
      <div className="left-section">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="form-wrapper"
        >
          <h2>Welcome Back</h2>
          <p>Sign in to your account to continue</p>
          <form onSubmit={handleSubmit}>
            {errors.general && (
              <p className="error-message">{errors.general}*</p>
            )}
            <div className="input-group">
              <MdEmail className="input-group-icon" />
              <input
                value={formData.email}
                name="email"
                type="email"
                placeholder="user@gmail.com"
                onChange={handleInputChange}
              />
              {errors.email && <p className="error-message">{errors.email}*</p>}
            </div>
            <div className="input-group">
              <MdPassword className="input-group-icon" />
              <input
                name="password"
                value={formData.password}
                type="password"
                placeholder="••••••••"
                onChange={handleInputChange}
              />
            </div>

            <div className="submit-region">
              <button type="submit" className="signin-btn">
                Log in
              </button>
              <p className="signup-link">
                Not a member? <Link to={"/auth/sign-up"}>Sign up</Link>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
      <div className="right-section">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="right-section1"
        >
          <img src={image2} alt="dog running" className="right-image " />
          <VideoPlayer src={video3} className="right-image image1" />
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="right-section2"
        >
          <VideoPlayer src={video4} className="right-image " />
          <img src={image1} alt="dog paws" className="right-image" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;
