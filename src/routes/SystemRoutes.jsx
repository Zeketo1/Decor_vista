import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contactUs/Contact";
import {
  SignUp,
  Login,
  UserProfileSettings,
  DesignerProfileSetup,
} from "../pages/auth/exports";
import DesignerDashboard from "../pages/dashboard/DesignerDashBoard";
const SystemRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
        <Route
          path="/auth/user-profile-settings"
          element={<UserProfileSettings />}
        />
        <Route
          path="/auth/designer-profile-settings"
          element={<DesignerProfileSetup />}
        />
        <Route
          path="/auth/designer-dashboard"
          element={<DesignerDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default SystemRoutes;
