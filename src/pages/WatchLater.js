import React from "react";
import { BiHistory } from "react-icons/bi";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const WatchLater = () => {
  const [historyList, setHistoryList] = useState([]);
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("watchLater")) || [
      { id: "WATCH LATER", msg: "No  Data Found" },
    ];
    const uniqueArray = [];
    for (const item of savedHistory) {
      if (!isDuplicate(uniqueArray, item)) {
        uniqueArray.push(item);
      }
      function isDuplicate(array, item) {
        const uniqueProperty = item.id;
        return array.some((existingItem) => existingItem.id === uniqueProperty);
      }
    }
    setHistoryList(uniqueArray);
    console.log(uniqueArray);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: "20rem",
        top: " 5rem",
        marginBottom: "100px",
        overflowX: "hidden",
      }}
      className="watchLater"
    >
      <h4 className="ms-5">
        <BiHistory className="mx-2 fs-3" />
        Watch Later
      </h4>
      {historyList.map((videos) => (
        <div className="">
          {videos.id === "WATCH LATER" ? (
            <h3>{videos.msg}</h3>
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
                  <div className="mb-3 channel-content">
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
                  <p className="mb-1 video-views">
                    {videos.subscribers} subscribers
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default WatchLater;
