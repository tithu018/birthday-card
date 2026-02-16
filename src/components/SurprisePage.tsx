import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Confetti from './Confetti';
import FloatingHearts from './FloatingHearts';
import MessageCard from './MessageCard';
import PhotoGallery from './PhotoGallery';
import BirthdayCake from './BirthdayCake';
import ReasonsCards from './ReasonsCards';
import MusicPlayer from './MusicPlayer';
import { Heart, Sparkles } from 'lucide-react';

const SurprisePage = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900" />

      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,77,166,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(166,77,255,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,215,0,0.3),transparent_50%)]" />
      </div>

      {showConfetti && <Confetti />}
      <FloatingHearts />
      <MusicPlayer />

      <div className="relative z-10 pt-20 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-4"
            style={{ fontFamily: "'Great Vibes', cursive" }}
            animate={{
              textShadow: [
                '0 0 30px rgba(255,77,166,0.8)',
                '0 0 60px rgba(166,77,255,0.8)',
                '0 0 30px rgba(255,77,166,0.8)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Surprise!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl md:text-3xl text-pink-200 font-light"
          >
            This day is all about you, Mathushalini
          </motion.p>
        </motion.div>

        <MessageCard />

        <PhotoGallery />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <BirthdayCake />
        </motion.div>

        <ReasonsCards />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="max-w-4xl mx-auto mt-20 mb-12 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 flex flex-col items-center">
            <Sparkles
              size={48}
              className="text-yellow-300 mx-auto mb-6"
              fill="currentColor"
            />
            <h2
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-6 text-center max-w-3xl mx-auto leading-tight"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              You are my today, tomorrow, and forever
            </h2>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mt-2"
            >
              <Heart
                size={64}
                className="text-pink-300 drop-shadow-[0_0_20px_rgba(255,105,180,0.6)]"
                fill="currentColor"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-center text-pink-300 text-lg mb-8"
        >
          With all my love, forever and always
          <Heart
            size={18}
            className="inline-block align-[-2px] text-pink-300 ml-2"
            fill="currentColor"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SurprisePage;
