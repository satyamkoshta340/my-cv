
import React, { useRef, useEffect, useState } from "react";

function SkillBlock({ skillName, skillPower }) {
  const barRef = useRef(null);
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
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-item">
      <div className="row justify-between">
        <h5>{skillName}</h5>
        <span>{skillPower}%</span>
      </div>
      <div className="skill-item-graph">
        <div
          ref={barRef}
          className="skil-item-power"
          style={{ width: visible ? `${skillPower}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBlock;
