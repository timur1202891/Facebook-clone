import React from "react";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      {/* <iframe
        src="https://www.youtube.com/embed/JbJducQmxqw"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe> */}
      <iframe
        width="340"
        height="200"
        src="https://www.youtube.com/embed/JbJducQmxqw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Widgets;
