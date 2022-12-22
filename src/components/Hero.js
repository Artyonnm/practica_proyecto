import React from "react";
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Dupluck" className="hero__image" />
      <h1 className="hero__title">Tenemos tus respuestas.</h1>
    </div>
  );
};
 
export default Hero;
