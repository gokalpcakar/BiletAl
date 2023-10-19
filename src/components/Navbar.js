import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../assets/css/styles.module.css";
import Button from "@mui/material/Button";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from 'react-icons/ai';
import logo from "../assets/images/logo1.png"
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={Styles.nav}>
      <div className={Styles.navContainer}>
        <div className={Styles.right}>
          <button id="menuToggle" className={Styles.menuIcon} onClick={toggleMenu}>
            <FiMenu />
          </button>
        


          <div className={`${Styles.menu} ${isMenuOpen ? Styles.showMenu : ""}`}>
            <ul className={Styles.menuList}>
            <button id="menuToggle" className={Styles.closeIcon} onClick={toggleMenu}>
          <AiOutlineClose />
          </button>
          <li>
                <Link to="/" className={Styles.logo}><img src={logo} alt="logo" /></Link>
              </li>
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