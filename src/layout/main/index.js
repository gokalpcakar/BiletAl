import Slider from "../../components/Slider";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import mainLayout from "../../assets/css/mainLayout.module.css"

function MainLayout({ children }) {
  return (
    <> <div className={mainLayout.mainContent}>
      <Navbar />
      <Slider />
      <div className={mainLayout.content} >
     {children}
        
      </div>
      <Footer />
      </div>
    </>
  );
}

export default MainLayout;
