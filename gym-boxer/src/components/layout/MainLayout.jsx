import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />

      <div className="app-wrapper">
        <Header />

        <main className="main-content">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;