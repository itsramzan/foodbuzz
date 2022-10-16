import React, { useEffect } from "react";
import { useHref } from "react-router-dom";
import scrollTop from "../../utils/scrollTop";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import ScrollTop from "../Shared/ScrollTop";

const Layout = ({ children }) => {
  const href = useHref();

  useEffect(() => {
    scrollTop();
  }, [href]);

  return (
    <div className="min-h-screen grid grid-cols-12 grid-rows-[auto,1fr,auto] bg-white">
      <Navbar />
      <div className="col-span-12 px-4 py-4 md:px-32">{children}</div>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Layout;
