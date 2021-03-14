import React from "react";
import "./about.css";
import Adarsh from "./adarsh2.png";
const About = () => {
  return (
    <div className="about">
      {" "}
      <h2></h2>
      <h1>I Design And Build Digital Stuffs </h1>
      <img src={Adarsh} />
      <div className="aboutme">
        <h2>
          {" "}
          Hello. I'm Adarsh.I'm a human with knowledge of React, MongoDB, Node,
          ExpressJS and also some design disciplines{" "}
        </h2>
        <div className="socialmedia">
          message me @
          <a
            className="socialmediaa"
            href="https://www.facebook.com/adarsh.murali.3979/"
          >
            <p>Facebook</p>
          </a>
          <a
            className="socialmediaa"
            href="https://www.instagram.com/adarshgupta.jpg/"
          >
            <p>Instagram</p>
          </a>
          <a className="socialmediaa" href="https://github.com/adarsh-gupta101">
            <p>Github</p>
          </a>
          <a
            className="socialmediaa"
            href="https://www.linkedin.com/in/adarsh-m-088393168/"
          >
            <p>Linkedin</p>
          </a>
        </div>
        <h3>
          You can also call me Frontend-Developer,Freelancer,Music lover,Space
          lover,Animal lover,advisor
        </h3>
        <p>
          I want to define myself by the work I want to do.Skill can be
          developed, Character can be build. I love to learn new stuffs and also
          loves to teach
        </p>
        <p>
          I believe Humanity will end in other planet and not in our
          Earth.Coding and Space are my favourite things.{" "}
        </p>
        <p>
          The First step is always the difficult one and it took one year to
          understand that coding is just pattern recognising and not learning
          each and every syntax
        </p>
        <p>Atlast I guess Iam an Introvert</p>
      </div>
    </div>
  );
};

export default About;
