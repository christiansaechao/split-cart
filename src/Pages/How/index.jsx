import React from "react";
import Hero from "../../Components/Hero";
import WhyUse from "../../Components/WhyUse";
import Steps from "../../Components/Steps";
import "./styles.scss";

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <div className="hero-section">
        <div className="bg-shadow"></div>
        <div className="hero-background"></div>
        <Hero type="how" className="hero" />
      </div>
      <div className="instructions-container">
        <Steps />
      </div>
      <div className="why-use-bg">
        <div className="why-use-title">
          <b>Why Use Splitcart</b>
        </div>
        <WhyUse />
      </div>
    </div>
  );
};

export default HowItWorks;
