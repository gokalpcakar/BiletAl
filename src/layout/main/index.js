
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import mainLayout from "./mainLayout.module.css";
import SearchContext from '../../context/SearchContext'
import SearchBar from "../../components/SearchBar";

function MainLayout({ children }) {

  const [searchResults, setSearchResults] = useState([]);

  const data = {
    searchResults,
    setSearchResults
  }

  return (
    <>
      <div>
        <Navbar />
        <SearchContext.Provider value={data}>
          <SearchBar />
          <div className={mainLayout.content} >
            {children}
          </div>
        </SearchContext.Provider>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
