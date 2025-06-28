import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Chip,
  Paper,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const ContactPage = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Chip
            label="Contact Us"
            sx={{
              backgroundColor: "#fbbf24",
              color: "#92400e",
              fontWeight: 500,
              mb: 2,
              px: 2,
              py: 0.5,
            }}
          />
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              color: "#1f2937",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Get in touch with us
          </Typography>
        </Box>

        {/* Main Section */}
        <Grid container spacing={4}>
          {/* Left - Contact Info */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                height: "100%",
              }}
            >
              <ContactInfoBox
                icon={<Phone sx={{ fontSize: 28, color: "#0f172a" }} />}
                title="Phone Number"
                content="+971 (0) 4 824 5784"
              />
              <ContactInfoBox
                icon={<Email sx={{ fontSize: 28, color: "#0f172a" }} />}
                title="Email Address"
                content="info@pentacore.ae"
              />
              <ContactInfoBox
                icon={<LocationOn sx={{ fontSize: 28, color: "#0f172a" }} />}
                title="Address"
                content={
                  <>
                    Office No. 2207, Emirates Financial Towers
                    <br />
                    DIFC, Dubai, UAE
                  </>
                }
              />
            </Box>
          </Grid>

          {/* Right - Contact Form */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                borderRadius: "32px",
                border: "4px solid #e5e7eb",
                p: { xs: 3, sm: 4 },
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                backgroundColor: "#ffffff",
                boxSizing: "border-box",
              }}
            >
              <Box component="form" noValidate autoComplete="off">
                {/* First Name */}
                <Box sx={{ mb: 3 }}>
                  <Typography sx={{ fontWeight: 600, color: "#0f172a", mb: 1 }}>
                    First Name
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Your First Name"
                    variant="outlined"
                    InputProps={{
                      sx: {
                        backgroundColor: "#f9f9f9",
                        borderRadius: "16px",
                        height: "56px",
                        px: 2,
                        fontSize: "1rem",
                      },
                    }}
                  />
                </Box>

                {/* Email and Phone in same row */}
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 600, color: "#0f172a", mb: 1 }}>
                      Email Address
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="yourname@gmail.com"
                      variant="outlined"
                      InputProps={{
                        sx: {
                          backgroundColor: "#f9f9f9",
                          borderRadius: "16px",
                          height: "56px",
                          px: 2,
                          fontSize: "1rem",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 600, color: "#0f172a", mb: 1 }}>
                      Phone Number
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="+12 345 678 90"
                      variant="outlined"
                      InputProps={{
                        sx: {
                          backgroundColor: "#f9f9f9",
                          borderRadius: "16px",
                          height: "56px",
                          px: 2,
                          fontSize: "1rem",
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Message */}
                <Box sx={{ mb: 3 }}>
                  <Typography sx={{ fontWeight: 600, color: "#0f172a", mb: 1 }}>
                    Message
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Write your message here"
                    variant="outlined"
                    InputProps={{
                      sx: {
                        backgroundColor: "#f9f9f9",
                        borderRadius: "16px",
                        px: 2,
                        fontSize: "1rem",
                      },
                    }}
                  />
                </Box>

                {/* Submit Button */}
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#0d1b52",
                    py: 1.5,
                    borderRadius: "32px",
                    fontSize: "1rem",
                    fontWeight: 500,
                    textTransform: "none",
                    ":hover": {
                      backgroundColor: "#0a1641",
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Map */}
        <Box sx={{ mt: 6 }}>
          <Paper
            elevation={0}
            sx={{ borderRadius: 3, overflow: "hidden", height: 400 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2635651968896!2d55.14398631501463!3d25.230870783899786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f430c4c8b1b87%3A0x1b4d3e7f8f9c3b7a!2sEmirates%20Financial%20Towers%2C%20DIFC%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1639648234567!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Emirates Financial Towers Location"
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

// Reusable components
const ContactInfoBox = ({ icon, title, content }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-start",
      gap: 2,
      p: 3,
      borderRadius: 2,
      backgroundColor: "#fff",
      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    }}
  >
    {icon}
    <Box>
      <Typography sx={{ fontWeight: 600, color: "#0f172a" }}>
        {title}
      </Typography>
      <Typography sx={{ color: "#6b7280" }}>{content}</Typography>
    </Box>
  </Box>
);

export default ContactPage;