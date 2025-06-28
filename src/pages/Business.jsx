import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";

export default function Business() {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          paddingTop: 8,
          paddingBottom: 4,
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            border: "1px solid #D6BA73",
            color: "#D6BA73",
            borderRadius: "20px",
            px: 2,
            py: 0.5,
            fontSize: "14px",
            fontWeight: 600,
            mb: 1,
          }}
        >
          OUR SERVICES
        </Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "#0F1F44", // Deep navy blue text color
          }}
        >
          Business Sectors
        </Typography>
      </Box>

      {/* SECTION 1 - Images Left, Content Right */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: 4,
          alignItems: "stretch",
        }}
      >
        {/* Left Image Section */}
        <Box
          sx={{
            flex: 1,
            minWidth: "300px",
            maxWidth: "700px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "400px",
              gap: 2,
              transition: "all 0.5s ease",
              "&:hover .left-img": {
                flex: 3,
              },
              "&:hover .right-img": {
                flex: 7,
              },
            }}
          >
            <Box
              className="left-img"
              sx={{
                flex: 7,
                overflow: "hidden",
                borderRadius: "20px",
                transition: "flex 0.5s ease",
                height: "100%",
              }}
            >
              <img
                src={img1}
                alt="Left"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
            <Box
              className="right-img"
              sx={{
                flex: 3,
                overflow: "hidden",
                borderRadius: "20px",
                transition: "flex 0.5s ease",
                height: "100%",
              }}
            >
              <img
                src={img2}
                alt="Right"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Right Content Section */}
        <Box
          sx={{
            flex: 1,
            minWidth: "300px",
            paddingLeft: { xs: 0, md: 6 },
            paddingTop: { xs: 4, md: 0 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="700"
            color="#0F1F44"
            gutterBottom
          >
            QUINTECH
          </Typography>
          <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 2 }}>
            Driving Innovation Through Applied Technology Research <br />
            QCAS is the dedicated research and development arm of Pentacore
            Holdings, focused on advancing frontier technologies that shape the
            future of industry.
          </Typography>
          <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 2 }}>
            <strong>Specializing in:</strong>
            <br />
            1. Technology Research & Development - Applied R&D across artificial
            intelligence, automation, data science, and smart systems - tailored
            for practical implementation and commercial scalability.
          </Typography>
          <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}>
            QCAS serves as an innovation catalyst, bridging scientific inquiry
            with real-world application. With a mandate to create high-impact,
            sustainable solutions, QCAS accelerates the development of
            proprietary technologies that power the next generation of
            Pentacore’s portfolio companies.
          </Typography>

          <Button
            variant="contained"
            sx={{
              alignSelf: "flex-start",
              borderRadius: "999px",
              px: 3,
              py: 1,
              textTransform: "none",
              backgroundColor: "#0F1F44",
              "&:hover": { backgroundColor: "#0c1938" },
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            Visit website
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "50%",
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 14, color: "#0F1F44" }} />
            </Box>
          </Button>
        </Box>
      </Box>

      {/* SECTION 2 - Content Left, Images Right */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: 4,
          alignItems: "stretch",
          flexDirection: { xs: "column", md: "row-reverse" }, // images on right
        }}
      >
        {/* Right Image Section */}
        <Box
          sx={{
            flex: 1,
            minWidth: "300px",
            maxWidth: "700px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "400px",
              gap: 2,
              transition: "all 0.5s ease",
              "&:hover .left-img": {
                flex: 3,
              },
              "&:hover .right-img": {
                flex: 7,
              },
            }}
          >
            <Box
              className="left-img"
              sx={{
                flex: 7,
                overflow: "hidden",
                borderRadius: "20px",
                transition: "flex 0.5s ease",
                height: "100%",
              }}
            >
              <img
                src={img1}
                alt="Left"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
            <Box
              className="right-img"
              sx={{
                flex: 3,
                overflow: "hidden",
                borderRadius: "20px",
                transition: "flex 0.5s ease",
                height: "100%",
              }}
            >
              <img
                src={img2}
                alt="Right"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Left Content Section */}
        <Box
          sx={{
            flex: 1,
            minWidth: "300px",
            paddingRight: { xs: 0, md: 6 },
            paddingTop: { xs: 4, md: 0 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="700"
            color="#0F1F44"
            gutterBottom
          >
            QUINTECH - Extended
          </Typography>
          <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 2 }}>
            Empowering industries through tailored tech innovation.
            <br />
            QCAS doesn’t just follow trends — it defines them.
          </Typography>
          <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 2 }}>
            <strong>Core missions:</strong>
            <br />
            2. Commercial Technology Transfer - Ensuring lab-based breakthroughs
            transition smoothly into market-ready platforms.
          </Typography>
          <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}>
            QCAS extends its R&D strength into real-world impact, forming
            partnerships with industry leaders and institutions. Our edge is in
            execution — combining technical insight with commercial urgency.
          </Typography>

          <Button
            variant="contained"
            sx={{
              alignSelf: "flex-start",
              borderRadius: "999px",
              px: 3,
              py: 1,
              textTransform: "none",
              backgroundColor: "#0F1F44",
              "&:hover": { backgroundColor: "#0c1938" },
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            Learn more
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "50%",
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 14, color: "#0F1F44" }} />
            </Box>
          </Button>
        </Box>
      </Box>
    </>
  );
}
