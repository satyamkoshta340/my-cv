import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const WORDS = [
  'Full-Stack Engineer',
  'React Specialist',
  'Cloud & DevOps',
  'System Designer',
];

const WordAnimation = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((prev) => (prev + 1) % WORDS.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="word-rotator" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[idx]}
          className="word-rotator-item"
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-110%', opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {WORDS[idx]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default WordAnimation;
