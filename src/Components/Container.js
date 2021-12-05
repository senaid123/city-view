import React from "react";
import "../Styles/Container.css";
const Container = ({ image, message, timestamp }) => {
  return (
    <div className="container">
      <p>{message}</p>
      <img src={image} />
      <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
    </div>
  );
};

export default Container;
