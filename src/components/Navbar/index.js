import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavbarDrawer from "./NavbarDrawer";
import SearchBar from "../SearchBar";
import { useAuth } from "../../context/AuthContext";
import AccountMenu from "./AccountMenu";
import NavbarButtonGroup from "./NavbarButtonGroup";
import NavbarTabs from "./NavbarTabs";
import NavbarBrand from "./NavbarBrand";
import { useEffect } from "react";

const Navbar = () => {
  const { loggedIn, login } = useAuth();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
 
 
  useEffect(() => {
    const localStorageLoggedIn = localStorage.getItem("loggedIn") === "true";
    if ({localStorageLoggedIn}) {
      const storedUser =JSON.parse(localStorage.getItem("loginData"));
      if (storedUser) {
        login(storedUser,localStorageLoggedIn);
      }
    }
  },[]);

  return (
    <>
      <AppBar sx={{ background: "#034f84" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <NavbarDrawer />
              <NavbarBrand />
              <SearchBar />
            </>
          ) : (
            <>
              <NavbarBrand />
              <NavbarTabs />
              <SearchBar />
            </>
          )}
          {!loggedIn && (
            <>
              <NavbarButtonGroup />
            </>
          )}
          {loggedIn && (
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
