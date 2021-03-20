import React from "react";
import "./about.css";
import Adarsh from "./adarsh2.png";
const About = () => {
  return (
    <div className="about">
      {" "}
      <div className="about__top"></div>
      <div className="about__bottom"></div>
      <div className="top">
        <h1>I </h1> <h1>Design </h1> <h1>And </h1>
        <h1>Build </h1>
        <h1>Digital </h1>
        <h1>Stuffs </h1>
      </div>
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
        <p className="P_text">
          I want to define myself by the work I love to do.Skill's can be
          developed, Character can be build & not everything is easy . I love to
          learn new stuffs and also loves to teach
        </p>
        <p className="P_text">
          I believe Humanity will end in another planet and not in our
          Earth.Coding and Space are my favourite things.{" "}
        </p>
        <p className="P_text">
          The First step is always the difficult one and it took one year to
          understand that coding is just pattern recognising and not learning
          each and every syntax
        </p>
        <p className="P_text">Alas, I guess Iam an selectively introvert </p>
      </div>
    </div>
  );
};

export default About;
