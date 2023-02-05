import React from "react";

const HeroSection = ({orgName, tagline, image}) => {
  return (
    <div>
      <div className="hero max-h/2-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src='../images/Deca-Org Logo.png'
            className="max-w-sm object-scale-down h-48 w-96 rounded-lg shadow-2xl"
          />
          <div>
            <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold">{orgName}</h1>
            <p className="py-6 font-bold">
             {tagline}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
