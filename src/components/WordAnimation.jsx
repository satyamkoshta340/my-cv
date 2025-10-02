import React, { useState, useEffect, useRef } from "react";
import { animate, splitText, stagger } from 'animejs';

const WordAnimation = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const words = ["Web Designer", "Software Engineer", "Quick Learner"];
  const wordRef = useRef();

  useEffect(() => {
    const { chars } = splitText('#temp', {
      chars: { wrap: 'clip' },
    });

    animate(chars, {
      y: [
        { to: ['100%', '0%'] },
        { to: '-100%', delay: 750, ease: 'in(3)' }
      ],
      duration: 750,
      ease: 'out(3)',
      delay: stagger(50),
      // loop: false,
      onComplete: () => {
        setTimeout(() => {
          setCurrentIdx((prev) => (prev + 1) % words.length);
        }, 750);
      } 
    });
  }, [currentIdx]);

  return (
    <div>
      <span ref={wordRef} id="temp">{words[currentIdx]}</span>
    </div>
  );
};

export default WordAnimation;
