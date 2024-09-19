import React from "react";
import "../../../styles/about/Mission.css";
import mission from "../../../assets/images/mission.jpg";
import vision from "../../../assets/images/vision.jpg";

const Mission = () => {
  return (
    <div className="mission__vision__container">
      <div className="mission__container">
        <div>
          <h2>Our Mission</h2>
          <p>
            At Decovista, our mission is to transform spaces by offering <br />
            high-quality, stylish, and functional furniture that elevates the{" "}
            <br />
            comfort and aesthetics of every home. We are committed to making{" "}
            <br />
            luxury affordable and accessible to everyone, while fostering a{" "}
            <br />
            seamless shopping experience driven by customer satisfaction. <br />
            Through exceptional craftsmanship, innovative designs, and <br />
            eco-friendly practices, we aim to create products that not only{" "}
            <br />
            inspire but also stand the test of time.
          </p>
        </div>
        <img src={mission} alt="" className="mission__vision__image" />
      </div>
      <div className="mission__container">
        <img src={vision} alt="" className="mission__vision__image image1" />
        <div>
          <h2>Our Vision</h2>
          <p>
            Our vision is to become a global leader in home furnishing, known
            for redefining modern living through thoughtfully designed,
            sustainable, and affordable furniture. We aspire to create a brand
            that is synonymous with elegance, innovation, and responsibility,
            continuously evolving to meet the dynamic needs of our customers. By
            blending style, functionality, and sustainability, we envision a
            future where every home is a unique reflection of the people living
            in it, powered by the quality and innovation that Decovista stands
            for.
          </p>
        </div>
        <img src={vision} alt="" className="mission__vision__image2" />
      </div>
    </div>
  );
};

export default Mission;
