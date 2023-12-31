import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#9E768F" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Link to={"/compras"} style={{ textDecoration: "none", color: "#9E768F" }}>
              <MenuItem onClick={handleClose}>Compras</MenuItem>
            </Link>
            <Link to={"/gastos"} style={{ textDecoration: "none", color: "#9E768F" }}>
              <MenuItem onClick={handleClose}>Gastos</MenuItem>
            </Link>
            <Link to={"/pendientes"} style={{ textDecoration: "none", color: "#9E768F" }}>
              <MenuItem onClick={handleClose}>Pendientes</MenuItem>
            </Link>
          </Menu>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home

            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
