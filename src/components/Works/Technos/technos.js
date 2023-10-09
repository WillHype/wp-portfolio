import React from "react";
import './technos.css';

const Technos = ({ technologies }) => {
  return (
    <div className="technology-icons">
      {technologies.map((tech, techIndex) => (
        <span key={techIndex}>{tech}</span>
      ))}
    </div>
  );
};

export default Technos;