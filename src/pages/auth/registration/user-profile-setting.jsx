import "../../../styles/auth/profile-set-up.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import uploadIcon from "../../../assets/icons/upload.svg";
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

  const [profileImageFile, setProfileImageFile] = useState(null); // Store file object
  const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(false);

  // Use React Dropzone for image uploading
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
      "image/svg+xml": [],
    },
    maxSize: 800000, // 800KB limit
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length) {
        const file = acceptedFiles[0];

        if (file.size > 800000) {
          // Validate image size
          setFileError(
            "Image size exceeds 800KB. Please upload a smaller image."
          );
          return;
        }
        setProfileImageFile(file); // Store the file object
        setFileError("");
      } else {
        setFileError("Please upload a valid image.");
      }
    },
  });

  const formik = useFormik({
    initialValues: {
      address: "",
      contact_number: "",
      password: "", // Add password field
    },
    validationSchema: Yup.object({
      address: Yup.string().required("Address is required"),
      contact_number: Yup.string().required("Contact number is required"),
      password: Yup.string().required("Password is required"), // Require password
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("username", previousUserValues.username);
      formData.append("password", previousUserValues.password);
      formData.append("re_password", previousUserValues.password);
      formData.append("email", previousUserValues.email);
      formData.append("role", previousUserValues.role);

      // Append user details
      formData.append("user_details[contact_number]", values.contact_number);
      formData.append("user_details[address]", values.address);

      // Append profile image file if available
      if (profileImageFile) {
        formData.append("user_details[profile_picture]", profileImageFile);
      }

      // Append designer details if applicable
      formData.append("designer_details[address]", values.address);
      formData.append("designer_details[bio]", values.bio);
      formData.append(
        "designer_details[contact_number]",
        values.contact_number
      );
      formData.append(
        "designer_details[years_of_experience]",
        values.years_of_experience
      );
      formData.append(
        "designer_details[specializations]",
        values.specializations
      );
      formData.append("designer_details[portfolio]", values.portfolioLink);

      setLoading(true);
      try {
        const response = await axios.post(`${BASE_URL}/auth/users/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure multipart/form-data is set
          },
        });
        console.log(response.data);
        navigate("/dashboard/user-dashboard"); // Navigate after successful submission
      } catch (e) {
        console.log(e.response?.data || e.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <motion.div className="user-profile-setup-container">
      <motion.div
        className="user-profile-form-wrapper"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 style={{ color: "var(--red-200)" }}>
          Welcome, Complete Your Profile
        </h2>
        <p>Complete your profile to start using our services</p>

        <form onSubmit={formik.handleSubmit}>
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {profileImageFile ? (
              <img
                src={URL.createObjectURL(profileImageFile)}
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
          {fileError && <p className="user-error-message">{fileError}*</p>}

          <div className="user-input-group">
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
              <p className="user-error-message">{formik.errors.address}*</p>
            )}
          </div>

          <div className="user-input-group">
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
              <p className="user-error-message">
                {formik.errors.contact_number}*
              </p>
            )}
          </div>

          <div className="user-input-group">
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
              <p className="user-error-message">{formik.errors.password}*</p>
            )}
          </div>

          <div className="user-submit-region">
            <button
              type="submit"
              className="user-submit-btn"
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
