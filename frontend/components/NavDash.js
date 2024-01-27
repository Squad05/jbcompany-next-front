import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Logo from "./Logo";
import LogoutService from "@/services/auth/LougotService";
import styles from "../styles/Navdash.module.css";
import UserService from "@/services/UserService";

const NavDash = () => {
  const [fotoUsuario, setFotoUsuario] = useState(null);
  const [nomeUsuario, setNomeUsuario] = useState("");

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


  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const userToken = localStorage.getItem("token");
        const detalhesUsuario = await UserService.detalhesUsuario(userToken);
        setNomeUsuario(detalhesUsuario.nome);

        if (detalhesUsuario.foto == null) {
          setFotoUsuario("oi.png");
        } else {
          setFotoUsuario(detalhesUsuario.foto);
        }
      } catch (error) {
        console.error("Erro ao obter detalhes do usuário:", error);
      }
    };

    fetchUsuario();
  }, []);


  const menuItems = [
    {
      text: "Inicio",
      icon: <HomeIcon />,
      onClick: () => router.push("/dashboard/home"),
    },
    {
      text: "Cursos",
      icon: <SchoolIcon />,
      onClick: () => router.push("/dashboard/cursos"),
    },
    {
      text: "Vagas",
      icon: <WorkIcon />,
      onClick: () => router.push("/dashboard/vagas"),
    },
    {
      text: "Configurações",
      icon: <SettingsIcon />,
      onClick: () => router.push("/dashboard/configuracoes"),
    },
  ];

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
          >
            <MenuIcon className={styles.botao_menu} />
          </IconButton>
          <Drawer
            className={`${styles.menuDrawer}`}
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerClose}
            variant="temporary"
          >
            <List className={`${styles.listaDrawer}`}>
              {menuItems.map((item, index) => (
                <ListItem
                  key={index}
                  onClick={item.onClick}
                  className={styles.container_nome}
                >
                  {item.icon && (
                    <Avatar className={styles.containericon}>
                      {item.icon}
                    </Avatar>
                  )}
                  <ListItemText
                    primary={item.text}
                    className={styles.nomeItemLista}
                  />
                </ListItem>
              ))}
              <ListItem
                onClick={handleLogout}
                className={styles.container_logout}
              >
                <Avatar className={styles.containericon}>
                  <ExitToAppIcon />
                </Avatar>
                <ListItemText
                  primary="Logout"
                  className={styles.nomeItemLista}
                />
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
              <Avatar alt="User Avatar" src={fotoUsuario} >{nomeUsuario.slice(0, 2).toUpperCase()}</Avatar>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavDash;
