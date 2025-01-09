import React from "react";
import "./styles.scss";

const Popular: React.FC = () => {
  const purchases = [
    { img: "https://i.imgur.com/smY36Dx.png", title: "CONCERT TICKETS" },
    { img: "https://i.imgur.com/0MkVbb9.png", title: "SPORTS TICKETS" },
    { img: "https://i.imgur.com/p7GCZ7E.png", title: "TRAVEL PLANS" },
    { img: "https://i.imgur.com/bCRC1Jv.png", title: "GROUP PARTIES" },
  ];
  return (
    <div className="popular-background">
      <div className="popular-container">
        <div className="banner">
          Popular group purchases where one person would normally be on the hook
          for the entire amount…
        </div>
        <div className="purchase-container">
          {purchases.map((purchase) => {
            return (
              <div className="purchase">
                <img src={purchase.img} />
                <div className="title">{purchase.title}</div>
              </div>
            );
          })}
        </div>
        <div className="sub-text">but not anymore!</div>
        <div className="offer-button">OFFER THEM SPLITCART</div>
      </div>
    </div>
  );
};

export default Popular;
