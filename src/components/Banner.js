import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img
        className="banner__image"
        src="https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
      />
      <div id="banner_text" className="banner__text">
        <h4 className="banner__textdata">
          Hello__World. Myself{" "}
          <span className="important_text" style={{ color: "chartreuse" }}>
            {" "}
            Adarsh Gupta
          </span>
          .Iam A{" "}
          <span style={{ color: "chartreuse" }} className="important_text">
            Web Developer
          </span>{" "}
          += Web Designer +={" "}
          <span style={{ color: "chartreuse" }} className="important_text">
            ML Enthusiast
          </span>{" "}
        </h4>
      </div>
    </div>
  );
};

export default Banner;
