import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;