import {
  AppBar,
  Toolbar,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavbarDrawer from "../NavbarDrawer";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo2.png"
import SearchBar from "../SearchBar";
import { useSearchContext } from "../../context/SearchContext";
import { useAuth } from "../../context/AuthContext";
import AccountMenu from "./AccountMenu";
import NavbarButtonGroup from "./NavbarButtonGroup";
import NavbarTabs from "./NavbarTabs";

const Navbar = () => {

  const { loggedIn } = useAuth();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const { setSearchResults, data, searchData } = useSearchContext();

  const handleClick = () => {
    setSearchResults(data);
  };

  return (
    <>
      <AppBar sx={{ background: "#034f84" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <NavbarDrawer />
              <Link to="/" >
                <Box
                  component="img"
                  sx={{
                    height: 60,
                    marginRight: "10px"
                  }}
                  alt="Your logo."
                  src={logo}
                />
              </Link>
              <SearchBar />
            </>
          ) : (
            <>
              <Link to="/" onClick={handleClick}>
                <Box
                  component="img"
                  sx={{
                    height: 60,
                  }}
                  alt="Your logo."
                  src={logo}
                />
              </Link>
              <NavbarTabs />
              <SearchBar />
            </>
          )}
          {
            !loggedIn && (<>
              <NavbarButtonGroup />
            </>
            )}
          {
            loggedIn && (
              <>
                <AccountMenu />
              </>
            )}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;