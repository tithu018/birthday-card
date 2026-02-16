import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Confetti = () => {
  const [confetti, setConfetti] = useState<Array<{
    id: number;
    left: number;
    color: string;
    delay: number;
    duration: number;
    rotation: number;
  }>>([]);

  useEffect(() => {
    const colors = ['#ff4da6', '#a64dff', '#ffd700', '#ff69b4', '#da70d6'];
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2,
      rotation: Math.random() * 360,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3 rounded"
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            backgroundColor: piece.color,
            rotate: piece.rotation,
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, Math.sin(piece.id) * 100],
            rotate: [piece.rotation, piece.rotation + 720],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
