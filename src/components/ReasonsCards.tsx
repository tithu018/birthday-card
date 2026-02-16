import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useState } from 'react';

const ReasonsCards = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const reasons = [
    'Your beautiful smile that lights up my world Beda😍...',
    'The way you make me laugh every single day Princess😘...',
    'Your kindness and compassionate heart Dear🐱...',
    'How you understand me like no one else Mental🥰...',
    'Your strength and determination Mathushh🫂...',
    'The way you make ordinary moments extraordinary Loosu💖...',
    'Your endless support and encouragement Shaluhh🐣...',
    'How you make me want to be a better person Mine💎...',
  ];

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="max-w-6xl mx-auto my-12 px-4"
    >
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        Reasons Why I Love You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="h-48 cursor-pointer perspective-1000"
            onClick={() => toggleCard(index)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{ rotateY: flippedCards.has(index) ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="absolute w-full h-full backface-hidden bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl shadow-xl flex items-center justify-center p-6"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="text-center">
                  <Heart
                    size={48}
                    className="text-white mx-auto mb-4"
                    fill="white"
                  />
                  <p className="text-white font-semibold text-xl">
                    Reason #{index + 1}
                  </p>
                  <p className="text-white/80 text-sm mt-2">Click to reveal</p>
                </div>
              </div>

              <div
                className="absolute w-full h-full backface-hidden bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl flex items-center justify-center p-6 border border-white/20"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <p className="text-white text-center leading-relaxed">
                  {reason}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ReasonsCards;
