import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Who from "./Pages/Who";
import How from "./Pages/How";
import Faq from "./Pages/Faq";
import Footer from "./Components/Footer";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who" element={<Who />} />
          <Route path="/how" element={<How />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
