import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contactUs/Contact";
import { SignUp, Login, DesignerProfileSetup } from "../pages/auth/exports";
import DesignerDashboard from "../pages/dashboard/DesignerDashBoard";
import UserDashBoard from "../pages/dashboard/UserDashBoard";
import DashBoardLayout from "../pages/dashboard/components/DashBoardLayout";
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
          path="/auth/profile-settings"
          element={<DesignerProfileSetup />}
        />
        <Route path="/dashboard/*" element={<DashBoardLayout />}>
          <Route path="user-dashboard" element={<UserDashBoard />} />
          <Route path="designer-dashboard" element={<DesignerDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SystemRoutes;
