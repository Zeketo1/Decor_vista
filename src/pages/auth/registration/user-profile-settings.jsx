import "../../../styles/auth/Profile-set-up.css"
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// User Profile Setup Component
const UserProfileSetup = () => {
  const navigate = useNavigate();

  // Formik for form handling and validation using Yup
  const formik = useFormik({
    initialValues: {
      address: "",
      bio: "",
    },
    validationSchema: Yup.object({
      address: Yup.string().required("Address is required"),
      bio: Yup.string()
        .max(500, "Bio must be under 500 characters")
        .required("Bio is required"),
    }),
    onSubmit: (values) => {
      console.log("User Profile Submitted:", values);

      // You can integrate Firebase to store user profile data here.
      // For now, let's simulate the navigation after form submission.
      navigate("/auth/user-profile-settings");
    },
  });

  return (
    <motion.div className="container profile-setup-container">
      <motion.div
        className="profile-form-wrapper"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2>Set Up Your Profile</h2>
        <p>Complete your profile to personalize your experience</p>

        <form onSubmit={formik.handleSubmit}>
          <div className="input-group">
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
              <p className="error-message">{formik.errors.address}*</p>
            )}
          </div>

          <div className="input-group">
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
              <p className="error-message">{formik.errors.bio}*</p>
            )}
          </div>

          <div className="submit-region">
            <button type="submit" className="submit-btn">
              Save Profile
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default UserProfileSetup;
