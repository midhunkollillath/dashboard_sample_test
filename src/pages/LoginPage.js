import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Avatar,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  IconButton,
  Divider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      toast.success("Login successful!");
      navigate("/dashboard");
    } else {
      toast.error("Invalid username or password");
    }
  };

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Toaster />
      <Container maxWidth="xs">
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            backgroundColor: "#1f1f1f",
            color: "#ffffff",
            borderRadius: "12px",
          }}
        >
          {/* Logo and Header */}
          <Box textAlign="center" mb={2}>
            <Avatar sx={{ bgcolor: "#84d9c7", mx: "auto", mb: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Log In
            </Typography>
            <Typography variant="body2">
              Don’t have an account?{" "}
              <span style={{ color: "#84d9c7", cursor: "pointer" }}>
                Sign up
              </span>
            </Typography>
          </Box>

          {/* Form */}
          <Box component="form" onSubmit={handleLogin}>
            <TextField
              fullWidth
              variant="filled"
              placeholder="Email"
              InputProps={{ style: { color: "#fff" } }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                mb: 2,
                backgroundColor: "#2c2c2c",
                borderRadius: "8px",
                input: { color: "#fff" },
              }}
            />

            <TextField
              fullWidth
              variant="filled"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                style: { color: "#fff" },
                endAdornment: (
                  <IconButton onClick={handlePasswordToggle} edge="end">
                    {showPassword ? (
                      <VisibilityOff sx={{ color: "#fff" }} />
                    ) : (
                      <Visibility sx={{ color: "#fff" }} />
                    )}
                  </IconButton>
                ),
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                mb: 2,
                backgroundColor: "#2c2c2c",
                borderRadius: "8px",
                input: { color: "#fff" },
              }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#84d9c7",
                    "&.Mui-checked": { color: "#84d9c7" },
                  }}
                />
              }
              label={<Typography sx={{ color: "#fff" }}>Keep me signed in</Typography>}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                bgcolor: "#84d9c7",
                "&:hover": { bgcolor: "#6ec5b3" },
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Log In
            </Button>
          </Box>

          {/* Divider */}
          <Divider sx={{ backgroundColor: "#444", mb: 2 }}>
            <Typography sx={{ color: "#aaa" }}>Or sign in using:</Typography>
          </Divider>

          {/* Social Buttons */}
          <Box
            display="flex"
            justifyContent="center"
            gap={2}
            sx={{ mb: 2 }}
          >
            <Button
              variant="outlined"
              fullWidth
              sx={{
                color: "#ffffff",
                borderColor: "#84d9c7",
                "&:hover": { borderColor: "#6ec5b3" },
              }}
            >
              Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                color: "#ffffff",
                borderColor: "#1877f2",
                "&:hover": { borderColor: "#1466c2" },
              }}
            >
              Facebook
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
