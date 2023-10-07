import React, { useState } from "react";
import './buttonForm.css';

const ButtonForm = () => {
  const [buttonText, setButtonText] = useState("Envoyer");
  const [buttonClass, setButtonClass] = useState("");

  const handleClick = () => {
    setButtonText("Merci !");
    setButtonClass("active");
  };

  return (
    <button id="btn" onClick={handleClick} className={buttonClass}>
      <p id="btnText">{buttonText}</p>
      <div className="checked">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
        </svg>
      </div>
    </button>
  );
};

export default ButtonForm;