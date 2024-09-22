import "../../../styles/auth/Profile-set-up.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import uploadIcon from "../../../assets/icons/upload.svg";
import axios from "axios";
import { BASE_URL } from "../../utils";

// Helper function to convert image to base64
// Helper function to convert image to base64
// Helper function to convert image to base64
// const toBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file); // Read file as Data URL (Base64)
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });

const DesignerProfileSetup = () => {
  const previousUserValues = JSON.parse(localStorage.getItem("uservalues1"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!previousUserValues) {
      navigate("/auth/sign-up");
    }
  }, [navigate, previousUserValues]);

  // const [profileImageBase64, setProfileImageBase64] = useState(null);
  // const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(false);

  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: {
  //     "image/jpeg": [],
  //     "image/png": [],
  //     "image/gif": [],
  //     "image/svg+xml": [],
  //   },
  //   onDrop: async (acceptedFiles) => {
  //     if (acceptedFiles.length) {
  //       try {
  //         const base64Image = await toBase64(acceptedFiles[0]);
  //         setProfileImageBase64(base64Image); // Set Base64 Image
  //         setFileError("");
  //       } catch (error) {
  //         console.log(error);
  //         setFileError("Failed to convert image to base64");
  //       }
  //     } else {
  //       setFileError("Please upload a valid image");
  //     }
  //   },
  // });

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
        navigate("/dashboard/designer-dashboard");
      } catch (error) {
        console.log("Error:", error.response?.data || error.message);
        // setFileError(
        //   "An error occurred while saving your profile. Please try again."
        // );
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
          {/* <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {profileImageBase64 ? (
              <img
                src={profileImageBase64}
                alt="Profile Preview"
                style={{ width: "100%", height: "100px", objectFit: "contain" }}
              />
            ) : (
              <div className="upload-container">
                <div className="upload-icon-wrapper">
                  <img src={uploadIcon} alt="Upload" width="30" height="30" />
                </div>
                <p className="upload-text">Click to upload or drag and drop</p>
                <p className="upload-file-info">
                  SVG, PNG, JPG, or GIF (max. 800x400px)
                </p>
              </div>
            )}
          </div>
          {fileError && <p className="designer-error-message">{fileError}*</p>} */}

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
