
import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let time = 0;

    const particleCount = window.innerWidth < 768 ? 4000 : 8500;
    const mouseRepelRadius = 220;
    const mouseRepelStrength = 3;

    // Organic shapes for attraction
    const shapes = [
      { x: 0.2, y: 0.3, radiusBase: 0.25, speed: 0.002, phase: 0 },
      { x: 0.8, y: 0.7, radiusBase: 0.3, speed: 0.003, phase: 2 },
      { x: 0.5, y: 0.5, radiusBase: 0.15, speed: 0.001, phase: 4 },
    ];

    // Metallic "Argenté" Palette
    const metallicColors = [
      'rgba(255, 255, 255, ', // Pure White
      'rgba(224, 224, 224, ', // Silver
      'rgba(180, 180, 180, ', // Light Grey
      'rgba(140, 140, 140, ', // Steel
      'rgba(192, 192, 192, ', // Platinum
      'rgba(176, 196, 222, ', // Light Steel Blue (Argenté accent)
    ];

    class Particle {
      x: number;
      y: number;
      shapeIndex: number;
      angle: number;
      distFactor: number;
      size: number;
      colorBase: string;
      alpha: number;

      constructor(width: number, height: number) {
        this.shapeIndex = Math.floor(Math.random() * shapes.length);
        this.angle = Math.random() * Math.PI * 2;
        this.distFactor = Math.sqrt(Math.random());
        this.size = Math.random() * 1.3 + 0.4;
        this.alpha = Math.random() * 0.5 + 0.15;
        this.colorBase = metallicColors[Math.floor(Math.random() * metallicColors.length)];
        this.x = Math.random() * width;
        this.y = Math.random() * height;
      }

      update(width: number, height: number, time: number) {
        const shape = shapes[this.shapeIndex];
        const shapeX = shape.x * width;
        const shapeY = shape.y * height;
        const minDim = Math.min(width, height);
        const maxRad = shape.radiusBase * minDim;

        // Dynamic organic radius
        const wave1 = Math.sin(this.angle * 3 + time + shape.phase) * (maxRad * 0.1);
        const wave2 = Math.cos(this.angle * 5 - time * 1.5 + shape.phase) * (maxRad * 0.05);
        const currentRadiusLimit = maxRad + wave1 + wave2;

        const currentAngle = this.angle + time * shape.speed;
        const targetX = shapeX + Math.cos(currentAngle) * (currentRadiusLimit * this.distFactor);
        const targetY = shapeY + Math.sin(currentAngle) * (currentRadiusLimit * this.distFactor);

        // Ease towards target
        this.x += (targetX - this.x) * 0.05;
        this.y += (targetY - this.y) * 0.05;

        // Mouse repulsion
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRepelRadius) {
          const force = (mouseRepelRadius - dist) / mouseRepelRadius;
          const ang = Math.atan2(dy, dx);
          this.x -= Math.cos(ang) * force * mouseRepelStrength * 20;
          this.y -= Math.sin(ang) * force * mouseRepelStrength * 20;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.colorBase + this.alpha + ')';
        context.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: particleCount }, () => new Particle(canvas.width, canvas.height));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;
      particles.forEach(p => {
        p.update(canvas.width, canvas.height, time);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('resize', init);
    
    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-40 md:opacity-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleBackground;
