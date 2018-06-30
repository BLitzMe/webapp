import React from "react";
import "./Styling/icons.css";

const Icons = () => {
  return (
    <div className="iconsContainer">


      <ul className="contact">
        <li><i className="fa fa-phone" id="phoneIcon"></i> 123-foodsharing-45</li>
      </ul>

      <ul className="socials">
        <li><i className="fa fa-twitter-square " ></i> </li>
        <li> <i className="fa fa-facebook-square"></i> </li>
        <li><i className="fa fa-google-plus-square"></i> </li>
        <li><i className="fa fa-youtube-square"></i></li>
      </ul>
    </div>



  );
};

export default Icons;
