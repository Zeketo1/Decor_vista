import "../../../styles/auth/profile-set-up.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Designer Profile Setup Component
const DesignerProfileSetup = () => {
  const navigate = useNavigate();

  // Formik for form handling and validation using Yup
  const formik = useFormik({
    initialValues: {
      portfolioLink: "",
      bio: "",
      years_of_experience: "",
    },
    validationSchema: Yup.object({
      portfolioLink: Yup.string()
        .url("Invalid URL format")
        .required("Portfolio link is required"),
      bio: Yup.string()
        .max(500, "Bio must be under 500 characters")
        .required("Bio is required"),
      years_of_experience: Yup.string().required(
        "Years of experience is required"
      ),
    }),
    onSubmit: (values) => {
      console.log("Profile Setup Submitted:", values);
      navigate("/auth/designer-dashboard");
    },
  });

  return (
    <motion.div className="designer-profile-setup-container">
      <motion.div
        className="designer-profile-form-wrapper"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 style={{ color: "var(--red-200)" }}>Welcome Dubby</h2>
        <p>Complete your profile to start showcasing your work</p>

        <form onSubmit={formik.handleSubmit}>
          <div className="designer-input-group">
            <label>Portfolio Link</label>
            <input
              name="portfolioLink"
              type="url"
              value={formik.values.portfolioLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="https://your-portfolio.com"
            />
            {formik.touched.portfolioLink && formik.errors.portfolioLink && (
              <p className="designer-error-message">
                {formik.errors.portfolioLink}*
              </p>
            )}
          </div>

          <div className="designer-input-group">
            <label>Bio (max 500 characters)</label>
            <textarea
              name="bio"
              value={formik.values.bio}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Tell us about yourself"
              rows="4"
            />
            {formik.touched.bio && formik.errors.bio && (
              <p className="designer-error-message">{formik.errors.bio}*</p>
            )}
          </div>

          <div className="designer-input-group">
            <label>Years of experience</label>
            <input
              name="years_of_experience"
              type="text"
              value={formik.values.years_of_experience}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="2 years experience"
            />
            {formik.touched.years_of_experience &&
              formik.errors.years_of_experience && (
                <p className="designer-error-message">
                  {formik.errors.years_of_experience}*
                </p>
              )}
          </div>

          <div className="designer-submit-region">
            <button type="submit" className="designer-submit-btn">
              Save Profile
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default DesignerProfileSetup;
