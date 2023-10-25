import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Button from "@mui/material/Button";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from 'react-icons/ai';
import logo from "../../assets/images/logo1.png"
import SearchBar from "../SearchBar";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.left}>
          <button id="menuToggle" className={styles.menuIcon} onClick={toggleMenu}>
            <FiMenu />
          </button>



          <div className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ""}`}>
            <ul className={styles.menuList}>
              <button id="menuToggle" className={styles.closeIcon} onClick={toggleMenu}>
                <AiOutlineClose />
              </button>
              <li>
                <Link to="/" className={styles.logo}><img src={logo} alt="logo" /></Link>
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
                <Link to="/standup">Stand-Up</Link>
              </li>
              <li>
                <Link to="/theatre">Tiyatro</Link>
              </li>
              <li>
                <Link to="/pastevents">Geçmiş Etkinlikler</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <SearchBar />
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