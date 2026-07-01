/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// Counts from 0 up to `value` once it scrolls into view.
function Counter({ value, duration = 1600, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {decimals ? display.toFixed(decimals) : Math.round(display)}
    </span>
  );
}

export default Counter;
