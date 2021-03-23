import React from "react";
import "./Work.css";
import project from "./project1.jpg";
import project2 from "./IMG_20210315_205346.jpg";
import project3 from "./IMG_20210315_205427.jpg";
const Work = () => {
  return (
    <div className="work">
      <iframe
        className="iframe"
        src="https://netfix-clone-reactjs.web.app/"
        width="90%"
        height="550px"
      />
      <iframe
        src="https://amaznclone-ea763.web.app/"
        width="90%"
        height="550px"
      />
      <iframe
        src="https://teslareactclone.herokuapp.com/"
        width="90%"
        height="550px"
        scrolling="yes"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
      />
<iframe src="https://6058d147f8c0a100b56d4772--adarshairbnbclonemern.netlify.app/"
     width="90%"
        height="550px"
        scrolling="yes"
        frameborder="0"
        marginwidth="0"
        marginheight="0" />
    
      <img className="img" src={project} width="40%" height="auto" />
      <img className="img" src={project2} width="40%" height="auto" />
   
    </div>
  );
};

export default Work;
