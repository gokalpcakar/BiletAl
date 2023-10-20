import React from "react";
import SignIn from "../../pages/SignIn";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";



function SignInLayout({ children }) {
  return (
    <> 
        <Navbar />
        <SignIn />
        <Footer />
    </>
  );
}

export default SignInLayout;
