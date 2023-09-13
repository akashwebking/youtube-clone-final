import React from "react";
import "./Navbar.css";
import logo from "../assets/yt-logo.png";
import { Link } from "react-router-dom";
import { HiOutlineBars3, HiMagnifyingGlass } from "react-icons/hi2";
import { MdMic } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";

import { FaRegBell } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { useState } from "react";

import {
  BsFillPlayCircleFill,
  BsFillCollectionPlayFill,
  BsPlayBtn,
} from "react-icons/bs";
import { MdOutlineVideoLibrary, MdOutlineWatchLater } from "react-icons/md";
import { BiHistory } from "react-icons/bi";
import { BiLike } from "react-icons/bi";

function Newnavbar() {
  const [isActive, setActive] = useState("true");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="containers">
      {/* ----------------------Navbar Start------------------------- */}

      <nav className="flex-div">
        <div className="left-side flex-div">
          <span className="menubar fs-3" onClick={handleToggle}>
            {" "}
            <HiOutlineBars3 />
          </span>

          <Link to="/">
            <img src={logo} alt="Youtube logo" className="" />
          </Link>
        </div>
        <div className="middle flex-div ">
          <div className="search-box flex-div">
            <input type="text" placeholder="Search" />
            <button className="fs-4">
              <HiMagnifyingGlass />
            </button>
          </div>

          <button className="fs-4 mic-icon">
            {" "}
            <MdMic />
          </button>
        </div>
        <div className="right-side flex-div">
          <i className="fs-4 small">
            <BiVideoPlus />
          </i>
          <i className="fs-4 small">
            <FaRegBell />
          </i>
          <i className="fs-4">
            <FaRegCircleUser />
          </i>
        </div>
      </nav>
      {/* ----------------------Navbar End-------------------------- */}

      {/* --------------------- Side Bar Start--------------------- */}

      <aside className={`navigate-links ${isActive ? "activate" : "null"}`}>
        <Link
          activeclassName="active"
          to="/"
          key="0"
          className={`navlinks ${isActive}`}
        >
          <span className="icon">
            <FaHome />
          </span>
          <span className={`${isActive}`}>Home</span>
        </Link>
        <Link
          key="1"
          to="/shorts"
          className={`navlinks ${isActive}`}
          activeclassName="active"
        >
          <span className="icon">
            <BsFillPlayCircleFill />
          </span>
          <span className={`${isActive}`}>Shorts</span>
        </Link>
        <Link
          key="2"
          to="/subscription"
          activeclassName="active"
          className={`navlinks ${isActive}`}
        >
          <span className="icon">
            <BsFillCollectionPlayFill />
          </span>
          <span v>Subscription</span>
        </Link>
        <hr className={`${isActive} text-white me-2`} />
        <Link
          key="3"
          to="/library"
          activeclassName="active"
          className="navlinks"
        >
          <span className={`icon ${isActive}`}>
            <MdOutlineVideoLibrary />
          </span>
          <span className={`${isActive}`}>Library</span>
        </Link>
        <Link
          to="/history"
          key="4"
          activeclassName="active"
          className="navlinks"
        >
          <span className={`icon ${isActive}`}>
            <BiHistory />
          </span>
          <span className={`${isActive}`}>History</span>
        </Link>
        <Link
          to="/yourvideos"
          key="5"
          activeclassName="active"
          className="navlinks"
        >
          <span className={`icon ${isActive}`}>
            <BsPlayBtn />
          </span>
          <span className={`${isActive}`}>Your Videos</span>
        </Link>
        <Link
          to="/watchlater"
          key="6"
          activeclassName="active"
          className="navlinks"
        >
          <span className={`icon ${isActive}`}>
            <MdOutlineWatchLater />
          </span>
          <span className={`${isActive}`}>Watch Later</span>
        </Link>
        <Link
          to="/likedvideos"
          key="7"
          activeclassName="active"
          className="navlinks"
        >
          <span className={`icon ${isActive}`}>
            <BiLike />
          </span>
          <span className={`${isActive}`}>Liked Videos</span>
        </Link>
      </aside>

      {/* --------------------- Side Bar End----------------------- */}
    </div>
  );
}

export default Newnavbar;
