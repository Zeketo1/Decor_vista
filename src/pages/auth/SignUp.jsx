import "../../styles/auth/auth.css";
import image2 from "../../assets/images/pexels-fotoaibe-1571460.jpg";
import image3 from "../../assets/images/pexels-pixabay-161758.jpg";
import video1 from "../../assets/videos/3773486-hd_1920_1080_30fps.mp4";
import video2 from "../../assets/videos/3444433-hd_1920_1080_30fps.mp4";
import { motion } from "framer-motion";
import { MdEmail, MdPassword } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import VideoPlayer from "./utils/VideoPlayer";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contactNumber: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!validateEmail(formData.email)) {
      validationErrors.email = "Invalid email format";
    }
    if (Object.values(formData).some((field) => !field)) {
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
          <h2>Welcome to Decor Vista</h2>
          <p>Create a decor vista account to continue</p>
          <form onSubmit={handleSubmit}>
            {errors.general && (
              <p className="error-message">{errors.general}*</p>
            )}
            <div className="input-group">
              <FaUser className="input-group-icon" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <MdEmail className="input-group-icon" />
              <input
                type="email"
                name="email"
                placeholder="user@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="input-group">
              <BiPhoneCall className="input-group-icon" />
              <input
                type="text"
                name="contactNumber"
                placeholder="+234....."
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <MdPassword className="input-group-icon" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <select name="role" id="role" onChange={handleInputChange}>
                <option value="">select role</option>
                <option value="user">user</option>
                <option value="designer">designer</option>
              </select>
            </div>
            <div className="submit-region">
              <button type="submit" className="signin-btn">
                Sign up
              </button>
              <p className="signup-link">
                Already a member? <Link to={"/auth/login"}>Login</Link>
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
          <VideoPlayer src={video1} className="right-image image1" />
          <img src={image2} alt="Dog running" className="right-image" />
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="right-section2"
        >
          <img
            src={image3}
            alt="Woman with dog"
            className="right-image image3"
          />
          <VideoPlayer src={video2} className="right-image" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SignUp;
