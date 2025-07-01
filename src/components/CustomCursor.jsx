import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Single sparkle that fades out
const Sparkle = ({ x, y, id }) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        left: x,
        top: y,
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "#66ccff",
        boxShadow: "0 0 8px #66ccff, 0 0 16px #99ddff",
        pointerEvents: "none",
        zIndex: 9998,
        mixBlendMode: "screen",
      }}
    />
  );
};

const CustomCursorWithSparkles = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Hide system cursor
    document.body.style.cursor = "none";

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const newSparkle = {
        id: Date.now() + Math.random(),
        x: e.clientX + (Math.random() - 0.5) * 12,
        y: e.clientY + (Math.random() - 0.5) * 12,
      };

      setSparkles((prev) => [...prev, newSparkle]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 500);
    };

    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.body.style.cursor = "default"; // Restore on unmount
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        animate={{
          x: position.x - 10,
          y: position.y - 10,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 35,
        }}
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "#001f3f",
          border: "2px solid #66ccff",
          boxShadow: "0 0 10px #66ccff, 0 0 20px #3399ff",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 10000,
          mixBlendMode: "difference",
        }}
      />

      {/* Following Sparkle */}
      <motion.div
        animate={{
          x: position.x - 6,
          y: position.y - 6,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
        }}
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "#99ddff",
          boxShadow: "0 0 10px #99ddff, 0 0 24px #66ccff",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "screen",
        }}
      />

      {/* Sparkle Trail */}
      {sparkles.map((s) => (
        <Sparkle key={s.id} x={s.x} y={s.y} id={s.id} />
      ))}
    </>
  );
};

export default CustomCursorWithSparkles;
