import React from "react";
import "./Styling/icons.css";

const Icons = () => {
  return (
    <div className="iconsContainer">

      <div className="iconList">
        <ul className="contact">
          <li><i className="fa fa-phone" id="phoneIcon"></i> 123-foodsharing-45</li>
          <li></li>

        </ul>
        <ul className="socials">
          <li><i className="fa fa-twitter-square " ></i> </li>
          <li> <i className="fa fa-facebook-square"></i> </li>
          <li><i className="fa fa-google-plus-square"></i> </li>
          <li><i className="fa fa-youtube-square"></i></li>
        </ul>
      </div>
      <div>
        <li className="drop"></li>
      </div>
    </div>

  );
};

export default Icons;
