import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  const [isShown, setIsShown] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const activeHandler = (id) => {
    setActiveTab(id);
  };
  return (
    <>
      <button className="btnShow" onClick={() => setIsShown(!isShown)}>
        {isShown ? "Close The Tab" : "Open The Tab"}
      </button>
      {isShown ? (
        <div className="tab">
          <div className="tab__header">
            {tabData.map((tab) => (
              <button
                onClick={() => activeHandler(tab.id)}
                key={tab.id}
                className={activeTab === tab.id ? "active" : ""}
              >
                <span>{tab.title}</span>
                <span className="tab-indicator"></span>
              </button>
            ))}
          </div>
          <div className="tab__content">{tabData[activeTab - 1].content}</div>
        </div>
      ) : null}
    </>
  );
}

export default App;
