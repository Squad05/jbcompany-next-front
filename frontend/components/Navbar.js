import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import styles from "../styles/Navbar.module.css";
import Link from "@mui/material/Link";
import Formulario from "./FormularioHome";
import Popover from "@mui/material/Popover";
import Logo from "./Logo";

const pages = ["Home", "Sobre", "Equipe", "Faq"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElForm, setAnchorElForm] = React.useState(null);
  const [formType, setFormType] = React.useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenForm = (event, tipo) => {
    setAnchorElForm(event.currentTarget);
    setFormType(tipo);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseForm = () => {
    setAnchorElForm(null);
  };

  return (
    <AppBar className={styles.navBar} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
            <button
              className={styles.botaoEstilo}
              onClick={handleOpenUserMenu}
              sx={{ p: 0 }}
            >
              LOGIN
            </button>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                onClick={(event) => {
                  handleCloseUserMenu();
                  handleOpenForm(event, "cadastrar");
                }}
              >
                <Typography textAlign="center">Cadastrar</Typography>
              </MenuItem>

              <MenuItem
                onClick={(event) => {
                  handleCloseUserMenu();
                  handleOpenForm(event, "entrar");
                }}
              >
                <Typography textAlign="center">Entrar</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Popover
            id="popover-form"
            open={Boolean(anchorElForm)}
            anchorEl={anchorElForm}
            onClose={handleCloseForm}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Formulario onClose={handleCloseForm} tipo={formType} />
          </Popover>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
