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
import logo from "../../assets/images/logo2.png"
import SearchBar from "../SearchBar";
import { useSearchContext } from "../../context/SearchContext";
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom"




const Navbar = () => {
  const {user,logout,loggedIn}=useAuth();
  const navigate=useNavigate();
  const [value, setValue] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const { setSearchResults, data,searchData } = useSearchContext();

  const handleClick = () => {
    setSearchResults(data);
  };
  const handleSearchClick=()=>{

    setSearchResults(searchData)

  }
  const handleLogout=async()=>{


    logout(()=>{

     navigate("/")

    });


}

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
              <Link to="/"onClick={handleClick}>
                <Box
                  component="img"
                  sx={{
                    height: 60,
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
                <Tab label="Anasayfa" component={Link} to="/" value="/" onClick={handleClick} />
                <Tab label="Konser" component={Link} to="/concert" value="/concert" onClick={handleSearchClick} />
                <Tab label="Festival" component={Link} to="/festival" value="/festival" onClick={handleSearchClick}  />
                <Tab label="Stand-Up" component={Link} to="/standup" value="/standup"  onClick={handleSearchClick} />
                <Tab label="Tiyatro" component={Link} to="/theatre" value="/theatre"  onClick={handleSearchClick} />
                <Tab label="Geçmiş Etkinlikler" component={Link} to="/pastevents" value="/pastevents" />
              </Tabs>
              <SearchBar />
            </>
          )}




{
      !loggedIn && (<>
      
      
      
      <Button sx={{
            marginLeft: "10px",
            backgroundColor: "#7BD8C0",
            color: "#034f84",
            "&:hover": {
              border: '1px solid #7BD8C0',
              color: '#7BD8C0',
              transition: '.5s',
              backgroundColor: '#034f84'
            }
          }} component={Link} to="/signin" variant="contained">
            Giriş Yap
          </Button>
          <Button sx={{
            marginLeft: "10px",
            backgroundColor: "#7BD8C0",
            color: "#034f84",
            transition: '.5s',
            "&:hover": {
              border: '1px solid #7BD8C0',
              color: '#7BD8C0',
              backgroundColor: '#034f84'
            }
          }} component={Link} to="/signup" variant="contained">
            Kaydol
          </Button>
      
      
       </>)}


       {loggedIn && (
      <> 
      
      <Button sx={{
            marginLeft: "10px",
            backgroundColor: "#7BD8C0",
            color: "#034f84",
            transition: '.5s',
            "&:hover": {
              border: '1px solid #7BD8C0',
              color: '#7BD8C0',
              backgroundColor: '#034f84'
            }
          }} component={Link} to="/admin" variant="contained">
            Admin 
          </Button>
      
         <Button sx={{
            marginLeft: "10px",
            backgroundColor: "#7BD8C0",
            color: "#034f84",
            transition: '.5s',
            "&:hover": {
              border: '1px solid #7BD8C0',
              color: '#7BD8C0',
              backgroundColor: '#034f84'
            }
          }} component={Link} to="/" variant="contained" onClick={handleLogout}>
          Çıkış Yap
          </Button>
      
       </>)}


         
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;