import { motion } from 'framer-motion';
import { Cake } from 'lucide-react';
import { useState } from 'react';

const BirthdayCake = () => {
  const [candlesLit, setCandlesLit] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8 py-12">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        className="relative"
      >
        <div className="relative">
          <Cake size={120} className="text-pink-300" fill="#ff4da6" />

          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="relative"
                animate={{
                  scale: candlesLit ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  duration: 0.5,
                  repeat: candlesLit ? Infinity : 0,
                  delay: i * 0.1,
                }}
              >
                <div className="w-2 h-8 bg-gradient-to-b from-yellow-200 to-pink-300 rounded-t-full" />
                {candlesLit && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  >
                    <div className="w-3 h-4 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full blur-sm" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCandlesLit(!candlesLit)}
        className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
      >
        {candlesLit ? '🎉 Make a Wish!' : '🔥 Light the Candles'}
      </motion.button>
    </div>
  );
};

export default BirthdayCake;
