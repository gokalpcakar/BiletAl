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

const Navbar = () => {

  const { loggedIn } = useAuth();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

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