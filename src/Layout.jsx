import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageTitleUpdater from "./Components/TitleUpdater/TitleUpdater";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const Layout = () => {
  const outletRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (outletRef.current) {
      outletRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div className="xl:w-screen overflow-x-hidden">
      <PageTitleUpdater />
      <Header />
      <section ref={outletRef}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
