import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import TimeLineTabsList from "./timeLine";
import image1 from "./images/Image1.jpg";
import image2 from "./images/Image2.jpg";
import image3 from "./images/Image3.jpg";
import image4 from "./images/Image4.jpg";

const App = () => (
  <div className="timeline__container">
    <Tabs className="timeline__tabs">
      <TabList className="timeline__tab-list">
        <Tab>
          <div className="timeline__tab-with-content"></div>
          <TimeLineTabsList color="blue" length={9} />
        </Tab>
        <Tab>
          <div className="timeline__tab-with-content"></div>
          <TimeLineTabsList color="red" length={14} />
        </Tab>
        <Tab>
          <div className="timeline__tab-with-content"></div>
          <TimeLineTabsList color="blue" length={9} />
        </Tab>
        <Tab>
          <div className="timeline__today-tab"></div>
        </Tab>
      </TabList>

      <div style={{ display: "grid", width: "100%" }}>
        <TabPanel
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 328px 4fr ",

            background: "lightgreen",
            margin: 0,
            padding: 0,
          }}
        >
          <div className="timeline__date">1970</div>
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
              src={image1}
              alt="story1"
            />
          </figure>
          <div>
            <h1
              style={{
                position: "static",
                width: "331px",
                height: "177px",
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
              Title 1
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
              Modernism sprouted in the late 1800s as a reaction to overly
              ornate and artificial interiors, architecture and art. Meanwhile,
              by the 1930s, this movement that valued function above form truly
              bloomed.{" "}
            </p>
          </div>
        </TabPanel>
        <TabPanel
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr 688px  ",

            background: "lightgreen",
            margin: 0,
            padding: 0,
          }}
        >
          <div className="timeline__date">1981</div>

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
              Modernism sprouted in the late 1800s as a reaction to overly
              ornate and artificial interiors, architecture and art. Meanwhile,
              by the 1930s, this movement that valued function above form truly
              bloomed.{" "}
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
        </TabPanel>
        <TabPanel
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 328px 4fr ",

            background: "lightgreen",
            margin: 0,
            padding: 0,
          }}
        >
          <div className="timeline__date">1990</div>
          <h1
            style={{
              position: "static",
              width: "331px",
              height: "177px",
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
            Strong heritage is the foundation for a prosperous future
          </h1>
          <figure
            style={{
              maxHeight: "392px",
              maxWidth: "328px",
              margin: 0,
              padding: 0,
              marginRight: "32px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={image1}
              alt="story1"
            />
          </figure>
          <div>
            <p
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
              Modernism sprouted in the late 1800s as a reaction to overly
              ornate and artificial interiors, architecture and art. Meanwhile,
              by the 1930s, this movement that valued function above form truly
              bloomed.{" "}
            </p>
          </div>
        </TabPanel>
        <TabPanel
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 328px 4fr ",

            background: "lightgreen",
            margin: 0,
            padding: 0,
          }}
        >
          <div className="timeline__date">Today</div>
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
                width: "331px",
                height: "177px",
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
              Title 1
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
              Modernism sprouted in the late 1800s as a reaction to overly
              ornate and artificial interiors, architecture and art. Meanwhile,
              by the 1930s, this movement that valued function above form truly
              bloomed.{" "}
            </p>
          </div>
        </TabPanel>
      </div>
    </Tabs>
  </div>
);
export default App;
