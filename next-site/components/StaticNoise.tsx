"use client";

import { useEffect, useRef } from "react";

export default function StaticNoise() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use a fixed-size noise tile to avoid issues with large screens and resizing
    const TILE_SIZE = 256;
    const FRAMES_COUNT = 6;
    const noiseFrames: HTMLCanvasElement[] = [];

    const createNoiseTile = () => {
      const tileCanvas = document.createElement("canvas");
      tileCanvas.width = TILE_SIZE;
      tileCanvas.height = TILE_SIZE;
      const tileCtx = tileCanvas.getContext("2d");
      if (!tileCtx) return tileCanvas;

      const idata = tileCtx.createImageData(TILE_SIZE, TILE_SIZE);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;
      
      for (let i = 0; i < len; i++) {
        // 50% chance of black/white noise
        buffer32[i] = Math.random() < 0.5 ? 0x00000000 : 0xffffffff;
      }
      tileCtx.putImageData(idata, 0, 0);
      return tileCanvas;
    };

    // Generate fixed-size frames once
    for (let i = 0; i < FRAMES_COUNT; i++) {
      noiseFrames.push(createNoiseTile());
    }

    const resizeCanvas = () => {
      // Use devicePixelRatio for sharp noise on high-DPI screens if needed, 
      // but logical pixels are usually fine for this effect.
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let frameIndex = 0;
    let frameRateCounter = 0;
    let animationFrameId: number;

    const animateNoise = () => {
      frameRateCounter++;
      if (frameRateCounter % 3 === 0) {
        frameIndex = (frameIndex + 1) % FRAMES_COUNT;
        
        // Clear and draw tiled noise
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const tile = noiseFrames[frameIndex];
        
        // Create pattern once per tile if we want to be super efficient, 
        // but drawImage in a loop is fine for 256px tiles.
        for (let x = 0; x < canvas.width; x += TILE_SIZE) {
          for (let y = 0; y < canvas.height; y += TILE_SIZE) {
            ctx.drawImage(tile, x, y);
          }
        }
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
