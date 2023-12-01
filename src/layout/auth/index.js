import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./style.module.css";

function AuthLayout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default AuthLayout;
