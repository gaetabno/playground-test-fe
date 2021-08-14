import React, { useState, useEffect } from "react";
import axios from "axios";
import loader from "/@/assets/img/loader.png";
function Tabs() {
  const sendRequest = axios.create();

  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: "Vestibulum at odio sit amet",
      active: true,
    },
    {
      id: 2,
      title: "Sed vehicula neque",
      active: false,
    },
    {
      id: 3,
      title: "Nulla id libero pretium",
      active: false,
    },
  ]);

  const [tab_attiva, setTabAttiva] = useState([]);

  const [tab_id, setTabId] = useState(1);

  const [loading, setLoading] = useState(false);

  const changeTab = (t_id) => {
    setTabId(t_id);
    let new_tabs = [...tabs];
    for (const i in new_tabs) {
      if (new_tabs[i].id == t_id) {
        new_tabs[i].active = true;
      } else {
        new_tabs[i].active = false;
      }
    }

    setTabs(new_tabs);
  };

  const recuperaTab = () => {
    sendRequest
      .get("/ajax/tab" + tab_id + ".json")
      .then((res) => setTabAttiva(res.data.item.content));
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      recuperaTab();
    }, 1000);
    setLoading(true);
  }, [tab_id]);

  return (
    <section id="tabs" className="section-light padding-section">
      <div className="container">
        <div className="grid">
          <div className="col-1-3">
            <div className="tab-list">
              {tabs.map((t) => (
                <div
                  onClick={() => changeTab(t.id)}
                  key={t.id}
                  className={t.active ? "active tab-title" : "tab-title"}
                >
                  <h3>
                    {t.title}
                    <span className="fas fa-chevron-up" />
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="col-expand">
            <div className="tab-content">
              {loading && (
                <div className="loader">
                  <img src={loader} alt="loader" />
                </div>
              )}
              {!loading &&
                tab_attiva.map((content, i) => <p key={i}>{content}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
