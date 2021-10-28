import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./FourthStory.css";
const FourthStory = ({ data = [], API_URL }) => {
  const { date, storyDescription, storyTitle, stroyPicture } = data;
  return (
    <>
      <div className="timeline__date date__4">
        <p>{date}</p>
      </div>
      <figure className="timeline__fourth-story-figure">
        <img
          className="timeline__story-img"
          src={API_URL + stroyPicture?.url}
          alt="story4"
        />
      </figure>
      <div>
        <h1 className="timeline__fourth-story-title">{storyTitle}</h1>
        <div className="timeline__fourth-story-description">
          <p> {ReactHtmlParser(storyDescription)}</p>
        </div>
      </div>
    </>
  );
};

export default FourthStory;
