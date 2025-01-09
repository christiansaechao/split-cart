import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./styles.scss";

const Revenue: React.FC = () => {
  const revenueGroup = [
    {
      img: "https://i.imgur.com/skGBt4j.png",
      title: "Higher Checkout Conversions",
      text: "Splitting the cost upfront means more transactions are made in less time.",
      percentage: 48,
    },
    {
      img: "https://i.imgur.com/tKsLsZ1.png",
      title: "Larger Group Purchase Size",
      text: "Our crowdfunding model leads to groups confidently making larger purchases.",
      percentage: 21,
    },
    {
      img: "https://i.imgur.com/S8VZvio.png",
      title: "Increased Traffic & Marketing Potential",
      text: "Splitcart users are exposed to your branding at every stage of checkout.",
      percentage: 27,
    },
  ];

  return (
    <div className="revenue-background">
      <div className="revenue-container">
        <h2 className="section-title">Increase Revenue with Splitcart</h2>
        <div className="underline"></div>
        <div className="revenue-groups">
          {revenueGroup.map((el) => {
            return (
              <div className="group">
                <img src={el.img} />
                <div className="title">{el.title}</div>
                <div className="text">{el.text}</div>
                <div className="percentage">
                  {" "}
                  <CircularProgressbar
                    value={el.percentage}
                    text={`${el.percentage}%`}
                    styles={buildStyles({
                      textColor: "black",
                      pathColor: "#0DC2FF",
                      trailColor: "#DADBDF",
                    })}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Revenue;
