import React from "react";
import { Box, Card, CardContent, Typography, LinearProgress } from "@mui/material";

function ProgressCard({ title, value }) {
  return (
    <Card sx={{ backgroundColor: "#1E1E20", color: "#fff" }}>
      <CardContent>
        <Typography variant="subtitle1">{title}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <LinearProgress
            variant="determinate"
            value={parseInt(value)}
            sx={{ width: "100%", height: 8, borderRadius: 5, backgroundColor: "#333" }}
            color="success"
          />
          <Typography sx={{ ml: 1 }}>{value}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProgressCard;
