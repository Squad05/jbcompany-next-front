import styles from "../styles/Navbar.module.css";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import Logo from "./Logo";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const pages = ["Home", "Sobre", "Faq"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar className={styles.navBar} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    href={`#${page.toLowerCase()}`}
                    underline="none"
                    textAlign="center"
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Logo />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page.toLowerCase()}`}
                sx={{ my: 2, color: "white", display: "block" }}
                className={styles.itemNavBarEstilo}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link
              href="/auth/logar"
              className={styles.botaoEstilo}
              sx={{ p: 0 }}
            >
              LOGIN
            </Link>
          </Box>
          
        
          <Drawer
            className={styles.menuDrawer}
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerClose}
            variant="temporary"
          >
            <List className={styles.listaDrawer}>
              {pages.map((page) => (
                <ListItem className={styles.container_nome} key={page} onClick={handleDrawerClose}>
                  <Link
                    className={styles.nomeItemLista}
                    href={`#${page.toLowerCase()}`}
                    underline="none"
                    textAlign="center"
                  >
                    {page}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
