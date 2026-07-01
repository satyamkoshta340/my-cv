/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from 'react';

const CELLS = 20;

function SkillBlock({ skillName, skillPower }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filled = Math.round((skillPower / 100) * CELLS);

  return (
    <div className="skill-item" ref={ref}>
      <span className="skill-name">{skillName}</span>
      <span className="skill-bar">
        <span className="skill-bracket">[</span>
        {Array.from({ length: CELLS }).map((_, i) => (
          <span
            key={i}
            className={`skill-cell ${visible && i < filled ? 'on' : ''}`}
            style={{ transitionDelay: `${i * 35}ms` }}
          />
        ))}
        <span className="skill-bracket">]</span>
      </span>
      <span className="skill-pct">{skillPower}%</span>
    </div>
  );
}

export default SkillBlock;
