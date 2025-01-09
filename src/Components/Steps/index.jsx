import React, { useState, useEffect } from "react";
import "./styles.scss";

const Steps = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);
  const steps = [
    {
      src: "https://i.imgur.com/hzRQADK.mp4",
      title: "STEP 1",
      description: "Choose Splitcart as Your Payment Option",
      detail: "Within checkout choose the “Split the Cost” option.",
    },
    {
      src: "https://i.imgur.com/01BNZoE.mp4",
      title: "STEP 2",
      description: "Send Invite To Your Group & Pay Your Share",
      detail:
        "Once the link is sent, you and your group pay your individual share of the total cost. Payments are made during checkout, eliminating the need for third-party apps.",
    },
    {
      src: "https://i.imgur.com/vGKrLfN.mp4",
      title: "STEP 3",
      description: "Monitor and Complete",
      detail:
        "Group members watch in real-time as payments are made and the order is completed.",
    },
  ];

  return (
    <>
      {steps.map((step) => {
        return (
          <div className="step-container">
            <div className="right-container">
              <h3 className="step-title">{step.title}</h3>
              <div className="step-description">{step.description}</div>
              <div className="step-details">{step.detail}</div>
            </div>
            <div className="left-container">
              <video autoPlay muted loop width={250}>
                <source src={step.src} type="video/mp4" />
              </video>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Steps;
