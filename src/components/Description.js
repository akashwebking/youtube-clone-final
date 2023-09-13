import React from "react";
import "./description.css";

const Description = ({ description, views }) => {
  return (
    <div style={{ width: "760px" }} className="vid-des">
      <p>{views}</p>
      <p>{description}</p> {/* Display the video description dynamically */}
      <hr />
    </div>
  );
};

export default Description;
