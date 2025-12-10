"use client";

import { useEffect, useRef } from "react";

export default function StaticNoise() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const generateNoise = () => {
      const w = canvas.width;
      const h = canvas.height;
      const idata = ctx.createImageData(w, h); // create image data
      const buffer32 = new Uint32Array(idata.data.buffer); // get 32-bit view

      const len = buffer32.length;
      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          buffer32[i] = 0xff000000; // set pixel to black, full alpha
        } else {
             buffer32[i] = 0x00000000; // set pixel to transparent
        }
           // The original script used 0x00000000 (transparent black) vs 0xffffffff (white)
           // and CSS opacity.
           // buffer32[i] = Math.random() < 0.5 ? 0x00000000 : 0xffffffff;
      }
      
      // Let's stick closer to the original logic:
      // buffer32[i] = Math.random() < 0.5 ? 0x00000000 : 0xffffffff; 
      // 0x00000000 is transparent. 0xffffffff is white (ABGR or ARGB depending on endianness, usually ABGR on web).
      // Actually 32-bit views are usually little-endian, so 0xffffffff is opaque white.
      // 0x00000000 is transparent.
      
      for (let i = 0; i < len; i++) {
          buffer32[i] = Math.random() < 0.5 ? 0x00000000 : 0xffffffff;
      }

      ctx.putImageData(idata, 0, 0);
    };

    let animationFrameId: number;

    const animateNoise = () => {
      generateNoise();
      animationFrameId = requestAnimationFrame(animateNoise);
    };

    animateNoise();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="static-noise"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] opacity-[0.06] select-none"
    />
  );
}
