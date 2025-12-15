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

    const FRAMES_COUNT = 6;
    const noiseFrames: ImageData[] = [];

    const createNoiseFrame = () => {
        const w = canvas.width;
        const h = canvas.height;
        const idata = ctx.createImageData(w, h); // create image data
        const buffer32 = new Uint32Array(idata.data.buffer); // get 32-bit view
        const len = buffer32.length;
        
        for (let i = 0; i < len; i++) {
             // Optimized: 5% chance of black, otherwise transparent
             // Using opacity 0.05 in CSS means we can just use opaque pixels safely? 
             // Logic from before: Math.random() < 0.5 ? 0x00000000 : 0xffffffff;
             // Let's keep the density similar but pre-calc.
             buffer32[i] = Math.random() < 0.5 ? 0x00000000 : 0xffffffff;
        }
        return idata;
    };

    // Generate frames once
    for (let i = 0; i < FRAMES_COUNT; i++) {
        noiseFrames.push(createNoiseFrame());
    }

    let frameIndex = 0;
    let frameRateCounter = 0;
    let animationFrameId: number;

    const animateNoise = () => {
      // Throttle update: only change frame every 3rd rAF to reduce paint load
      frameRateCounter++;
      if (frameRateCounter % 3 === 0) {
          frameIndex = (frameIndex + 1) % FRAMES_COUNT;
          ctx.putImageData(noiseFrames[frameIndex], 0, 0);
      }
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
