const TimeLineTabsList = ({
  color = "#222222",
  rotate = "90deg",
  length = 5,
}) => {
  let array = ["", ""];
  for (let i = 0; i < length; i++) {
    array.push(i);
  }
  return array.map((item, index) => (
    <div
      className="timeline__tab"
      key={index}
      style={{
        position: "static",
        height: "1px",
        width: "32px",
        left: "32px",
        top: "99px",
        background: color,
        marginTop: "8px",
      }}
    ></div>
  ));
};

export default TimeLineTabsList;
