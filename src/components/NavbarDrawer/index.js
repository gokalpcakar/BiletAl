import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages = ["Products", "Services", "ABoutUs", "ContactUs"];

const NavbarDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List
          sx={{ width: "300px", backgroundColor: "#034f84", height: "100%" }}
        >
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <ListItemText sx={{ color: "#fff" }}>Anasayfa</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to="/concert">
            <ListItemIcon>
              <ListItemText sx={{ color: "#fff" }}>Konser</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to="/festival">
            <ListItemIcon>
              <ListItemText sx={{ color: "#fff" }}>Festival</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to="/standup">
            <ListItemIcon>
              <ListItemText sx={{ color: "#fff" }}>Stand-Up</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to="/theatre">
            <ListItemIcon>
              <ListItemText sx={{ color: "#fff" }}>Tiyatro</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to="/pastevents">
            <ListItemIcon>
              <ListItemText sx={{ color: "#fff" }}>
                Geçmiş Etkinlikler
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#fff", marginRight: "10px" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="#fff" />
      </IconButton>
    </>
  );
};
export default NavbarDrawer;
