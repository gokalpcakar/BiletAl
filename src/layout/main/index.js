import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import mainLayout from "./mainLayout.module.css";
import ScrollToTop from "../../components/ScrollToTop";

function MainLayout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <div className={mainLayout.content}>{children}</div>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default MainLayout;
