import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  IconButton,
  Chip,
  Slide,
  Fade,
  Grow,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  People,
  BarChart,
  Nature,
  ArrowForward,
  Instagram,
  Facebook,
  YouTube,
  LinkedIn,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";

import coreValuesImage from "../assets/images/core-values.jpg";

// Create custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1e3a8a",
      dark: "#1e293b",
    },
    secondary: {
      main: "#b8860b",
    },
    background: {
      default: "#f8fafc",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.2,
      "@media (max-width:768px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.3,
      "@media (max-width:768px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      "@media (max-width:768px)": {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: 600,
          padding: "12px 32px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

// Masonry Image Layout Component
const MasonryImageLayout = () => {
  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      title: "Financial Analytics",
      size: "large", // Takes more space
      gridArea: { xs: "auto", md: "1 / 1 / 3 / 3" },
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
      title: "Technology Innovation",
      size: "medium",
      gridArea: { xs: "auto", md: "1 / 3 / 2 / 5" },
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
      title: "Global Markets",
      size: "medium",
      gridArea: { xs: "auto", md: "2 / 3 / 3 / 5" },
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
      title: "Investment Strategy",
      size: "small",
      gridArea: { xs: "auto", md: "1 / 5 / 2 / 6" },
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
      title: "Business Growth",
      size: "tall",
      gridArea: { xs: "auto", md: "2 / 5 / 4 / 6" },
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg",
      title: "Digital Transformation",
      size: "wide",
      gridArea: { xs: "auto", md: "3 / 1 / 4 / 4" },
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg",
      title: "Real Estate",
      size: "medium",
      gridArea: { xs: "auto", md: "3 / 4 / 4 / 5" },
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#f8fafc",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box textAlign="center" sx={{ mb: 6 }}>
          <Chip
            label="OUR PORTFOLIO"
            sx={{
              backgroundColor: "#fef3c7",
              color: "#b45309",
              fontWeight: 600,
              mb: 3,
              px: 2,
              py: 1,
              fontSize: "0.9rem",
            }}
          />
          <Typography
            variant="h2"
            color="primary"
            sx={{
              mb: 2,
              fontWeight: 700,
            }}
          >
            Investment Excellence
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "1.1rem", md: "1.25rem" },
            }}
          >
            Discover our diverse portfolio of strategic investments across
            multiple sectors
          </Typography>
        </Box>

        {/* Masonry Grid Layout */}
        <Box
          sx={{
            display: { xs: "flex", md: "grid" },
            flexDirection: { xs: "column", md: "unset" },
            gridTemplateColumns: { md: "repeat(5, 1fr)" },
            gridTemplateRows: { md: "repeat(3, 200px)" },
            gap: 2,
            height: { xs: "auto", md: "620px" },
          }}
        >
          {images.map((image, index) => (
            <Box
              key={image.id}
              sx={{
                gridArea: image.gridArea,
                height: { xs: "250px", md: "auto" },
                position: "relative",
                overflow: "hidden",
                borderRadius: 3,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  zIndex: 2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  "& .overlay": {
                    opacity: 1,
                  },
                  "& .title": {
                    transform: "translateY(0)",
                    opacity: 1,
                  },
                },
              }}
            >
              {/* Background Image */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.9)",
                }}
              />

              {/* Gradient Overlay */}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(30,58,138,0.7), rgba(59,130,246,0.5))",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
              />

              {/* Content */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                  color: "white",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                }}
              >
                <Typography
                  className="title"
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    transform: "translateY(20px)",
                    opacity: 0,
                    transition: "all 0.3s ease",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  {image.title}
                </Typography>

                {/* Decorative Line */}
                <Box
                  sx={{
                    width: 40,
                    height: 2,
                    backgroundColor: "#b8860b",
                    mt: 1,
                    borderRadius: 1,
                  }}
                />
              </Box>

              {/* Corner Number Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1e3a8a",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  backdropFilter: "blur(10px)",
                }}
              >
                {index + 1}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Bottom Stats */}
        <Grid container spacing={4} sx={{ mt: 8 }}>
          {[
            { number: "250M+", label: "Assets Under Management" },
            { number: "50+", label: "Portfolio Companies" },
            { number: "15+", label: "Countries" },
            { number: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontWeight: 500 }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box textAlign="center" sx={{ mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              background: "linear-gradient(45deg, #1e3a8a 30%, #3b82f6 90%)",
              boxShadow: "0 8px 25px rgba(30, 58, 138, 0.3)",
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 12px 35px rgba(30, 58, 138, 0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            VIEW ALL INVESTMENTS
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          py: { xs: 4, md: 8 },
        }}
      >
        <Container maxWidth="xl">
          <Box textAlign="center" sx={{ py: { xs: 4, md: 8 } }}>
            <Chip
              label="ABOUT PENTACORE"
              sx={{
                backgroundColor: "#fef3c7",
                color: "#b45309",
                fontWeight: 600,
                mb: 4,
                px: 2,
                py: 1,
                fontSize: "0.9rem",
              }}
            />
            <Typography
              variant="h1"
              color="primary"
              sx={{
                mb: 3,
                maxWidth: "900px",
                mx: "auto",
              }}
            >
              Strategic Investments. Global Vision.
              <br />
              Sustainable Growth.
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                mb: 5,
                maxWidth: "600px",
                mx: "auto",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
              }}
            >
              Empowering Innovation, Enabling Progress
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                background: "linear-gradient(45deg, #1e3a8a 30%, #3b82f6 90%)",
                boxShadow: "0 8px 25px rgba(30, 58, 138, 0.3)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 35px rgba(30, 58, 138, 0.4)",
                },
                transition: "all 0.3s ease",
              }}
            >
              CONTACT US
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Masonry Image Layout Section */}
      <MasonryImageLayout />

      {/* Who We Are Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* LEFT SIDE (Image) */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: { xs: 300, md: 500 },
                  borderRadius: 4,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  backgroundImage: `url(${coreValuesImage})`,
                }}
              />
            </Grid>

            {/* RIGHT SIDE (Content) */}
            <Grid item xs={12} md={6}>
              <Typography variant="h2" color="primary" sx={{ mb: 4 }}>
                Who we are
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Pentacore Holdings is a strategic investment platform committed
                to driving growth across industries shaping the future.
                Headquartered in Dubai International Financial Centre (DIFC), we
                leverage the UAE's business-friendly ecosystem and regional
                leadership to build a resilient, diversified portfolio. Our
                focus areas include biotechnology, information technology, food
                processing, retail, and select emerging industries. In addition
                to investments, Pentacore also offers headquarter services,
                treasury management, and financial solutions for its group
                companies.
              </Typography>

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
                    Our Vision
                  </Typography>
                  <Box
                    sx={{
                      height: 3,
                      width: 60,
                      backgroundColor: "primary.main",
                      mb: 2,
                    }}
                  />
                  <Typography variant="body1" color="text.secondary">
                    To be the leading investment holding company in the region,
                    known for innovative strategies, sustainable growth, and
                    excellence.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h4"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Our Mission
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Driving strategic investments that create lasting value
                    while fostering innovation and sustainable business
                    practices.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Location Advantage Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8fafc" }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" color="primary" sx={{ mb: 4 }}>
                Location Advantage
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                }}
              >
                Operating from Dubai International Financial Centre (DIFC),
                Pentacore Holdings benefits from world-class regulatory,
                financial, and business infrastructure — positioning us to
                capture opportunities across the UAE, MENA region, and global
                markets.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: { xs: 300, md: 400 },
                  borderRadius: 4,
                  backgroundImage:
                    "url(https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {[
              {
                icon: <People sx={{ fontSize: 40 }} />,
                title: "Leadership",
                description:
                  "Guided by Experience. Driven by Vision. Pentacore Holdings is led by a team of experienced professionals with expertise across investments, technology, operations, and business management. Our leadership blends strategic foresight with operational excellence to build sustainable value.",
              },
              {
                icon: <BarChart sx={{ fontSize: 40 }} />,
                title: "Headquarter & Treasury Services",
                description:
                  "In addition to investments, Pentacore Holdings provides centralized headquarter services, treasury management, and financial oversight for its group companies, ensuring capital efficiency, governance alignment, and operational synergy across its portfolio.",
              },
              {
                icon: <Nature sx={{ fontSize: 40 }} />,
                title: "Sustainability & Responsibility",
                description:
                  "We are committed to responsible and ethical business practices. Across all sectors, Pentacore Holdings emphasizes sustainable growth, strong governance, and long-term value creation contributing to broader national and global sustainability goals.",
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    p: 3,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        backgroundColor: "#b8860b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        mb: 3,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: "linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%)",
          borderRadius: { xs: "20px 20px 0 0", md: "40px 40px 0 0" },
          mt: 6,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ color: "white" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Phone sx={{ mr: 2 }} />
                  <Typography variant="h6">+971 (0) 4 824 5784</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Email sx={{ mr: 2 }} />
                  <Typography variant="h6">info@pentacore.ae</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}>
                  <LocationOn sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6">
                      Office No. 2207, Emirates Financial Towers
                    </Typography>
                    <Typography variant="body1" color="rgba(255,255,255,0.8)">
                      DIFC, Dubai, UAE, +971 (0) 4 824 5784
                    </Typography>
                    <Typography variant="body1" color="rgba(255,255,255,0.8)">
                      www.pentacore.ae
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="h5" sx={{ mb: 3 }}>
                  Business Sectors
                </Typography>
                {["Cincobit Technology", "Venta Distribution", "Qiuntech"].map(
                  (sector, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      color="rgba(255,255,255,0.8)"
                      sx={{ mb: 1 }}
                    >
                      › {sector}
                    </Typography>
                  )
                )}
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ color: "white" }}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Name
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Full Name"
                  variant="outlined"
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white",
                      borderRadius: 2,
                    },
                  }}
                />

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Phone Number
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="+12 345 678 90"
                      variant="outlined"
                      sx={{
                        mb: 3,
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "white",
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Email Address
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="yourname@gmail.com"
                      variant="outlined"
                      sx={{
                        mb: 3,
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "white",
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Typography variant="h6" sx={{ mb: 1 }}>
                  Message
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Write your message here"
                  variant="outlined"
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white",
                      borderRadius: 2,
                    },
                  }}
                />

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    backgroundColor: "#3b82f6",
                    borderRadius: 3,
                    py: 2,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#2563eb",
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
