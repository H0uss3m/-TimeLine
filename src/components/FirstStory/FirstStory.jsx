import React from "react";
import ReactHtmlParser from "react-html-parser";

import "./FirstStory.css";

const FirstStory = ({ data = [], API_URL }) => {
  const { date, storyDescription, storyTitle, stroyPicture } = data;
  return (
    <>
      <div className="timeline__date date__1">
        <p>{date}</p>
      </div>
      <figure className="timeline__first-story-figure">
        {stroyPicture?.url && (
          <img
            className="timeline__story-img"
            src={API_URL + stroyPicture?.url}
            alt="story1"
          />
        )}
      </figure>
      <div>
        <h1 className={"timeline__first-story-title"}>{storyTitle}</h1>
        <div className="timeline__first-story-description">
          <p> {ReactHtmlParser(storyDescription)}</p>
        </div>
      </div>
    </>
  );
};

export default FirstStory;
