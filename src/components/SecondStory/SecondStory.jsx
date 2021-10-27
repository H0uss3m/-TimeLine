import React from "react";
import image2 from "../../images/Image2.jpg";
import "./SecondStory.css";
const SecondStory = () => {
  return (
    <>
      <div className="timeline__date date__2">1981</div>

      <div>
        <p
          style={{
            position: "static",
            width: "328px",
            height: "192px",
            left: "360px",
            bottom: "0px",
            fontSize: "24px",
            lineHeight: " 100%",
            display: "flex",
            alignItems: "flex-start",
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          Modernism sprouted in the late 1800s as a reaction to overly ornate
          and artificial interiors, architecture and art. Meanwhile, by the
          1930s, this movement that valued function above form truly bloomed.{" "}
        </p>
      </div>
      <figure
        style={{
          maxHeight: "448px",
          maxWidth: "688px",
          margin: 0,
          padding: 0,
          marginRight: "32px",
        }}
      >
        {" "}
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={image2}
          alt="story1"
        />
      </figure>
    </>
  );
};

export default SecondStory;
