import React from "react";
import "./skills.css";
import TinderCard from "react-tinder-card";
const db = [
  {
    src:
      "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
  {
    src:
      "https://img.flaticon.com/icons/png/512/174/174854.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
  },
  { src: "https://pixelmechanics.com.sg/wp-content/uploads/2019/04/css.jpg" },
  {
    src:
      "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
  },
  { src: "https://expressjs.com/images/express-facebook-share.png" },

  {
    src:
      "https://www.bloorresearch.com/wp-content/uploads/2013/03/MONGO-DB-logo-300x470--x.png",
  },
  {
    src:
      "https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png",
  },
  {
    src:
      "data:image/png;base64,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",
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQZutuVAXi7boyDVdqMC_4xGIHBVaIUT7X8_bCZa6AYItzKGimXQg7rUXoEx-hLCnsaw&usqp=CAU",
  },
];

const Skills = () => {
  const skill = db.reverse();
  return (
    <div>
      <h3>Swipe and See</h3>
      <div className="skills">
        {skill.map((skil) => {
          return (
            <TinderCard className="tinder">
              <img className="skill__image" src={skil.src} />
            </TinderCard>
          );
        })}
      </div>
    </div>
    /*  <div className="skills">
      <img
        className="skill__image"
        src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
      ></img>
      <img
        className="skill__image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
      ></img>
      <img
        className="skill__image"
        src="https://expressjs.com/images/express-facebook-share.png"
      ></img>
      <img
        className="skill__image"
        src="https://www.bloorresearch.com/wp-content/uploads/2013/03/MONGO-DB-logo-300x470--x.png"
      ></img>
      <img
        className="skill__image"
        src="https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png"
      ></img>
      <img
        className="skill__image"
        src="data:image/png;base64,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"
      ></img>
      <img
        className="skill__image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQZutuVAXi7boyDVdqMC_4xGIHBVaIUT7X8_bCZa6AYItzKGimXQg7rUXoEx-hLCnsaw&usqp=CAU"
      ></img>
    </div>
  );
}; */
  );
};

export default Skills;
