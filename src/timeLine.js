import { useState } from "react";

const TimeLineTabsList = ({
  color = "#222222",
  rotate = "90deg",
  length = 5,
  uniqKey,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push({ key: i });
  }
  console.log(
    "array",
    array.map((item, index) => item.key === index)
  );
  return array.map((item, index) => (
    <div
      style={{
        padding: "4px 0px",
        height: "1px",
      }}
      onMouseEnter={() => {
        setActiveTabIndex(uniqKey + index);
      }}
      onMouseLeave={() => {
        setActiveTabIndex("");
      }}
    >
      <div
        className={`timeline__tab  ${
          uniqKey + index !== activeTabIndex ? "" : "tiHouvri"
        }`}
        key={index}
        style={{
          position: "static",
          height: "0.5px",
          width: "32px",
          left: "32px",
          top: "99px",
          background: color,
          // marginTop: "8px",
        }}
      ></div>
    </div>
  ));
};

export default TimeLineTabsList;
