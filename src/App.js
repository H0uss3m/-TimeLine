import { useState, useEffect } from "react";
import axios from "axios";
// components
import TimeLineTabsList from "./timeLine";
import FirstStory from "./components/FirstStory/FirstStory";
import SecondStory from "./components/SecondStory/SecondStory";
import ThirdStory from "./components/ThirdStory/ThirdStory";
import FourthStory from "./components/FourthStory/FourthStory";
// Tab style
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const App = () => {
  const [data, setData] = useState({ stories: [] });
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [focus, setFocus] = useState(false);
  // global variable
  const API_URL = "http://dp98q.ftp.infomaniak.com:1337";
  const language = "en";
  const fetchStudioData = async (setData, language) => {
    await axios
      .get(API_URL + `/studio?_locale=${language}`)
      .then((res) => setData(res?.data));
  };
  useEffect(() => {
    fetchStudioData(setData, language);
  }, []);
  console.log("data", data?.stories);
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
              className="timeline__tab-container"
              onMouseEnter={() => {
                setActiveTabIndex(0);
              }}
              onMouseLeave={() => {
                setActiveTabIndex("");
              }}
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
              className="timeline__tab-container"
              onMouseEnter={() => {
                setActiveTabIndex(1);
              }}
              onMouseLeave={() => {
                setActiveTabIndex("");
              }}
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
              className="timeline__tab-container"
              onMouseEnter={() => {
                setActiveTabIndex(2);
              }}
              onMouseLeave={() => {
                setActiveTabIndex("");
              }}
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
            <div
              className="timeline__tab-container"
              onMouseEnter={() => {
                setActiveTabIndex(3);
              }}
              onMouseLeave={() => {
                setActiveTabIndex("");
              }}
            >
              <div
                className={`timeline__tab-with-content ${
                  activeTabIndex !== 3 ? "" : "timeline__active-tab"
                }`}
              ></div>
            </div>
          </Tab>
        </TabList>
        <TabList
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
          className={`timeline__mobile-tab-list ${focus ? "" : "focus"}`}
        >
          <Tab>
            <div
              className="timeline__tab-container"
              onMouseEnter={() => {
                setActiveTabIndex(0);
              }}
              onMouseLeave={() => {
                setActiveTabIndex("");
              }}
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
              className="timeline__tab-container"
              onMouseEnter={() => {
                setActiveTabIndex(1);
              }}
              onMouseLeave={() => {
                setActiveTabIndex("");
              }}
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
              className="timeline__tab-container"
              onMouseEnter={() => {
                setActiveTabIndex(2);
              }}
              onMouseLeave={() => {
                setActiveTabIndex("");
              }}
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
            <div
              className="timeline__tab-container"
              onMouseEnter={() => {
                setActiveTabIndex(3);
              }}
              onMouseLeave={() => {
                setActiveTabIndex("");
              }}
            >
              <div
                className={`timeline__tab-with-content ${
                  activeTabIndex !== 3 ? "" : "timeline__active-tab"
                }`}
              ></div>
            </div>
          </Tab>
        </TabList>
        <div className="timeline__tab-panel-container">
          <TabPanel className="timeline__first-content">
            <FirstStory API_URL={API_URL} data={data?.stories[0]} />
          </TabPanel>
          <TabPanel className="timeline__second-content">
            <SecondStory API_URL={API_URL} data={data?.stories[1]} />
          </TabPanel>
          <TabPanel className="timeline__third-content">
            <ThirdStory API_URL={API_URL} data={data?.stories[2]} />
          </TabPanel>
          <TabPanel className="timeline__fourth-content">
            <FourthStory API_URL={API_URL} data={data?.stories[3]} />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};
export default App;
