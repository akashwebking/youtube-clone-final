import React, { useState, useEffect } from "react";
import "../components/comments.css";
import image1 from "../assets/Jack.png";
import Button from "react-bootstrap/Button";

const CommentComponent = ({ videoId }) => {
  // State to manage comments
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Function to handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const currentTime = new Date();
      const commentData = {
        username: "Praveen",
        time: currentTime,
        comment: newComment,
      };
      setComments([...comments, commentData]);
      setNewComment("");

      // Save comments to local storage
      localStorage.setItem(
        `comments_${videoId}`,
        JSON.stringify([...comments, commentData])
      );
    }
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    const text = e.target.value;
    setNewComment(text);
  };

  useEffect(() => {
    // Load comments from local storage based on the videoId when the component mounts
    const storedComments = localStorage.getItem(`comments_${videoId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [videoId]);

  // Function to format time difference
  const formatTimeDifference = (timestamp) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - timestamp) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} second${diffInSeconds !== 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
      return "a while ago";
    }
  };

  return (
    <div className="comments">
      <h4>
        {comments.length === 0
          ? "0"
          : comments.length < 10
          ? `0${comments.length}`
          : comments.length}{" "}
        Comments
      </h4>

      <div style={{ width: "770px" }} className="add-comment">
        <img src={image1} alt="" />
        <input
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleInputChange}
        />
        <Button type="button" size="sm" onClick={handleAddComment}>
          Comment
        </Button>
      </div>

      <div className="comment-list">
        {comments.map((commentData, index) => (
          <div className="new-comment" key={index}>
            <img src={image1} alt="" />
            <div>
              <h3>
                {commentData.username}{" "}
                <span>{formatTimeDifference(commentData.time)}</span>
              </h3>
              <p>{commentData.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentComponent;
