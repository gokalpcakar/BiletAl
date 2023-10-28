import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import mainLayout from "./mainLayout.module.css";

function MainLayout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <div className={mainLayout.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
