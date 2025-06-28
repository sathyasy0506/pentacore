import React from "react";
import { Box, Typography, Button, GlobalStyles } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bannerImage from "../assets/images/futuristic-dubai-landscape.jpg";
import handshakeImage from "../assets/images/handshake.jpg"; // Make sure this image exists
import coreValuesImage from "../assets/images/core-values.jpg"; // Replace with actual image path

import quintechImage from "../assets/images/1.jpg";
import cincobitImage from "../assets/images/2.jpg";
import ventaImage from "../assets/images/3.jpg";
import strategicImage from "../assets/images/4.jpg";

const sectors = [
  { title: "QUINTECH", image: quintechImage },
  { title: "CINCOBIT TECHNOLOGY", image: cincobitImage },
  { title: "VENTA DISTRIBUTION", image: ventaImage },
  { title: "OTHER STRATEGIC INVESTMENTS", image: strategicImage },
];

export default function Home() {
  return (
    <>
      <GlobalStyles
        styles={{
          html: {
            margin: 0,
            padding: 0,
            height: "100%",
            overflowX: "hidden",
          },
          body: {
            margin: 0,
            padding: 0,
            height: "100%",
            overflowX: "hidden",
          },
          "#root": {
            height: "100%",
          },
          "*": {
            boxSizing: "border-box",
            fontFamily: "sans-serif",
          },
        }}
      />

      {/* Banner Section */}
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          px: { xs: 3, md: 10 },
        }}
      >
        <Box sx={{ maxWidth: "650px" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#ffffff",
              fontWeight: 300,
              fontSize: { xs: "2rem", md: "3.2rem" },
              lineHeight: 1.35,
            }}
          >
            Strategic Investments. Sustainable Growth. Innovation-led Future.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 4,
              borderRadius: "999px",
              textTransform: "none",
              px: 4,
              py: 1.5,
              fontSize: "15px",
              fontWeight: 400,
              backgroundColor: "#ffffff",
              color: "#0F1F44",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#f1f1f1",
              },
            }}
            endIcon={
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: "#0F1F44",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: 16, color: "#fff" }} />
              </Box>
            }
          >
            View More Details
          </Button>
        </Box>
      </Box>

      {/* Info + Framed Image Section */}
      <Box
        sx={{
          px: { xs: 3, md: 12 },
          py: { xs: 6, md: 12 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#fff",
          minHeight: { md: "600px" }, // Adjust to control the full section height
        }}
      >
        {/* Left Text */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pr: { md: 6 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#0F1F44",
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              lineHeight: 1.4,
            }}
          >
            Pentacore Holdings is a DIFC-based investment holding company
            focused on building a diversified portfolio across biotechnology,
            information technology, food & beverage, and other high-growth
            sectors. We invest, manage, and scale businesses that align with
            innovation, sustainability, and long-term value creation.
          </Typography>

          <Typography
            sx={{
              color: "#555",
              fontSize: "16px",
              lineHeight: 1.75,
              fontWeight: 400,
            }}
          >
            We specialize in acquiring, managing, and cultivating a diverse
            portfolio of investments across high-growth sectors including{" "}
            <strong>
              biotechnology, information technology, food processing, retail
            </strong>
            , and more. Beyond direct investments, we provide essential
            headquarter services and comprehensive treasury & financial
            solutions to our related entities.
            <br />
            <br />
            Leveraging the{" "}
            <strong>DIFC's world-class, business-friendly ecosystem</strong>, we
            are strategically positioned to capitalize on the immense economic
            potential of the <strong>UAE</strong>, the broader{" "}
            <strong>Middle East and North Africa (MENA) region</strong>, and key{" "}
            <strong>international markets</strong>. Our approach is designed to
            foster growth and deliver value across a global landscape.
          </Typography>
        </Box>

        {/* Right Full-Height Framed Image */}
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: "100%", md: 400 },
            height: "auto",
            display: "flex",
            alignItems: "stretch",
            mt: { xs: 4, md: 0 },
          }}
        >
          <Box
            sx={{
              border: "8px solid #E5E7EB",
              borderRadius: "20px",
              padding: "6px",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src={handshakeImage}
              alt="Handshake"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* Core Values Section */}
      <Box
        sx={{
          px: { xs: 3, md: 10 },
          py: { xs: 6, md: 12 },
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        {/* Section Tag */}
        <Typography
          sx={{
            display: "inline-block",
            mb: 1,
            px: 2,
            py: 0.5,
            fontSize: "14px",
            borderRadius: "999px",
            backgroundColor: "#F7F4E8",
            color: "#9B8C5D",
            fontWeight: 500,
          }}
        >
          Why us
        </Typography>

        {/* Section Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "#0F1F44",
            mb: { xs: 6, md: 10 },
          }}
        >
          Our Core Values
        </Typography>

        {/* Three-Column Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            justifyContent: "space-between",
            gap: { xs: 6, md: 4 },
          }}
        >
          {/* Left Values */}
          <Box
            sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}
          >
            {[
              {
                title: "Integrity and Transparency",
                desc: "Building trust through honest and open practices.",
              },
              {
                title: "Excellence in Governance",
                desc: "Upholding world-class standards of oversight and accountability.",
              },
              {
                title: "Strategic Growth",
                desc: "Pursuing scalable, long-term investments that deliver measurable value.",
              },
            ].map((item, idx) => (
              <Box key={idx} sx={{ textAlign: "left" }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#C2A84E",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#0F1F44",
                    mb: 0.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#555", fontSize: "14px" }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Center Image */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: "100%", md: 360 },
              alignSelf: "stretch",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 0 10px rgba(0,0,0,0.08)",
            }}
          >
            <Box
              component="img"
              src={coreValuesImage}
              alt="Core Values"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>

          {/* Right Values */}
          <Box
            sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}
          >
            {[
              {
                title: "Commitment to Sustainability",
                desc: "Investing responsibly for a resilient, environmentally conscious future.",
              },
              {
                title: "Empowerment & Collaboration",
                desc: "Fostering synergy and growth across our subsidiaries and teams.",
              },
              {
                title: "Performance with Purpose",
                desc: "Measuring success by both financial results and positive societal impact.",
              },
            ].map((item, idx) => (
              <Box key={idx} sx={{ textAlign: "left" }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#C2A84E",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#0F1F44",
                    mb: 0.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#555", fontSize: "14px" }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* Philosophy, Vision & Mission Section */}
      <Box
        sx={{
          px: { xs: 3, md: 10 },
          py: { xs: 6, md: 12 },
          backgroundColor: "#fdfdfd",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 8 },
        }}
      >
        {/* Left Philosophy Text */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              display: "inline-block",
              mb: 1,
              px: 2,
              py: 0.5,
              fontSize: "14px",
              borderRadius: "999px",
              backgroundColor: "#F7F4E8",
              color: "#9B8C5D",
              fontWeight: 500,
            }}
          >
            Our work
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "2rem", md: "2.4rem" },
              color: "#0F1F44",
              mb: 2,
            }}
          >
            Our Philosophy
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              color: "#555",
              lineHeight: 1.75,
              mb: 4,
            }}
          >
            We are guided by our founder’s simple yet highly effective
            philosophy of satisfying and exceeding the expectations of our
            customers, both small or big, through service excellence, honesty,
            integrity, and social awareness. This principle has become ingrained
            in all aspects of the business and is truly responsible for the
            group’s unrivalled success.
          </Typography>

          <Button
            variant="contained"
            sx={{
              borderRadius: "999px",
              textTransform: "none",
              px: 4,
              py: 1.5,
              fontSize: "14px",
              fontWeight: 500,
              backgroundColor: "#0F1F44",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#162750",
              },
            }}
            endIcon={
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: 16, color: "#0F1F44" }} />
              </Box>
            }
          >
            Contact Us
          </Button>
        </Box>

        {/* Right Cards (Vision and Mission) */}
        <Box
          sx={{
            flex: 1.2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 4 },
          }}
        >
          {/* Vision Card */}
          <Box
            sx={{
              flex: 1,
              borderRadius: "24px",
              backgroundColor: "#fff",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
              textAlign: "center",
              p: 4,
              pb: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-32px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 64,
                height: 64,
                borderRadius: "50%",
                backgroundColor: "#fff",
                boxShadow: "0 0 0 6px #0F1F44",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src="/icons/target-icon.svg" // Replace with actual path
                alt="Vision Icon"
                sx={{ width: 28, height: 28 }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: "14px",
                color: "#333",
                mt: 6,
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              To be the leading investment holding company in the region, known
              for innovative strategies, sustainable growth, and excellence.
            </Typography>
            <Box
              sx={{
                backgroundColor: "#0F1F44",
                color: "#fff",
                borderBottomLeftRadius: "24px",
                borderBottomRightRadius: "24px",
                py: 2,
              }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                OUR VISION
              </Typography>
            </Box>
          </Box>

          {/* Mission Card */}
          <Box
            sx={{
              flex: 1,
              borderRadius: "24px",
              backgroundColor: "#fff",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
              textAlign: "center",
              p: 4,
              pb: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-32px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 64,
                height: 64,
                borderRadius: "50%",
                backgroundColor: "#fff",
                boxShadow: "0 0 0 6px #0F1F44",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src="/icons/lightbulb-icon.svg" // Replace with actual path
                alt="Mission Icon"
                sx={{ width: 28, height: 28 }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: "14px",
                color: "#333",
                mt: 6,
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              To create long-term value for stakeholders through prudent
              investments, strategic management, and a diversified portfolio —
              governed by the highest standards of transparency and integrity.
            </Typography>
            <Box
              sx={{
                backgroundColor: "#0F1F44",
                color: "#fff",
                borderBottomLeftRadius: "24px",
                borderBottomRightRadius: "24px",
                py: 2,
              }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                OUR MISSION
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#0F1F44",
          color: "#fff",
          px: { xs: 3, md: 10 },
          py: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        {/* Capsule Label */}
        <Typography
          sx={{
            display: "inline-block",
            mb: 2,
            px: 2.5,
            py: 0.5,
            fontSize: "13px",
            borderRadius: "999px",
            backgroundColor: "#2F3B66",
            color: "#D1B95F",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          Our Work
        </Typography>

        {/* Section Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "2rem", md: "2.8rem" },
            color: "#ffffff",
            mb: { xs: 6, md: 10 },
          }}
        >
          BUSINESS SECTORS
        </Typography>

        {/* Sector Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          {sectors.map((sector, idx) => (
            <Box
              key={idx}
              sx={{
                position: "relative",
                height: { xs: "280px", md: "380px" },
                overflow: "hidden",
                borderRadius: 0,
              }}
            >
              {/* Background Image */}
              <Box
                component="img"
                src={sector.image}
                alt={sector.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />

              {/* Transparent overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.5), transparent)",
                }}
              />

              {/* Vertical Label */}
              <Typography
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: "16px",
                  letterSpacing: "1px",
                  color: "#fff",
                  px: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {sector.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
