import "../../styles/auth/Auth.css";
import image2 from "../../assets/images/pexels-fotoaibe-1571460.jpg";
import image3 from "../../assets/images/pexels-pixabay-161758.jpg";
import video1 from "../../assets/videos/3773486-hd_1920_1080_30fps.mp4";
import video2 from "../../assets/videos/3444433-hd_1920_1080_30fps.mp4";
import { motion } from "framer-motion";
import { MdEmail, MdPassword } from "react-icons/md";
import { BiLoaderAlt, BiPhoneCall } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import VideoPlayer from "./utils/VideoPlayer";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [userParam, setUserParam] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string(),
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    contact_number: Yup.string()
      .required("Contact number is required")
      .matches(/^\+?\d{10,}$/, "Invalid contact number format"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    role: Yup.string().required("Role is required"),
  });

  // Initialize formik with initial values, validation schema, and onSubmit handler
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      contact_number: "",
      password: "",
      role: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);

      // Simulate a delay of 5 seconds before navigating
      setTimeout(() => {
        localStorage.setItem("uservalues1", JSON.stringify(values));

        const userRole = values.role === "designer" ? "designer" : "user";
        setUserParam({ role: userRole });
        localStorage.setItem("userRole", userRole);

        // Navigate to the login page after the 5 seconds loading time
        if (userRole === "designer") {
          navigate("/auth/login?role=designer");
        } else {
          navigate("/auth/login?role=user");
        }

        setIsLoading(false);
      }, 5000); // 5-second delay
    },
  });

  return (
    <motion.div className="container">
      <div className="left-section">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="form-wrapper"
        >
          <h2 className="h2">Welcome to Decor Vista</h2>
          <p className="p">Create a decor vista account to continue</p>
          <form onSubmit={formik.handleSubmit}>
            {formik.errors.general && (
              <p className="error-message">{formik.errors.general}*</p>
            )}

            {/* First Name input */}
            <div className="input-group">
              <FaUser className="input-group-icon" />
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <p className="error-message">{formik.errors.first_name}</p>
              ) : null}
            </div>

            {/* Last Name input */}
            <div className="input-group">
              <FaUser className="input-group-icon" />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <p className="error-message">{formik.errors.last_name}</p>
              ) : null}
            </div>

            {/* Username input - now optional */}
            <div className="input-group">
              <FaUser className="input-group-icon" />
              <input
                type="text"
                name="username"
                placeholder="Username (optional)"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {/* Email input */}
            <div className="input-group">
              <MdEmail className="input-group-icon" />
              <input
                type="email"
                name="email"
                placeholder="user@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="error-message">{formik.errors.email}</p>
              ) : null}
            </div>

            {/* Contact Number input */}
            <div className="input-group">
              <BiPhoneCall className="input-group-icon" />
              <input
                type="text"
                name="contact_number"
                placeholder="+234....."
                value={formik.values.contact_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.contact_number && formik.errors.contact_number ? (
                <p className="error-message">{formik.errors.contact_number}</p>
              ) : null}
            </div>

            {/* Password input */}
            <div className="input-group">
              <MdPassword className="input-group-icon" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="error-message">{formik.errors.password}</p>
              ) : null}
            </div>

            {/* Role selection */}
            <div className="input-group">
              <select
                name="role"
                id="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select role</option>
                <option value="user">User</option>
                <option value="designer">Designer</option>
              </select>
              {formik.touched.role && formik.errors.role ? (
                <p className="error-message">{formik.errors.role}</p>
              ) : null}
            </div>

            <div className="submit-region">
              <button type="submit" className="signin-btn">
                {isLoading ? <BiLoaderAlt className="loader" /> : "Sign up"}
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
