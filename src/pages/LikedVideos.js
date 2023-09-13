import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { BiSolidLike } from "react-icons/bi";
import "../components/likeComponent.css";

const LikedVideos = () => {
  const [LikedList, setLikedList] = useState([]);
  useEffect(() => {
    const savedLikedvideo = JSON.parse(localStorage.getItem("likedVideos")) || [
      { id: "likedVideos", msg: "Your Liked Videos is empty" },
    ];
    const uniqueLikedArray = [];
    for (const item of savedLikedvideo) {
      if (!isDuplicate(uniqueLikedArray, item)) {
        uniqueLikedArray.push(item);
      }
      function isDuplicate(array, item) {
        const uniqueLikedProperty = item.id; // Change 'id' to the unique property of your objects

        return array.some(
          (existingItem) => existingItem.id === uniqueLikedProperty
        );
      }
    }
    setLikedList(uniqueLikedArray);
    console.log(uniqueLikedArray);
  }, []);

  return (
    <div className="history">
      <h4 className="ms-5 fw-bold">Liked Videos</h4>
      {LikedList.map((liked) => (
        <div className="">
          {liked.id === "likedVideos" ? (
            <h3>{liked.msg}</h3>
          ) : (
            <Link className="links" to={`/video/${liked.id}`} key={liked.id}>
              <div className="video-style ">
                <img
                  className="his-thumbnail"
                  src={liked.thumbnailSrc}
                  alt=""
                />

                <div className="video-content text-light ">
                  <div className="video-info">
                    <p className="mb-3 video-title_1">{liked.title}</p>
                  </div>
                  <div className="mb-3 channel-content ">
                    <img
                      className="video-thumbnail"
                      src={liked.channelIconSrc}
                      alt=""
                      style={{ width: 35, height: 35 }}
                    />
                    <p className="my-auto video-channel-name">
                      {liked.channelName}
                    </p>
                  </div>
                  <p className="mb-1 video-views">
                    {liked.subscribers} subscribers
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

export default LikedVideos;
