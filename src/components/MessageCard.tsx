import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MessageCard = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = `My dearest Mathushalini,

On your special day, I just want to remind you how much you mean to me.

You are the most beautiful part of my life.

Every moment with you is a treasure, and I'm grateful for every smile, every laugh, and every memory we've shared.

Happy Birthday, my love my Loosu Partner💖
நீயே என் முழுமை 🫶💟...`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="max-w-2xl mx-auto my-12 p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20"
    >
      <div className="text-center mb-6">
        <motion.h2
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-2"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          A Love Letter
        </motion.h2>
      </div>

      <div className="text-white text-lg md:text-xl leading-relaxed whitespace-pre-line font-light">
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-6 bg-pink-400 ml-1"
        />
      </div>
    </motion.div>
  );
};

export default MessageCard;
