// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        backgroundColor: '#f5f5f5',
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} My React App. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
