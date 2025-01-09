import React, { useState, useEffect } from "react";
import "./styles.scss";

const CycledText = () => {
  const [active, setActive] = useState(1);
  const cycledText = ["travel costs", "vacation rentals", "event tickets"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevIndex) => (prevIndex + 1) % cycledText.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cycledText.length]);

  return (
    <div className="cycled-container">
      <span className="active">{cycledText[active]}</span>
    </div>
  );
};

export default CycledText;
