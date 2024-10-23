import React from "react";
import "./Cubic.css";
import { skill } from "../assets/skills";
const CubicAnimation = () => {
  return (
    <div className="stage-cube-cont ">
      <div className="cubespinner">
        <div className="face1">
          <img
            src={skill.node}
            className="object-contain"
            height={"60px"}
            width={"60px"}
          />
        </div>
        <div className="face2">
          <img
            src={skill.mongoDb}
            className="object-contain"
            height={"60px"}
            width={"60px"}
          />
        </div>
        <div className="face3">
          <img
            src={skill.tailwind}
            className="object-contain"
            height={"60px"}
            width={"60px"}
          />
        </div>
        <div className="face4">
          <img
            src={skill.react}
            className="object-contain"
            height={"60px"}
            width={"60px"}
          />
        </div>
        <div className="face5">
          <img
            src={skill.javascript}
            className="object-contain"
            height={"60px"}
            width={"60px"}
          />
        </div>
        <div className="face6">
          <img
            src={skill.redux}
            className="object-contain"
            height={"60px"}
            width={"60px"}
          />
        </div>
      </div>
    </div>
  );
};

export default CubicAnimation;
