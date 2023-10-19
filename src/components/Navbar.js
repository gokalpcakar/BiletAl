import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../assets/css/styles.module.css";
import Button from "@mui/material/Button";
import { FiMenu } from "react-icons/fi";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <nav className={Styles.nav}>
      <div className={Styles.navContainer}>
        <div className={Styles.right}>
          <button id="menuToggle" onClick={handleMenuToggle} className={Styles.menuIcon}>
            <FiMenu />
          </button>

          <div className={Styles.menu} >
            <ul>
              <li>
                <Link to="/">Anasayfa</Link>
              </li>
              <li>
                <Link to="/concert">Konser</Link>
              </li>
              <li>
                <Link to="/festival">Festival</Link>
              </li>
              <li>
                <Link to="/stand-up">Stand-Up</Link>
              </li>
              <li>
                <Link to="/theatre">Tiyatro</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={Styles.right}>
          <Link to="/signin">
            <Button variant="contained" color="success" size="medium">
              Giriş Yap
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="contained" color="success" size="medium">
              Kaydol
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
