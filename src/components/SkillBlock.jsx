import React from "react";

function SkillBlock({skillName, skillPower}) {
  return (
    <div className="skill-item">
      <div className="row justify-between">
        <h5>{skillName}</h5>
        <span>{skillPower}%</span>
      </div>
      <div className="skill-item-graph">
        <div className="skil-item-power" style={{ width: `${skillPower}%`}}></div>
      </div>
    </div>
  );
}

export default SkillBlock;
