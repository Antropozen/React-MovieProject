import React from 'react';
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Header() {
  return <div>
      <AppBar position="static">
        <Toolbar>
          <LocalMoviesIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            <Link to="/">Movie</Link>
          </Typography>
          <Typography variant="h6" color="inherit" noWrap position="right">
            <Link to="/login">Login</Link>
          </Typography>
          <Typography variant="h6" color="inherit" noWrap position="right">
            <Link to="/register">Sign Up</Link>
          </Typography>
        </Toolbar>
      </AppBar>
  </div>;
}
