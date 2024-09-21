import "../../../styles/auth/profile-set-up.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone"; // Importing Dropzone
import uploadIcon from "../../../assets/icons/upload.svg";
import axios from "axios";
import { BASE_URL } from "../../utils";
// Designer Profile Setup Component
const ProfileSetup = () => {
  const role = localStorage.getItem("userRole");
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (!role) {
      console.error("User role not found in localStorage");
    }
  }, [role]);
  const [profileImage, setProfileImage] = useState(null); // State for profile image
  const [fileError, setFileError] = useState(""); // State for handling file errors

  // Handling file drop
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length) {
        setProfileImage(URL.createObjectURL(acceptedFiles[0]));
        setFileError(""); // Clear any file error
      } else {
        setFileError("Please upload a valid image");
      }
    },
  });

  // Formik for form handling and validation using Yup
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
      if (!profileImage) {
        setFileError("Profile image is required");
        return;
      }
      const previousUserValues = JSON.parse(
        localStorage.getItem("uservalues1")
      );
      // const currentUser = {
      //   ...values,
      //   profileImage,
      //   ...previousUserValues,
      // };

      const userToSubmit = {
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
          years_of_experience: values.years_of_experience,
          specializations: values.specializations,
          portfolio: values.portfolioLink,
        },
      };

      console.log(userToSubmit);

      try {
        const response = await axios.post(
          `${BASE_URL}/auth/users/`,
          userToSubmit,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
      } catch (e) {
        console.log(e.message);
      }

      if (role === "designer") {
        navigate("/dashboard/designer-dashboard");
      } else {
        navigate("/dashboard/user-dashboard");
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
        <p>Complete your profile to start showcasing your work</p>

        <form onSubmit={formik.handleSubmit}>
          {/* Profile Image Upload using Dropzone */}
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {!profileImage ? (
              <div className="upload-container">
                <div className="upload-icon-wrapper">
                  <img src={uploadIcon} alt="Upload" width="30" height="30" />
                </div>
                <p className="upload-text">Click to upload or drag and drop</p>
                <p className="upload-file-info">
                  SVG, PNG, JPG, or GIF (max. 800x400px)
                </p>
              </div>
            ) : (
              <img
                src={profileImage}
                alt="Profile Preview"
                style={{ width: "100%", height: "100px", objectFit: "contain" }}
              />
            )}
          </div>
          {fileError && <p className="designer-error-message">{fileError}*</p>}

          {/* Address */}
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

          {/* Portfolio Link */}
          {role === "designer" && (
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
          )}

          {/* Bio */}
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

          {/* Years of Experience */}
          {role === "designer" && (
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
          )}

          {/* Specializations */}
          {role === "designer" && (
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
          )}

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

export default ProfileSetup;
