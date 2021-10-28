import React from "react";
import ReactHtmlParser from "react-html-parser";

import "./SecondStory.css";
const SecondStory = ({ data = [], API_URL }) => {
  const { date, storyDescription, stroyPicture } = data;

  return (
    <>
      <div className="timeline__date date__2">
        <p>{date}</p>
      </div>

      <div className="timeline__second-story-description">
        <p>{ReactHtmlParser(storyDescription)}</p>
      </div>
      <figure className="timeline__second-story-figure">
        {stroyPicture?.url && (
          <img
            className="timeline__story-img"
            src={API_URL + stroyPicture?.url}
            alt="story2"
          />
        )}
      </figure>
    </>
  );
};

export default SecondStory;
