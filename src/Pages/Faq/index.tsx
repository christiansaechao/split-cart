import React from "react";
import Questions from "../../Components/Questions";
import "./styles.scss";

const Faq: React.FC = () => {
  return (
    <>
      <div className="contact-information">
        <div className="overlay"></div>
        <h2>Need Help? Get in touch with us using the listed information</h2>
        <div className="info-container">
          <div>
            <h3>support@splitcart.com</h3>
          </div>
          <div>
            <img />
            <h3>Call or Text (888) 635-4349</h3>
          </div>
        </div>
      </div>
      <Questions />
    </>
  );
};

export default Faq;
