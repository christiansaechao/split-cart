import "./styles.scss";

const Footer = () => {
  const contacts = [
    { img: "https://i.imgur.com/cR6CWvw.png", text: "support@splitcart.com" },
    { img: "https://i.imgur.com/fZvLvub.png", text: "Request a Demo" },
    {
      img: "https://i.imgur.com/vQTKZwc.png",
      text: "1 (888) 625-4349",
      phoneNumber: "tel:+1888-625-4349",
      phone: true,
    },
  ];

  const socialMedia = [
    {
      img: "https://i.imgur.com/srw4XPH.png",
      url: "https://www.instagram.com/Splitcart",
    },
    {
      img: "https://i.imgur.com/BtnElfK.png",
      url: "https://www.linkedin.com/company/splitcart2/",
    },
    {
      img: "https://i.imgur.com/yFrzVWk.png",
      url: "https://www.youtube.com/@splitcart_",
    },
  ];

  const otherLinks = [
    {
      text: "Blog",
      url: "https://splitcart.com/group-adventures/",
    },
    {
      text: "Privacy Policy",
      url: "https://splitcart.com/privacy-policy/",
    },
    {
      text: "Terms & Conditions",
      url: "https://splitcart.com/terms-conditions/",
    },
    {
      text: "Patents",
      url: "https://splitcart.com/patents/",
    },
  ];

  return (
    <div className="footer-container">
      <div className="contacts">
        <div className="group-title">Contact</div>
        {contacts.map((contact) => {
          return (
            <div className="contact">
              <img src={contact.img} />
              {contact.phone == true ? (
                <div>
                  <a href={contact.phoneNumber}>{contact.text}</a>
                </div>
              ) : (
                <div>{contact.text}</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="social-media">
        <div className="group-title">Social Media</div>
        <div className="social-link-container">
          {socialMedia.map((social) => {
            return (
              <div className="social-link">
                <a href={social.url} target="_blank">
                  <img src={social.img} />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="other-container">
        <div className="group-title">Other Links</div>
        {otherLinks.map((link) => {
          return (
            <div className="other-link">
              <a href={link.url} target="_blank">
                {link.text}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
