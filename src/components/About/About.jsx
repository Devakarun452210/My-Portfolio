import React from "react";
import "./About.scss";
import profile from "../../img/profile2.png";

const About = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>About Me</h1>
      <div className="about">
        <div className="details">
          <p>
            "Dynamic and Enthusiastic Web Developer. Curious in the MERN stack
            (MongoDB, Express.js, React.js, and Node.js). Strong problem-solving
            skills and a collaborative mindset, demonstrated through successful
            project deployments for businesses. Adaptable and quick to learn,
            staying up-to-date with emerging technologies and industry best
            practices. Committed to delivering high-quality solutions that
            exceed client expectations. Seeking opportunities to contribute to a
            progressive organization and drive business growth."
          </p>
        </div>
        <div className="profile">
          <img src={profile} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
