import "../../styles/auth/auth.css";
import image1 from "../../assets/images/pexels-fotoaibe-1571453.jpg";
import image2 from "../../assets/images/pexels-fotoaibe-1571460.jpg";
import video3 from "../../assets/videos/3444429-hd_1920_1080_30fps.mp4";
import video4 from "../../assets/videos/3444430-hd_1920_1080_30fps.mp4";
import { motion } from "framer-motion";
import { MdEmail, MdPassword } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import VideoPlayer from "./utils/VideoPlayer";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const getUserRole = localStorage.getItem("userRole");

  // Formik form management and Yup validation schema
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      const userRole = getUserRole;

      // Navigate based on the role stored in localStorage
      if (userRole === "designer") {
        navigate("/auth/designer-profile-settings");
      } else if (userRole === "user") {
        navigate("/auth/user-profile-settings");
      } else {
        console.log("Unknown role");
      }
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
          <h2>Welcome Back</h2>
          <p>Sign in to your account to continue</p>
          <form onSubmit={formik.handleSubmit}>
            {formik.errors.email && formik.touched.email && (
              <p className="error-message">{formik.errors.email}*</p>
            )}
            {formik.errors.password && formik.touched.password && (
              <p className="error-message">{formik.errors.password}*</p>
            )}

            <div className="input-group">
              <MdEmail className="input-group-icon" />
              <input
                value={formik.values.email}
                name="email"
                type="email"
                placeholder="user@gmail.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="input-group">
              <MdPassword className="input-group-icon" />
              <input
                name="password"
                value={formik.values.password}
                type="password"
                placeholder="••••••••"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="submit-region">
              <button type="submit" className="signin-btn">
                Log in
              </button>
              <p className="signup-link">
                Not a member? <Link to="/auth/sign-up">Sign up</Link>
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
          <img src={image2} alt="dog running" className="right-image" />
          <VideoPlayer src={video3} className="right-image image1" />
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="right-section2"
        >
          <VideoPlayer src={video4} className="right-image" />
          <img src={image1} alt="dog paws" className="right-image" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;
