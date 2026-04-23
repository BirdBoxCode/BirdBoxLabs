"use client";

import { useEffect, useRef } from "react";

export default function StaticNoise() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const TILE_SIZE = 256;
    const FRAMES_COUNT = 4;

    const createNoiseTile = () => {
      const tile = document.createElement("canvas");
      tile.width = TILE_SIZE;
      tile.height = TILE_SIZE;
      const tileCtx = tile.getContext("2d");
      if (!tileCtx) return tile;

      const idata = tileCtx.createImageData(TILE_SIZE, TILE_SIZE);
      const buffer32 = new Uint32Array(idata.data.buffer);
      for (let i = 0; i < buffer32.length; i++) {
        buffer32[i] = Math.random() < 0.5 ? 0x00000000 : 0xffffffff;
      }
      tileCtx.putImageData(idata, 0, 0);
      return tile;
    };

    const tiles = Array.from({ length: FRAMES_COUNT }, createNoiseTile);
    // Pre-cache patterns — one fillRect replaces the manual tiling loop
    const patterns = tiles.map(t => ctx.createPattern(t, "repeat")!);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let frameIndex = 0;
    let frameRateCounter = 0;
    let animationFrameId: number;

    const animate = () => {
      frameRateCounter++;
      if (frameRateCounter % 4 === 0) {
        frameIndex = (frameIndex + 1) % FRAMES_COUNT;
        ctx.fillStyle = patterns[frameIndex];
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] opacity-[0.04] select-none"
    />
  );
}
