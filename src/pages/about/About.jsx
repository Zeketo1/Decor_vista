// import React from "react";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import Mission from "./components/Mission";
import Comment from "./components/Comment";
import Navbar from "../home/components/Navbar";
import Footer from "../home/components/Footer";

const About = () => {
  return (
    <div style={{ backgroundColor: "var(--gray-100)" }}>
      <Navbar />
      <Banner />
      <Intro />
      <Mission />
      <Comment />
      <Footer />
    </div>
  );
};

export default About;
