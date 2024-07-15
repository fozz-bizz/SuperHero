import { SelfImprovement } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorELNav] = useState();
  const handleOpenNavMenu = (event) => {
    setAnchorELNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorELNav(null);
  };
  const handleClickNavMenu = (menuItem) => {
    setAnchorELNav(null);
    navigate(`/${menuItem}`);
  };

  return (
    <AppBar position="static">
      <Toolbar
        disableGutters
        sx={{
          padding: "0 24px",
          justifyContent: { xs: "space-between", md: "flex-start" }
        }}
      >
        <SelfImprovement sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none"
          }}
        >
          SuperHero
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            key={"search"}
            sx={{ my: 2, color: "white" }}
            onClick={() => handleClickNavMenu("search")}
          >
            Search
          </Button>
          <Button
            key={"detail"}
            sx={{ my: 2, color: "white" }}
            onClick={() => handleClickNavMenu("detail")}
          >
            Detail
          </Button>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem
              key={"drug-search"}
              onClick={() => handleClickNavMenu("search")}
            >
              SuperHero Search
            </MenuItem>
            <MenuItem
              key={"drug-detail"}
              onClick={() => handleClickNavMenu("detail")}
            >
              Drug Detail
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <SelfImprovement
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            SuperHero
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
