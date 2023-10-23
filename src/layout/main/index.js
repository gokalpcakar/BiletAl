import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import mainLayout from "./mainLayout.module.css";

import SearchBar from "../../components/SearchBar";

function MainLayout({ children }) {
  return (
    <>
      <div>
        <Navbar />

        <SearchBar />
        <div className={mainLayout.content}>{children}</div>

        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
