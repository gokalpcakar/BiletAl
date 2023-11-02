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
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';




const Navbar = () => {
  const { user, logout, loggedIn } = useAuth();
  const navigate = useNavigate();
  const [value, setValue] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const { setSearchResults, data, searchData } = useSearchContext();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleAnchor = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    setSearchResults(data);
  };
  const handleSearchClick = () => {

    setSearchResults(searchData)

  }
  const handleLogout = async () => {


    logout(() => {

      handleClose()
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
              <Tabs
                sx={{ marginLeft: "25px", marginRight: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Anasayfa" component={Link} to="/" value="/" onClick={handleClick} />
                <Tab label="Konser" component={Link} to="/concert" value="/concert" onClick={handleSearchClick} />
                <Tab label="Festival" component={Link} to="/festival" value="/festival" onClick={handleSearchClick} />
                <Tab label="Stand-Up" component={Link} to="/standup" value="/standup" onClick={handleSearchClick} />
                <Tab label="Tiyatro" component={Link} to="/theatre" value="/theatre" onClick={handleSearchClick} />
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
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip>
                  <IconButton
                    onClick={handleAnchor}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose}>
                  Profile
                </MenuItem>
                <MenuItem component={Link} to="/admin" onClick={handleClose}>
                  Admin
                </MenuItem>
                <Divider />
                <MenuItem component={Link} to="/" variant="contained" onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>

            </>)}



        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;