"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltTitle() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springCfg = { stiffness: 120, damping: 18, mass: 0.8 };
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-1.2, 1.2]), springCfg);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [0.8, -0.8]), springCfg);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <motion.h1
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="font-jura text-[10vw] md:text-[11.7vw] text-[#FFFBF8] text-glow-purple-title tracking-[0.62vw] will-change-transform"
    >
      BIRDBOX LABS
    </motion.h1>
  );
}
