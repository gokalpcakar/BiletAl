import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

const NavContainer = styled(Container)({
  marginTop: "20px",
});

function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" sx={{ background: "#fff" }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/">
              <Typography variant={windowWidth <= 768 ? "h6" : "h5"} sx={{ fontWeight: "bold", color: "#2e7d32", textDecoration: "none" }}>
                Bilet Al
              </Typography>
            </Link>
            {windowWidth <= 768 ? (
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Link to="/uye-ol">
                  <Button variant="contained" color="success" size="small">
                    Üye Ol
                  </Button>
                </Link>
                <Link to="/uye-girisi">
                  <Button variant="contained" color="success" size="small">
                    Üye Girişi
                  </Button>
                </Link>
                <Button variant="contained" color="success" onClick={toggleMenu} size="small">
                  <MenuIcon />
                </Button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "20px" }}>
                <Link to="/uye-ol">
                  <Button variant="contained" color="success" size="small">
                    Kaydol
                  </Button>
                </Link>
                <Link to="/uye-girisi">
                  <Button variant="contained" color="success" size="small">
                    Giriş Yap
                  </Button>
                </Link>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
        <div
          style={{
            width: "250px",
            backgroundColor: "#66bb6a",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <nav>
            <ul>
              <li>
                <Link to="/concert">
                  <Typography variant="h5" onClick={closeDrawer}>
                    Konser
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to="/theatre">
                  <Typography variant="h5" onClick={closeDrawer}>
                    Tiyatro
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to="/festival">
                  <Typography variant="h5" onClick={closeDrawer}>
                    Festival
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to="/stand-up">
                  <Typography variant="h5" onClick={closeDrawer}>
                    Stand-Up
                  </Typography>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Drawer>
      <NavContainer>
        <Outlet />
      </NavContainer>
    </div>
  );
}

export default MainLayout;
