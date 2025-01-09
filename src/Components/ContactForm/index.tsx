import React from "react";
import "./styles.scss";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-bg">
      <div className="contact-container">
        <div className="text-container">
          <h2 className="title">Get Started</h2>
          <div className="subtext">
            Contact us to learn more about enabling convenient group purchasing
            on your website.
          </div>
        </div>

        <div className="form-container">
          <input type="text" placeholder="First Name" className="first-name" />
          <input type="text" placeholder="Last Name" className="last-name" />
          <input type="text" placeholder="Email" className="email" />
          <input
            type="text"
            placeholder="Phone Number"
            className="phone-number"
          />
          <input type="text" placeholder="Company" className="company" />
          <textarea placeholder="Questions or Comments" className="comments" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
