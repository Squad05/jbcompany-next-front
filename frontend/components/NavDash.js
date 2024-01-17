import * as React from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Logo from "./Logo";
import LogoutService from "@/services/auth/LougotService";
import styles from "../styles/Navdash.module.css";

const NavDash = () => {
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleMenu = (event) => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    LogoutService.logout();

    router.push("/");
  };

  const userAvatar = "/caminho/para/imagem.jpg";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          className={styles.estilo_navdash}
          sx={{ justifyContent: "space-between" }}
        >
          <IconButton
            className={styles.caixa_botao_menu}
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon className={styles.botao_menu} />
          </IconButton>
          <Drawer
            className={styles.menu_lateral}
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerClose}
            variant="temporary"
          >
            <List>
              <ListItem onClick={() => router.push("/dashboard/home")}>
                <ListItemText primary="Inicio" />
              </ListItem>
              <ListItem onClick={() => router.push("/dashboard/cursos")}>
                <ListItemText primary="Cursos" />
              </ListItem>
              <ListItem onClick={() => router.push("/dashboard/vagas")}>
                <ListItemText primary="Vagas" />
              </ListItem>
              <ListItem onClick={() => router.push("/dashboard/configuracoes")}>
                <ListItemText primary="Configurações" />
              </ListItem>
              <Divider />
              <ListItem onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Drawer>
          <Logo sx={{ flex: 1 }} />
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt="User Avatar" src={userAvatar} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavDash;
