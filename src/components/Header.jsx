// src/components/Header.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/images/pentacore.avif";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "HOME", key: "/", path: "/" },
    { label: "BUSINESS", key: "/business", path: "/business" },
    { label: "ABOUT US", key: "/about", path: "/about" },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "#ffffff", paddingX: 4 }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: "88px", // Fixed height
          minHeight: "88px !important", // Override any default MUI behavior
          display: "flex",
          justifyContent: "space-between",
          marginX: 4,
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="PentaCore Logo"
            style={{
              height: "64px",
              width: "auto",
              display: "block", // Prevents extra spacing
            }}
          />
        </Box>

        {/* Navigation & Button */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          {navItems.map((item) => (
            <Typography
              key={item.key}
              variant="body1"
              component={Link}
              to={item.path}
              sx={{
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "500",
                cursor: "pointer",
                color: location.pathname === item.path ? "#63003C" : "#000",
                borderBottom:
                  location.pathname === item.path
                    ? "2px solid #63003C"
                    : "none",
                paddingBottom: "4px",
                transition: "all 0.2s ease",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Typography>
          ))}

          {/* Contact Us Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0F1F44",
              borderRadius: "999px",
              paddingX: 3,
              paddingY: 1,
              fontSize: "13px",
              fontWeight: 300,
              textTransform: "uppercase",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#0c1938",
              },
            }}
            onClick={() => navigate("/contact")}
            endIcon={
              <ArrowForwardIosIcon sx={{ fontSize: 12, marginLeft: "4px" }} />
            }
          >
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
