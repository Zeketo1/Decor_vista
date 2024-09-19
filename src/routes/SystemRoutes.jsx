import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contactUs/Contact";
import { SignUp, Login, UserProfileSettings } from "../pages/auth/exports";
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
      </Routes>
    </BrowserRouter>
  );
};

export default SystemRoutes;
