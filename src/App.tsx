import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import SurprisePage from './components/SurprisePage';
import { Sparkles } from 'lucide-react';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnter = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowSurprise(true);
      setIsTransitioning(false);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!showSurprise && !isTransitioning && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <LandingPage onEnter={handleEnter} />
          </motion.div>
        )}

        {isTransitioning && (
          <motion.div
            key="transition"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-600 via-purple-600 to-pink-600"
          >
            <div className="text-center">
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 1.5,
                  ease: 'easeInOut',
                }}
              >
                <Sparkles size={100} className="text-white" fill="white" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white text-3xl mt-8 font-light"
              >
                Preparing your surprise...
              </motion.p>
            </div>
          </motion.div>
        )}

        {showSurprise && !isTransitioning && (
          <motion.div
            key="surprise"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <SurprisePage />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
