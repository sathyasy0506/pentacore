// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Business from "./pages/Business";
import About from "./pages/About";
import Contact from "./pages/Contact"; // ✅ Import Contact

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> {/* ✅ Add Contact */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
