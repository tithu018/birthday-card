import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsUserStart, setNeedsUserStart] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;
    audio.muted = true;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setNeedsUserStart(false);
      })
      .catch(() => {
        setIsPlaying(false);
        setNeedsUserStart(true);
      });

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  const toggleMute = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setNeedsUserStart(false);
      } catch {
        setNeedsUserStart(true);
        return;
      }
    }

    const nextMuted = !isMuted;
    audio.muted = nextMuted;
    if (!nextMuted) {
      audio.volume = 0.3;
    }
    setIsMuted(nextMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src= "/images/mathu.mpeg"
      />

      <motion.button
        onClick={toggleMute}
        aria-label={
          needsUserStart ? 'Tap to enable sound' : isMuted ? 'Unmute' : 'Mute'
        }
        className="fixed top-6 right-6 z-50 p-4 bg-white/20 backdrop-blur-md rounded-full shadow-lg hover:bg-white/30 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isPlaying && !isMuted
            ? [
                '0 0 20px rgba(255, 77, 166, 0.5)',
                '0 0 40px rgba(166, 77, 255, 0.5)',
                '0 0 20px rgba(255, 77, 166, 0.5)',
              ]
            : '0 10px 25px rgba(0, 0, 0, 0.1)',
        }}
        transition={{
          duration: 2,
          repeat: isPlaying && !isMuted ? Infinity : 0,
        }}
      >
        {isMuted ? (
          <VolumeX className="text-white" size={24} />
        ) : (
          <Volume2 className="text-white" size={24} />
        )}
      </motion.button>
    </>
  );
};

export default MusicPlayer;
