import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./ThirdStory.css";
const ThirdStory = ({ data = [], API_URL }) => {
  const { date, storyDescription, storyTitle, stroyPicture } = data;

  return (
    <>
      <div className="timeline__date date__3">
        <p>{date}</p>
      </div>
      <h1 className={storyTitle ? "timeline__third-story-title" : ""}>
        {storyTitle}
      </h1>
      <figure className="timeline__third-story-figure">
        <img
          className="timeline__story-img"
          src={API_URL + stroyPicture?.url}
          alt="story3"
        />
      </figure>
      <div>
        <div className="timeline__third-story-description">
          <p> {ReactHtmlParser(storyDescription)}</p>
        </div>
      </div>
    </>
  );
};

export default ThirdStory;
