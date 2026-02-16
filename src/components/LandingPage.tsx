import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import FloatingHearts from './FloatingHearts';
import Sparkles from './Sparkles';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage = ({ onEnter }: LandingPageProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,77,166,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(166,77,255,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,215,0,0.2),transparent_50%)]" />
      </div>

      <FloatingHearts />
      <Sparkles />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
            style={{ fontFamily: "'Great Vibes', cursive" }}
            animate={{
              textShadow: [
                '0 0 20px rgba(255,77,166,0.5)',
                '0 0 40px rgba(166,77,255,0.5)',
                '0 0 20px rgba(255,77,166,0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Happy Birthday
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
            style={{ fontFamily: "'Great Vibes', cursive" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            My Love, Mathushalini
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-6xl mb-8"
        >
          💖
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-xl md:text-2xl text-pink-200 mb-12 font-light"
        >
          I have something special waiting for you...
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="group relative px-12 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white text-xl md:text-2xl font-semibold rounded-full shadow-2xl overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <span className="relative z-10 flex items-center gap-3">
            Click to Get Your Surprise
            <Gift className="group-hover:rotate-12 transition-transform" />
          </span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: 3.5, repeat: Infinity }}
          className="mt-8 text-pink-200 text-sm"
        >
          ✨ Click the button above ✨
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
