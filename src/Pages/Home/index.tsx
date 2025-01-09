import React from "react";
import Hero from "../../Components/Hero";
import Ultimate from "../../Components/Ultimate";
import Works from "../../Components/Works";
import Demo from "../../Components/Demo";
import Revenue from "../../Components/Revenue";
import Popular from "../../Components/Popular";
import ContactForm from "../../Components/ContactForm";
import "./styles.scss";

/*
 * Renders the Home page and all of the components it's comprised of
 */

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Hero type="home" />
      <Ultimate />
      <Works />
      <Demo />
      <Revenue />
      <Popular />
      <ContactForm />
    </div>
  );
};

export default Home;
