import { Outlet } from "react-router-dom";
import Slider from "../../components/Slider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Slider />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
