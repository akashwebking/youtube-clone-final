import React from "react";
import { BiHistory } from "react-icons/bi";
import "../components/History.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const History = () => {
  const [historyList, setHistoryList] = useState([]);
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("historyvid")) || [
      { id: "history", msg: "No history Data Found" },
    ];
    const uniqueArray = [];
    for (const item of savedHistory) {
      if (!isDuplicate(uniqueArray, item)) {
        uniqueArray.push(item);
      }
      function isDuplicate(array, item) {
        const uniqueProperty = item.id; // Change 'id' to the unique property of your objects

        return array.some((existingItem) => existingItem.id === uniqueProperty);
      }
    }
    setHistoryList(uniqueArray);
    console.log(uniqueArray);
  }, []);

  return (
    <div className="history">
      <h4 className="ms-5">
        <BiHistory className="mx-2 fs-3" />
        History
      </h4>
      {historyList.map((videos) => (
        <div className="">
          {videos.id === "history" ? (
            <h3 className=" text-light">{videos.msg}</h3>
          ) : (
            <Link className="links" to={`/video/${videos.id}`} key={videos.id}>
              <div className="video-style ">
                <img
                  className="his-thumbnail"
                  src={videos.thumbnailSrc}
                  alt=""
                />

                <div className="video-content text-light">
                  <div className="video-info">
                    <p className="mb-3 video-title_1">{videos.title}</p>
                  </div>
                  <div className="mb-3 channel-content ">
                    <img
                      className="video-thumbnail"
                      src={videos.channelIconSrc}
                      alt=""
                      style={{ width: 35, height: 35 }}
                    />
                    <p className="my-auto video-channel-name">
                      {videos.channelName}
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className=" video-views">
                      {videos.subscribers} subscribers
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default History;
