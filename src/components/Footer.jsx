import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  ChevronRight,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ p: 2, m: 2 }}>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#0f1d4d",
          color: "#fff",
          borderRadius: "32px",
          overflow: "hidden",
          px: 3,
          py: 4,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Phone fontSize="small" />
                  <Typography variant="body2">+971 (0) 4 824 5784</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Email fontSize="small" />
                  <Typography variant="body2">info@pentacore.ae</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <LocationOn fontSize="small" sx={{ mt: "2px" }} />
                  <Box>
                    <Typography variant="body2">
                      Office No. 2207, Emirates Financial Towers
                      <br />
                      DIFC, Dubai, UAE, +971 (0) 4 824 5784
                    </Typography>
                    <Typography variant="body2">www.pentacore.ae</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Business Sectors */}
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Business Sectors
              </Typography>
              {["Cincobit Technology", "Venta Distribution", "Qiuntech"].map(
                (item, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
                    <ChevronRight fontSize="small" />
                    <Typography variant="body2">{item}</Typography>
                  </Box>
                )
              )}
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Name
              </Typography>
              <TextField
                fullWidth
                placeholder="Full Name"
                variant="filled"
                hiddenLabel
                sx={{
                  mb: 2,
                  backgroundColor: "#fff",
                  borderRadius: 1,
                }}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Phone Number
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="+12 345 678 90"
                    variant="filled"
                    hiddenLabel
                    sx={{
                      mt: 1,
                      backgroundColor: "#fff",
                      borderRadius: 1,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Email Address
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="yourname@gmail.com"
                    variant="filled"
                    hiddenLabel
                    sx={{
                      mt: 1,
                      backgroundColor: "#fff",
                      borderRadius: 1,
                    }}
                  />
                </Grid>
              </Grid>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 2 }}>
                Message
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Write your message here"
                variant="filled"
                hiddenLabel
                sx={{
                  mt: 1,
                  backgroundColor: "#fff",
                  borderRadius: 1,
                }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  py: 1.5,
                  backgroundColor: "#1163e6",
                  borderRadius: 4,
                  fontWeight: 500,
                  fontSize: "1rem",
                  textTransform: "none",
                  ":hover": {
                    backgroundColor: "#0e52c5",
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>

          {/* Bottom Bar */}
          <Box
            sx={{
              mt: 3,
              py: 1,
              px: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "32px",
            }}
          >
            <Typography variant="body2">
              Copy right : 2025 ©PENTACORE
            </Typography>
            <Box>
              <IconButton sx={{ color: "#fff" }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <YouTube />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
