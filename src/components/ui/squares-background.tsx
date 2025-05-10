"use client"; // Added "use client" as it uses hooks like useRef, useEffect, useState

import { useRef, useEffect, useState } from "react";

interface SquaresProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal";
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
  className?: string;
}

export function Squares({
  direction = "right",
  speed = 1,
  borderColor = "#333",
  squareSize = 40,
  hoverFillColor = "#222",
  className,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null); 
  const numSquaresX = useRef<number | null>(null);
  const numSquaresY = useRef<number | null>(null);
  const gridOffset = useRef({ x: 0, y: 0 });
  const [hoveredSquareState, setHoveredSquareState] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const hoveredSquareRef = useRef(hoveredSquareState);

  useEffect(() => {
    hoveredSquareRef.current = hoveredSquareState;
  }, [hoveredSquareState]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas background
    canvas.style.background = "#060606";

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!canvas || !ctx) return; // Add null check for canvas and ctx
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      ctx.lineWidth = 0.5;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize);
          const squareY = y - (gridOffset.current.y % squareSize);

          if (
            hoveredSquareRef.current &&
            Math.floor((x - startX) / squareSize) === hoveredSquareRef.current.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquareRef.current.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2,
      );
      gradient.addColorStop(0, "rgba(6, 6, 6, 0)");
      gradient.addColorStop(1, "#060606");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);

      switch (direction) {
        case "right":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          break;
        case "left":
          gridOffset.current.x =
            (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
          break;
        case "up":
          gridOffset.current.y =
            (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
          break;
        case "down":
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        case "diagonal":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
      }

      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return; // Add null check
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      const hoveredSquareX = Math.floor(
        (mouseX + gridOffset.current.x % squareSize - startX % squareSize) / squareSize // Corrected calculation
      );
      const hoveredSquareY = Math.floor(
        (mouseY + gridOffset.current.y % squareSize - startY % squareSize) / squareSize // Corrected calculation
      );
      
      // Ensure numSquaresX and numSquaresY are not null and are numbers before using them
      if (numSquaresX.current !== null && numSquaresY.current !== null) {
        if (hoveredSquareX >= 0 && hoveredSquareX < numSquaresX.current && 
            hoveredSquareY >= 0 && hoveredSquareY < numSquaresY.current) {
          setHoveredSquareState({ x: hoveredSquareX, y: hoveredSquareY });
        } else {
          setHoveredSquareState(null); // Mouse is outside the logical grid
        }
      } else {
         setHoveredSquareState(null); // Fallback if grid dimensions are not yet set
      }
    };

    const handleMouseLeave = () => {
      setHoveredSquareState(null);
    };

    // Event listeners
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Initial setup
    resizeCanvas();
    requestRef.current = requestAnimationFrame(updateAnimation);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (canvas) { // Add null check before removing listeners
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize]); // Removed hoveredSquareState from this main effect's dependencies

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block ${className}`} // Removed border-none for now
      style={{ border: '2px solid red' }} // Added temporary red border for debugging
    />
  );
}
