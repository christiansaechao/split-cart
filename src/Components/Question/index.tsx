import React, { useState } from "react";
import "./styles.scss";

interface QuestionProps {
  title: string;
  description: string;
}

const Question: React.FC<QuestionProps> = ({ title, description }) => {
  const [active, setActive] = useState(false);

  const handleQuestionToggle = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <div className="question-container">
      <div className="question" onClick={() => handleQuestionToggle()}>
        <b>{title}</b>
        <div className="arrow">{active ? "-" : "+"}</div>
      </div>
      <div className={`description ${active ? "active" : ""}`}>
        {description}
      </div>
    </div>
  );
};

export default Question;
