import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Cart from "../pages/cart/Cart";
import { Login, SignUp } from "../pages/auth/exports";
import DesignerProfileSetup from "../pages/auth/registration/designer-profile-settings";
import UserProfileSetup from "../pages/auth/registration/user-profile-setting";
import Gallery from "../pages/gallery/Gallery";
import UserDashboard from "../pages/dashboards/user/UserDashboard";
import Contact from "../pages/contactus/Contact";
import DashBoardLayout from "../pages/dashboards/components/DashBoardLayout";
import ClientRequestsPage from "../pages/dashboards/designer/pages/ClientRequestPage";
import DesignerDashboard from "../pages/dashboards/designer/DesignerDashBoard";
import GalleryProvider from "../context/gallery/GalleryProvider";
const SystemRoutes = () => (
  <GalleryProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/gallery" element={<Gallery />} />

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
        <Route path="/dashboard/*" element={<DashBoardLayout />}>
          <Route path="user-dashboard" element={<UserDashboard />} />
          <Route path="designer-dashboard" element={<DesignerDashboard />} />
          <Route
            path="designer-dashboard/client-requests"
            element={<ClientRequestsPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </GalleryProvider>
);

export default SystemRoutes;
