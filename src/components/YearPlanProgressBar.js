import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

function YearPlanProgressBar({ current, left }) {
  const progress = (current / (current + left)) * 100;

  return (
    <Box sx={{ backgroundColor: "#1E1E20", p: 3, borderRadius: 1 }}>
      <Typography variant="h6">Corporate Year Plan</Typography>
      <Typography>Current Result: ${current.toLocaleString()}</Typography>
      <Typography>Left Path: ${left.toLocaleString()}</Typography>
      <Box sx={{ mt: 2 }}>
        <LinearProgress variant="determinate" value={progress} color="success" />
      </Box>
    </Box>
  );
}

export default YearPlanProgressBar;
