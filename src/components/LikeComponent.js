import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import './likeComponent.css';

const LikeComponent = ({ initialLikes, initialDislikes,likedvideos }) => {
  const [likes, setLikes] = useState(initialLikes || 0);
  const [dislikes, setDislikes] = useState(initialDislikes || 0);
  const [likeOrDislike, setLikeOrDislike] = useState(null);

  const handleLikeClick = (liked) => {
    if (likeOrDislike === 'like') {
      setLikes(likes - 1);
      setLikeOrDislike(null);
    } else {
      if (likeOrDislike === 'dislike') {
        setDislikes(dislikes - 1);
      }
      setLikes(likes + 1);
      setLikeOrDislike('like');
    }


  };

  let likedvideoHistory=[];
  const likedvid=(likedhistory)=>{
    const savedHistory = JSON.parse(localStorage.getItem("likedVideos")) || [];
    likedvideoHistory.push(likedhistory);
    const updatedLikedHistory = [...savedHistory, ...likedvideoHistory];
    localStorage.setItem("likedVideos", JSON.stringify(updatedLikedHistory));
  }

  const handleDislikeClick = () => {
    if (likeOrDislike === 'dislike') {
      setDislikes(dislikes - 1);
      setLikeOrDislike(null);
    } else {
      if (likeOrDislike === 'like') {
        setLikes(likes - 1);
      }
      setDislikes(dislikes + 1);
      setLikeOrDislike('dislike');
    }
  };

  return (
    <div className="like-component">
      <span
        className={`like-icon ${likeOrDislike === 'like' ? 'liked' : ''}`}
        onClick={handleLikeClick}
      >
        <span onClick={likedvid(likedvideos)}></span>
        <AiOutlineLike className="icon" /> {likes}
      </span>
      <span
        className={`dislike-icon ${
          likeOrDislike === 'dislike' ? 'disliked' : ''
        }`}
        onClick={handleDislikeClick}
      >
        <AiOutlineDislike className="icon" />{' '}
        {likeOrDislike === 'dislike' ? dislikes : ''}
      </span>
    </div>
  );
};

export default LikeComponent;
