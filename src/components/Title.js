import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <div className="ui container segment stackable" id="title">
      <img className="ui image" src="/youtube.png" alt="youtube logo" />
      <h2> Mini Youtube Player </h2>
    </div>
  );
};

export default Title;
