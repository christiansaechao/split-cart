import React from "react";
import "./styles.scss";

const Works: React.FC = () => {
  const steps = [
    {
      title: "Checkout",
      text: "Customers shop on your website and choose Splitcart as the payment method at checkout.",
      src: "https://i.imgur.com/c3rqIkW.png",
      bgColor: "#3D99F5",
    },
    {
      title: "Invite Others",
      text: "The customer invites others to pay for their share of the order.",
      src: "https://i.imgur.com/QnXhoGm.png",
      bgColor: "#0C7FF2",
    },
    {
      title: "Payments",
      text: "Those invited then open the link to submit their payment.",
      src: "https://i.imgur.com/elXGwyg.png",
      bgColor: "#086ACC",
    },
    {
      title: "Order Complete",
      text: "Once everyone has paid, then the order is complete!",
      src: "https://i.imgur.com/Rl81bjS.png",
      bgColor: "#054F99",
    },
  ];

  const stepsComponent = () => {
    return (
      <div className="steps-container">
        {steps.map((step) => {
          return (
            <div className="step" style={{ backgroundColor: step.bgColor }}>
              <img src={step.src} />
              <div className="text-container">
                <div className="title">{step.title}</div>
                <div className="text">{step.text}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="works-container">
      <div className="how-it-works">
        <h2>How It Works</h2>
        <h4>
          Splitcart makes group purchasing easy, eliminating the need for one
          person to bear the responsibility of the entire purchase.
        </h4>
        <div className="learn-more">Learn more</div>
      </div>
      {stepsComponent()}
    </div>
  );
};

export default Works;
