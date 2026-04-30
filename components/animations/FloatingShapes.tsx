"use client";

import { motion } from "framer-motion";

interface Shape {
  size: number;
  x: string;
  y: string;
  color: string;
  delay: number;
  duration: number;
}

const shapes: Shape[] = [
  { size: 300, x: "10%", y: "20%", color: "rgba(124, 58, 237, 0.06)", delay: 0, duration: 20 },
  { size: 250, x: "70%", y: "10%", color: "rgba(59, 130, 246, 0.05)", delay: 2, duration: 25 },
  { size: 200, x: "80%", y: "60%", color: "rgba(236, 72, 153, 0.04)", delay: 4, duration: 22 },
  { size: 350, x: "20%", y: "70%", color: "rgba(124, 58, 237, 0.04)", delay: 1, duration: 28 },
  { size: 180, x: "50%", y: "40%", color: "rgba(59, 130, 246, 0.05)", delay: 3, duration: 18 },
];

export default function FloatingShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: shape.color,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
