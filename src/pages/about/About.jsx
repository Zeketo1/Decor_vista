import React from "react";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import Mission from "./components/Mission";
import Comment from "./components/Comment";

const About = () => {
  return (
    <div style={{ backgroundColor: "var(--gray-100)" }}>
      <Banner />
      <Intro />
      <Mission />
      <Comment />
    </div>
  );
};

export default About;
