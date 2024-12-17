import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Download, Settings } from "@mui/icons-material";

function DashboardHeader() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1C1C1E" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Boostify Dashboard
        </Typography>
        <Box>
          <Button startIcon={<Download />} sx={{ color: "#fff" }}>
            Download Report
          </Button>
          <Button startIcon={<Settings />} sx={{ color: "#fff" }}>
            AI Assistant
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default DashboardHeader;
