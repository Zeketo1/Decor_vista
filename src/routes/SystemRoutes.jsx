import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contactUs/Contact";
import Cart from "../pages/cart/Cart";
import DesignerDashboard from "../pages/dashboard/DesignerDashBoard";
import UserDashBoard from "../pages/dashboard/UserDashBoard";
import DashBoardLayout from "../pages/dashboard/components/DashBoardLayout";
import ClientRequestsPage from "../pages/dashboard/pages/ClientRequestPage";
import { Login, SignUp } from "../pages/auth/exports";
import DesignerProfileSetup from "../pages/auth/registration/designer-profile-settings";
import UserProfileSetup from "../pages/auth/registration/user-profile-setting";
// import { ProfileSettings } from "../pages/auth/exports";
import Gallery from "../pages/gallery/Gallery";

const SystemRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
        <Route
          path="/auth/designer-profile-settings"
          element={<DesignerProfileSetup />}
        />
        <Route
          path="/auth/user-profile-settings"
          element={<UserProfileSetup />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dashboard/*" element={<DashBoardLayout />}>
          <Route path="user-dashboard" element={<UserDashBoard />} />
          <Route path="designer-dashboard" element={<DesignerDashboard />} />
          <Route
            path="designer-dashboard/client-requests"
            element={<ClientRequestsPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SystemRoutes;
