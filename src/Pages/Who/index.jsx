import React from "react";
import "./styles.scss";

const WhoItsFor = () => {
  const images = [
    { src: "https://i.imgur.com/7p0G1Av.jpg" },
    { src: "https://i.imgur.com/tZeATx8.jpg" },
    { src: "https://i.imgur.com/23I6DI1.jpg" },
    { src: "https://i.imgur.com/WogCaqI.jpg" },
  ];

  return (
    <div className="who-its-for-container">
      <div className="header">
        <b>Splitcart is a simple way to help your consumers!</b>
      </div>
      <div className="subtext">
        Checkout the many scenarios that Splitcart solves for your consumers,
        benefiting you and your business. Increasing your sales, lowering your
        cart abandonment, and getting more eyes on your brand.
      </div>
      {images.map((image) => {
        return <img src={image.src} />;
      })}
    </div>
  );
};

export default WhoItsFor;
