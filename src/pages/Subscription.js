import React, { useState, useEffect } from "react";
import { BsFillBellFill, BsBell } from "react-icons/bs";
import '../components/Subscribtion.css';

const Subscription = () => {
  const [status, setStatus] = useState(true);
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("subscription")) || [
      { id: "Subscription", msg: "No Data Found" },
    ];

    const uniqueArray = savedHistory.filter((item, index, self) =>
      index === self.findIndex((t) => t.id === item.id)
    );

    setHistoryList(uniqueArray);
  }, []);

  function belliconclick() {
    setStatus(!status);
  }

  return (
    <div
      style={{
        position: "absolute",
        left: "5rem",
        top: "5rem",
        marginBottom: "100px",
        overflowX: "hidden",
      }}
    >
      <h4 className="hed">subscription</h4>
      {historyList.map((videos) => (
        videos.id === "Subscription" ? (
          <h3 className="hed" key={videos.id}>{videos.msg}</h3>
        ) : (
          <div className="container channel" key={videos.id}>
            <div className="row">
              <div className="col">
                <div className="channelcon">
                  <div>
                    <img src={videos.channelIconSrc} className='channalimg' alt="" />
                  </div>
                  <div className='channeldescripion'>
                    <h3>{videos.channelName}</h3>
                    <p>Subscribers: {videos.subscribers}</p>
                    <p>Videos: {videos.totalvid}</p>
                  </div>
                  <div className='bell'>
                    {status ? <BsBell onClick={belliconclick} /> : <BsFillBellFill onClick={belliconclick} />} <button>subscribed</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default Subscription;
