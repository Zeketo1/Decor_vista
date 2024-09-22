import "../../../styles/auth/Profile-set-up.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils";

const DesignerProfileSetup = () => {
  const previousUserValues = JSON.parse(localStorage.getItem("uservalues1"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!previousUserValues) {
      navigate("/auth/sign-up");
    }
  }, [navigate, previousUserValues]);

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      portfolioLink: "",
      bio: "",
      years_of_experience: "",
      address: "",
      specializations: "",
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
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);

      const userData = {
        username: previousUserValues.username,
        password: previousUserValues.password,
        re_password: previousUserValues.password,
        email: previousUserValues.email,
        role: previousUserValues.role,
        user_details: {
          contact_number: previousUserValues.contact_number,
          address: values.address,
        },
        designer_details: {
          address: values.address,
          bio: values.bio,
          contact_number: previousUserValues.contact_number,
          years_of_experience: values.years_of_experience,
          specializations: values.specializations,
          portfolio: values.portfolioLink,
        },
      };
      try {
        console.log(userData);
        // Send the JSON payload to the backend
        const response = await axios.post(
          `${BASE_URL}/auth/users/`,
          userData, // No need to stringify - Axios does this automatically
          {
            headers: {
              "Content-Type": "application/json", // Send as JSON
            },
          }
        );
        console.log(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/auth/login?role=designer");
      } catch (error) {
        console.log("Error:", error.response?.data || error.message);
      }
      setLoading(false);
    },
  });

  return (
    <motion.div className="designer-profile-setup-container">
      <motion.div
        className="designer-profile-form-wrapper"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 style={{ color: "var(--red-200)" }}>
          Welcome, Complete Your Profile
        </h2>
        <p>Complete your profile to start showcasing your work</p>

        <form onSubmit={formik.handleSubmit}>
          <div className="designer-input-group">
            <label>Address</label>
            <input
              name="address"
              type="text"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your address"
            />
            {formik.touched.address && formik.errors.address && (
              <p className="designer-error-message">{formik.errors.address}*</p>
            )}
          </div>

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
            <label>Years of Experience</label>
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

          <div className="designer-input-group">
            <label>Specializations</label>
            <input
              name="specializations"
              type="text"
              value={formik.values.specializations}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="e.g., Interior Design, Architecture"
            />
          </div>

          <div className="designer-submit-region">
            <button
              type="submit"
              className="designer-submit-btn"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Profile"}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default DesignerProfileSetup;
