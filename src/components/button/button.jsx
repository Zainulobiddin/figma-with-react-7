import React from "react";
import "./button.css";
import "./buttonMedia.css";

const Explore = ({ text, pY, pX}) => {
  return (
    <div>
      <button className="explore" style={{padding: `${pY}px ${pX}px` }}>{text}</button>
    </div>
  );
};

export default Explore;

export const Btn = ({ text }) => {
  return <button className="btn">{text}</button>;
};
