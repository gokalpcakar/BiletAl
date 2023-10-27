import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavbarDrawer from "../NavbarDrawer";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo1.png"
import SearchBar from "../SearchBar";
const Navbar = () => {
  const [value, setValue] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <AppBar sx={{ background: "#034f84" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <NavbarDrawer />
              <Link to="/">
                <Box
                  component="img"
                  sx={{
                    height: 45,
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
              <Link to="/">
                <Box
                  component="img"
                  sx={{
                    height: 45,
                  }}
                  alt="Your logo."
                  src={logo}
                />
              </Link>
              <Tabs
                sx={{ marginLeft: "25px", marginRight: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Anasayfa" component={Link} to="/" value="/" />
                <Tab label="Konser" component={Link} to="/concert" value="/concert" />
                <Tab label="Festival" component={Link} to="/festival" value="/festival" />
                <Tab label="Stand-Up" component={Link} to="/standup" value="/standup" />
                <Tab label="Tiyatro" component={Link} to="/theatre" value="/theatre" />
                <Tab label="Geçmiş Etkinlikler" component={Link} to="/pastevents" value="/pastevents" />
              </Tabs>
              <SearchBar />
            </>
          )}
          <Button sx={{ marginLeft: "10px", backgroundColor: "#7BD8C0", color: "#034f84" }} variant="contained">
            Login
          </Button>
          <Button sx={{ marginLeft: "10px", backgroundColor: "#7BD8C0", color: "#034f84" }} variant="contained">
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;