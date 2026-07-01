/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';

// Types through a list of words, deleting and moving to the next. Loops.
function Typewriter({ words, typeSpeed = 70, deleteSpeed = 40, pause = 1400 }) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let delay;

    if (!deleting && text === current) {
      delay = pause;
      timeout.current = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(timeout.current);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
      return;
    }

    delay = deleting ? deleteSpeed : typeSpeed;
    timeout.current = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, delay);

    return () => clearTimeout(timeout.current);
  }, [text, deleting, wordIdx, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="typewriter">
      <span className="typewriter-text">{text}</span>
      <span className="blink-cursor" />
    </span>
  );
}

export default Typewriter;
