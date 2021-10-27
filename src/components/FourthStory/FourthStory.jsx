import React from "react";
import image4 from "../../images/Image4.jpg";
import "./FourthStory.css";
const FourthStory = () => {
  return (
    <>
      <div className="timeline__date date__4">Today</div>
      <figure
        style={{
          maxHeight: "392px",
          maxWidth: "328px",
          margin: 0,
          padding: 0,
          marginRight: "32px",
        }}
      >
        {" "}
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={image4}
          alt="story1"
        />
      </figure>
      <div>
        <h1
          style={{
            position: "static",
            width: "688px",
            height: "144px",
            left: "0px",
            top: "0px",

            /* Aktiv Grotesk/Regular/48-48 */

            fontSize: "48px",
            lineHeight: "100%",
            /* or 48px */

            letterSpacing: "-0.02em",

            /* Font / Dark */

            color: "#222",

            mixBlendMode: "normal",

            /* Inside Auto Layout */

            flex: "none",
            order: " 0",
            flexGrow: "0",
            margin: " 0px ",
          }}
        >
          Riva Cantù focuses on interior design, manufacture of exclusive pieces
          of furniture
        </h1>
        <p
          className="timeline__description"
          style={{
            position: "static",
            width: " 328px",
            height: "192px",
            left: "360px",
            bottom: "0px",
            fontSize: "24px",
            lineHeight: " 100%",
            display: "flex",
            alignItems: "flex-end",
            letterSpacing: "-0.01em",
          }}
        >
          Modernism sprouted in the late 1800s as a reaction to overly ornate
          and artificial interiors, architecture and art. Meanwhile, by the
          1930s, this movement that valued function above form truly bloomed.{" "}
        </p>
      </div>
    </>
  );
};

export default FourthStory;
