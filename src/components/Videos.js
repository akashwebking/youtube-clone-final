import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { BiSolidCommentDetail, BiDotsHorizontal } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import ReactPlayer from "react-player";

const videoURLs = [
  {
    url: "https://www.youtube.com/embed/AGKPeStDipE",
    views: 1000,
    comments: 120,
  },
  {
    url: "https://www.youtube.com/embed/vzImaMe7gT8",
    views: 2000,
    comments: 20,
  },
  {
    url: "https://youtube.com/shorts/peDL4njZnvE?si=rF7Yovy3s2A6sS26",
    views: 3000,
    comments: 140,
  },
  {
    url: "https://youtube.com/shorts/mbBOtmRR-ZQ?si=qGpVnEagNaNYwIUh",
    views: 1000,
    comments: 120,
  },
  {
    url: "https://youtube.com/shorts/IFpcAfV8TaY?si=LZ0-1crs6xd6rbdq",
    views: 2000,
    comments: 20,
  },
  {
    url: "https://youtube.com/shorts/y687P6_P3dw?si=SwIqIYgwUp73sgyX",
    views: 3000,
    comments: 140,
  },
  ,
  {
    url: "https://youtube.com/shorts/W6Eh9kXWktA?si=PjQKZIgHyOiJrTfP",
    views: 2000,
    comments: 20,
  },
  {
    url: "https://youtube.com/shorts/TDmUPEAEGxM?si=agrHsddPd-X2pzGa",
    views: 3000,
    comments: 140,
  },
  {
    url: "https://youtube.com/shorts/mBE_Dez7o0A?si=xAe6tSbWgE0efhMy",
    views: 1000,
    comments: 120,
  },
  {
    url: "https://youtube.com/shorts/Umoom3QfyKU?si=TLGmf4_ckOg92WYm",
    views: 2000,
    comments: 20,
  },
  {
    url: "https://youtube.com/shorts/TDmUPEAEGxM?si=cGl1q6N751m2aAe8",
    views: 2345,
    comments: 140,
  },
];

function Videos() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const currentVideo = videoURLs[currentVideoIndex];

  const handleNextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % videoURLs.length;
    setCurrentVideoIndex(nextIndex);
  };

  const handlePreviousVideo = () => {
    const prevIndex =
      (currentVideoIndex - 1 + videoURLs.length) % videoURLs.length;
    setCurrentVideoIndex(prevIndex);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowUp") {
        // Move to the previous video
        const prevIndex =
          (currentVideoIndex - 1 + videoURLs.length) % videoURLs.length;
        setCurrentVideoIndex(prevIndex);
      } else if (e.key === "ArrowDown") {
        // Move to the next video
        const nextIndex = (currentVideoIndex + 1) % videoURLs.length;
        setCurrentVideoIndex(nextIndex);
      }
    };

    // Add event listener to the document
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentVideoIndex]);

  return (
    <div
      className=" video"
      style={{
        textAlign: "center",
        position: "relative",
      }}
    >
      <div
        className="video-content d-flex align-items-end"
        style={{ display: "inline-block", width: "25%", margin: "3rem auto" }}
      >
        <div style={{ marginRight: "500px" }}>
          <h3 className="text-light">@Shorts</h3>
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={currentVideo.url}
            width="400px"
            height="90vh"
          />
        </div>
        <div
          style={{ marginTop: "-280px" }}
          className=" like-dislike align-itmes-center justify-content-center"
        >
          <button
            className="arrow-button"
            onClick={handlePreviousVideo}
            style={{
              fontSize: "25px",
              position: "absolute",
              bottom: "0",
              right: "0",
              padding: "5px 5px",
              color: "white",
              borderRadius: "50%",
              backgroundColor: "#474747",
            }}
          >
            <BsArrowDown />
          </button>

          <div>
            <div
              style={{
                fontSize: "20px",
                color: "white",
                marginLeft: "4px",
                padding: "4px 0px",
                borderRadius: "50%",
                backgroundColor: "#474747",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaThumbsUp />{" "}
            </div>
            <p style={{ marginTop: "4px", color: "white", fontSize: "14px" }}>
              {" "}
              {currentVideo.views}
            </p>
          </div>
          <div>
            <div
              style={{
                fontSize: "20px",
                color: "white",
                marginLeft: "4px",
                padding: "4px 0px",
                borderRadius: "50%",
                backgroundColor: "#474747",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaThumbsDown />
            </div>
            <p style={{ marginTop: "4px", color: "white", fontSize: "14px" }}>
              Dislike
            </p>
          </div>
          <div>
            <div
              style={{
                fontSize: "20px",
                color: "white",
                marginLeft: "4px",
                padding: "4px 0px",
                borderRadius: "50%",
                backgroundColor: "#474747",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BiSolidCommentDetail />
            </div>
            <p
              style={{ marginTop: "4px", color: "white", fontSize: "14px" }}
            ></p>
          </div>
          <div>
            <div
              style={{
                fontSize: "20px",
                color: "white",
                marginLeft: "4px",
                padding: "4px 0px",
                borderRadius: "50%",
                backgroundColor: "#474747",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IoMdShareAlt />
            </div>
            <p style={{ marginTop: "4px", color: "white", fontSize: "14px" }}>
              Share
            </p>
          </div>
          <div>
            <div
              style={{
                fontSize: "20px",
                color: "white",
                marginLeft: "4px",
                padding: "4px 0px",
                borderRadius: "50%",
                backgroundColor: "#474747",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BiDotsHorizontal />
            </div>
          </div>
          <button
            className="arrow-button"
            onClick={handleNextVideo}
            style={{
              fontSize: "25px",
              position: "absolute",
              top: "0",
              right: "0",
              padding: "5px 5px",
              color: "white",
              borderRadius: "50%",
              backgroundColor: "#474747",
            }}
          >
            <BsArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Videos;
