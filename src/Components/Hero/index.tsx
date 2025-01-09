import React from "react";
import "./styles.scss";
import CycledText from "../CycledText";

interface HeroProps {
  type: string;
}

const Hero: React.FC<HeroProps> = ({ type }) => {
  return (
    <div className="hero-container">
      <div className="left-container">
        <div className="hero-text">
          <div className={`offer-text ${type}`}>
            Offer your customers an easy solution
            <span className="split-text"> to split</span> the price of{" "}
            <CycledText />
          </div>
        </div>
        {type == "home" && (
          <>
            <h4>
              Cartsplit is the best payment solution, that makes purchasing as a
              group easier for your customers!
            </h4>
            <h5>Your business, our technology</h5>
            <div className="buttons-container">
              <div className="button merchant">MERCHANT START</div>
              <div className="button consumer">CONSUMER INFO</div>
            </div>
          </>
        )}
      </div>
      <div className="right-container">
        <img src="https://i.imgur.com/wE5mcpc.png" />
      </div>
    </div>
  );
};

export default Hero;
