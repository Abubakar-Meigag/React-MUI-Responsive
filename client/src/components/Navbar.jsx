import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import React from "react";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

function Navbar() {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">
              LAMA DEV 
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
