import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TimeLineTabsList from "./timeLine";

import FirstStory from "./components/FirstStory/FirstStory";
import SecondStory from "./components/SecondStory/SecondStory";

import ThirdStory from "./components/ThirdStory/ThirdStory";
import FourthStory from "./components/FourthStory/FourthStory";
import { useState } from "react";

const App = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [focus, setFocus] = useState(false);
  return (
    <div className="timeline__container">
      <Tabs className="timeline__tabs">
        <TabList
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
          className={`timeline__tab-list ${focus ? "" : "focus"}`}
        >
          <Tab>
            <div
              onMouseEnter={() => {
                setActiveTabIndex(0);
              }}
              onMouseLeave={() => {
                setActiveTabIndex("");
              }}
              style={{ padding: "4px 0px" }}
            >
              <div
                className={`timeline__tab-with-content ${
                  activeTabIndex !== 0 ? "" : "timeline__active-tab"
                }`}
              ></div>
            </div>
            <TimeLineTabsList uniqKey="firstStory" color="#222" length={9} />
          </Tab>
          <Tab>
            <div
              onMouseEnter={() => {
                setActiveTabIndex(1);
              }}
              onMouseLeave={() => {
                setActiveTabIndex("");
              }}
              style={{ padding: "4px 0px" }}
            >
              <div
                className={`timeline__tab-with-content ${
                  activeTabIndex !== 1 ? "" : "timeline__active-tab"
                }`}
              ></div>
            </div>
            <TimeLineTabsList uniqKey="secondStory" color="#222" length={14} />
          </Tab>
          <Tab>
            <div
              onMouseEnter={() => {
                setActiveTabIndex(2);
              }}
              onMouseLeave={() => {
                setActiveTabIndex("");
              }}
              style={{ padding: "4px 0px" }}
            >
              <div
                className={`timeline__tab-with-content ${
                  activeTabIndex !== 2 ? "" : "timeline__active-tab"
                }`}
              ></div>
            </div>
            <TimeLineTabsList uniqKey="thirdStory" color="#222" length={9} />
          </Tab>
          <Tab>
            <div style={{ padding: "4px 0px" }}>
              <div
                className={`timeline__tab-with-content ${
                  activeTabIndex !== 2 ? "" : "timeline__active-tab"
                }`}
              ></div>
            </div>
          </Tab>
        </TabList>

        <div style={{ display: "grid", width: "100%" }}>
          <TabPanel className="timeline__first-content">
            <FirstStory />
          </TabPanel>
          <TabPanel className="timeline__second-content">
            <SecondStory />
          </TabPanel>
          <TabPanel className="timeline__third-content">
            <ThirdStory />
          </TabPanel>
          <TabPanel className="timeline__fourth-content">
            <FourthStory />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};
export default App;
