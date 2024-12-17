import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

function StatCard({ title, value, percentage }) {
  return (
    <Card sx={{ backgroundColor: "#1E1E20", color: "#fff" }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography variant="h4">{value}</Typography>
          <Typography color={percentage.startsWith("+") ? "success.light" : "error.light"}>
            {percentage}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StatCard;
