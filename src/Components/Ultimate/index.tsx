import React from "react";
import "./styles.scss";

const Ultimate: React.FC = () => {
  return (
    <div className="ultimate-background">
      <div className="ultimate-container">
        <div className="image-container">
          <img
            src="https://i.imgur.com/Ep2zGtT.png"
            alt="woman holding phone"
          />
        </div>
        <div className="text-container">
          <h2>The Ultimate Convenience For Your Customers</h2>
          <h4>and a competitive edge for your business</h4>
          <h5>
            Increase conversions when customers 'split the bill' at checkout.
            Simply invite, pay, and enjoy the enhanced group purchasing
            experience.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Ultimate;
