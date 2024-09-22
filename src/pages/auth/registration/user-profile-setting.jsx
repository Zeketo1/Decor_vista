import "../../../styles/auth/Profile-set-up.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils";

const UserProfileSetup = () => {
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
      address: "",
      contact_number: "",
    },
    validationSchema: Yup.object({
      address: Yup.string().required("Address is required"),
      contact_number: Yup.string().required("Contact number is required"),
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
          contact_number: values.contact_number,
          address: values.address,
        },
        designer_details: {
          address: values.address,
          bio: "no bio",
          contact_number: previousUserValues.contact_number,
          years_of_experience: "no years_of_experience",
          specializations: "no specializations",
          portfolio: "https://portfolio-ivory-seven-71.vercel.app/",
        },
      };

      try {
        console.log(userData);
        const response = await axios.post(
          `${BASE_URL}/auth/users/`,
          userData, // Axios handles the JSON.stringify
          {
            headers: {
              "Content-Type": "application/json", // Send as JSON
            },
          }
        );
        console.log(response.data);
        navigate("/dashboard/user-dashboard"); // Change to your desired route
      } catch (error) {
        console.log("Error:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
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
        <p>Complete your profile to start using our services</p>

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
            <label>Contact Number</label>
            <input
              name="contact_number"
              type="text"
              value={formik.values.contact_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your contact number"
            />
            {formik.touched.contact_number && formik.errors.contact_number && (
              <p className="designer-error-message">
                {formik.errors.contact_number}*
              </p>
            )}
          </div>

          {/* Keeping the password field commented as requested */}
          {/* <div className="designer-input-group">
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your password"
        />
        {formik.touched.password && formik.errors.password && (
          <p className="designer-error-message">{formik.errors.password}*</p>
        )}
      </div> */}

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

export default UserProfileSetup;
