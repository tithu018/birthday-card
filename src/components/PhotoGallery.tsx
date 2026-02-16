import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Image } from 'lucide-react';
import { useState } from 'react';

const PhotoGallery = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    {
      url: `${baseUrl}images/mathu4.jpeg`,
      caption: 'Our Beautiful Moments',
      fit: 'contain',
    },
    {
      url: `${baseUrl}images/mathu3.jpeg`,
      caption: 'Together Forever',
      fit: 'contain',
    },
    {
      url: `${baseUrl}images/mathu2.jpeg`,
      caption: 'Love & Laughter',
      fit: 'contain',
    },
    {
      url: `${baseUrl}images/mathu1.jpeg`,
      caption: 'You & Me',
      fit: 'contain',
    },
  ];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const currentPhoto = photos[currentIndex];
  const isContain = currentPhoto.fit === 'contain';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="max-w-4xl mx-auto my-12 p-8"
    >
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        Our Precious Memories
      </h2>

      <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20">
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {isContain && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-center bg-cover blur-md scale-110"
                  style={{ backgroundImage: `url(${currentPhoto.url})` }}
                />
              )}
              {isContain && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-black/25"
                />
              )}
              <img
                src={currentPhoto.url}
                alt={currentPhoto.caption}
                className={`relative z-10 w-full h-full object-center ${
                  isContain
                    ? 'object-contain'
                    : 'object-cover'
                }`}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center justify-center w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <Image size={80} className="text-white/20" />
            </div>
          </div>
        </div>

        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white text-xl mt-4 font-light"
        >
          {photos[currentIndex].caption}
        </motion.p>

        <div className="flex justify-center items-center gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevPhoto}
            className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="text-white" size={24} />
          </motion.button>

          <div className="flex gap-2">
            {photos.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-pink-400 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextPhoto}
            className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="text-white" size={24} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PhotoGallery;
