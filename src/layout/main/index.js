import { Outlet } from "react-router-dom";
import Slider from "../../components/Slider";
import Navbar from "../../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Slider />
      <Outlet />
    </>
  );
}

export default MainLayout;
