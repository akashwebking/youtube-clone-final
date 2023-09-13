import React, { useState } from "react"; // Import useState
import RightFilter from "../components/rightFilter";
import { Link } from "react-router-dom";

function RightSidevd() {
  const [selectedFilter, setSelectedFilter] = useState("all"); // Initialize with "all"
  // ...
  const videos = [
    {
      id: 1,
      thumbnailSrc:
        "https://th.bing.com/th/id/OIP.BwJ84XJUWpPNpSKFGU8KDQHaEO?pid=ImgDet&rs=1",
      channelIconSrc:
        "https://yt3.ggpht.com/ZXdU2_la3sKTncWwYaF-sU3jCDaFsIG_uQC6tOmhgqsFsUDLNlDytibY-4NSx0xOWWbp2HIV=s48-c-k-c0x00ffffff-no-rj",
      title: "web design by reactjs for frontEnd",
      channelName: "Akil",
      subscribers: "50k Views . 1 Year ago 500k  ",
      dataItem: "css", // Filter category
    },
    {
      id: 2,
      thumbnailSrc: "https://hackr.io/blog/python-vs-java/thumbnail/medium",
      channelIconSrc:
        "https://yt3.ggpht.com/FqiGBOsNpeWbNw20ULboW0jy88JdpqFO9a-YRJ0C2oc4lZ8uoHYJ38PWSkrjdC_zQgNW9pGU=s48-c-k-c0x00ffffff-no-rj",
      title: "Python in 8 minutes (compared to Java)",
      channelName: "NeetCode",
      subscribers: "50K Views . 6 months ago 1M",
      dataItem: "python", // Filter category
    },
    {
      id: 3,
      thumbnailSrc: "https://i.ytimg.com/vi/sx-1gYJyJmo/maxresdefault.jpg",
      channelIconSrc:
        "https://yt3.googleusercontent.com/NlOyQWcjSrIJPDwr8OW28IgNGho_s9rhsuhxcjfytMAqy2Fc9vJ7zNPBMWCy3ECkzvmjNV1kMA=s176-c-k-c0x00ffffff-no-rj",
      title:
        "How to make Desktop Application Using Python and Html Css || python desktop application",
      channelName: "CodeScripts",
      subscribers: "1K Views . 10 months  ago 200k  ",
      dataItem: "python", // Filter category
    },
    {
      id: 4,
      thumbnailSrc: "https://i.ytimg.com/vi/rMCdddVUDX8/maxresdefault.jpg",
      channelIconSrc:
        "https://yt3.ggpht.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s48-c-k-c0x00ffffff-no-rj",
      title:
        "JavLink vs Python Comparision | Which is Better For Future Java or Python | JavLink & Python | Simplilearn",
      channelName: "Simplilearn",
      subscribers: "50K Views . 3 Year ago 3.27M ",
      dataItem: "python", // Filter category
    },
    {
      id: 5,
      thumbnailSrc: "https://i.ytimg.com/vi/9Q3YqB0rHys/maxresdefault.jpg",
      channelIconSrc:
        "https://yt3.ggpht.com/d8kYE1c2rp8m9AiF1-CpIWes0P_PSuRK8R2PjEdLWH9tcPMf07xOE84uSTxL4EbUVXwNhgnPfw=s48-c-k-c0x00ffffff-no-rj",
      title: "Python Tutorial - Python Full Course for Beginners in Tamil",
      channelName: "Error Makes Clever Academy",
      subscribers: "20K Views . 2 months ago 374K ",
      dataItem: "python",
    },
    {
      id: 6,
      thumbnailSrc:
        "https://i.pinimg.com/originals/bd/88/ed/bd88eda44a5be939a9c30b74a2a7a751.jpg",
      channelIconSrc:
        "https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s48-c-k-c0x00ffffff-no-rj",
      title:
        "Introduction to JavLink Language | Lecture 1 | Complete Placement Course",
      channelName: "ApnLink College",
      subscribers: "1M Views . 2 Year ago 4.21M ",
      dataItem: "java",
    },
    {
      id: 7,
      thumbnailSrc:
        "https://th.bing.com/th/id/OIP.-30615OIch3KZT-TjE88GwHaEK?pid=ImgDet&rs=1",
      channelIconSrc:
        "https://yt3.ggpht.com/_V4puAFTbWDOKAoUDhLbkYk4AupABvXsNVajUuo5zrIx-LEjaBkWsAPgif2KJaB7MmBIBcFRWw=s48-c-k-c0x00ffffff-no-rj",
      title: "How To Make THE BEST Thumbnails on YouTube (Photoshop)",
      channelName: "finzar",
      subscribers: "1K Views . 10 months ago 303K ",
      dataItem: "web Developement",
    },
    {
      id: 8,
      thumbnailSrc:
        "https://word-brokers.com/wp-content/uploads/2019/08/feature-image-768x600.png",
      channelIconSrc:
        "https://yt3.ggpht.com/ytc/AOPolaTs1IEit9EUooQAJkWS4SkpUE7oMDXYrjIgnOk1Kw=s48-c-k-c0x00ffffff-no-rj",
      title: "The BEST Way to Build Link Header! [HTML,CSS]",
      channelName: "Marc Hinton",
      subscribers: "2K Views . 3 Year ago 7.65K ",
      dataItem: "web Developement",
    },
    {
      id: 9,
      thumbnailSrc:
        "https://th.bing.com/th/id/OIP.VXz8-uu7svTtBvYWF2vI4AHaD4?pid=ImgDet&rs=1",
      channelIconSrc:
        "https://yt3.ggpht.com/ytc/AOPolaTs1IEit9EUooQAJkWS4SkpUE7oMDXYrjIgnOk1Kw=s48-c-k-c0x00ffffff-no-rj",
      title:
        "Build Link Simple Website with HTML, CSS, JavaScript – Course for Beginners",
      channelName: "freeCodeCamp.org",
      subscribers: "2M Views . 3 Year ago 8.26M  ",
      dataItem: "html css",
    },
    {
      id: 10,
      thumbnailSrc:
        "https://th.bing.com/th/id/R.bc7a0289710df5f1393cdf78a2887539?rik=di3ZsoqRjogTeg&riu=http%3a%2f%2felearner.in%2fassets%2fimages%2flogo%2fhtml.jpg&ehk=znZGlErwfi9OXFMQDciRPALNR%2briisv0qz9Te0zihRc%3d&risl=&pid=ImgRaw&r=0",
      channelIconSrc:
        "https://yt3.ggpht.com/MgbkdtBeJKRobFd8hUJtwg05HoYN9imuK4RFlSAf2XobMGfh6SRMuSUKFAZ-0qALW7zpEfbYvA=s48-c-k-c0x00ffffff-no-rj",
      title: "Learn Complete HTML Tutorial In Tamil | தமிழ்",
      channelName: "Tutor Joe's Stanley",
      subscribers: "23K Views . 9 months ago 441K  ",
      dataItem: "html css",
    },
    {
      id: 11,
      thumbnailSrc: "https://i.ytimg.com/vi/l65CSW8D1Pk/maxresdefault.jpg",
      channelIconSrc:
        "https://yt3.ggpht.com/ytc/AOPolaSVhMsmmtIJHWb94Lh0RPxQuDkuo9lsWWKNWOxXpg=s48-c-k-c0x00ffffff-no-rj",
      title:
        "#1 - What is Bootstrap CSS? - (தமிழில்) (Tamil) | Bootstrap Course",
      channelName: "CyberDude Networks Pvt. Ltd.",
      subscribers: "5K Views . 7 months ago 61.3K ",
      dataItem: "bootstrap",
    },
    {
      id: 12,
      thumbnailSrc:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/115235028/original/0a89b92fa9efb18412f454db806e4a1081753f20/create-a-responsive-website-with-html-css.jpg",
      channelIconSrc:
        "https://yt3.ggpht.com/ytc/AOPolaQMtqt8g-xxJ3BkIF06RPiJcIsPzbSOLOwDVAA5pw=s48-c-k-c0x00ffffff-no-rj",
      title:
        "Web Development 101: How HTML, CSS, JavaScript & PHP Work Together | PHP Tutorial #3",
      channelName: "CodeWithHarry",
      subscribers: "3M Views . 3 Year ago 4.41M ",
      dataItem: "web-development",
    },
    {
      id: 13,
      thumbnailSrc:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/110072223/original/9b7695518867617d85407d34b1a0129e5632e148/design-html-css-java-script-bootstrap.jpg",
      channelIconSrc:
        "https://yt3.ggpht.com/ytc/AOPolaRu3zcJ4_fybe-8GJUmrGzc2S6xYsxw0HgMnfnI=s48-c-k-c0x00ffffff-no-rj",
      title: "HTML & CSS Full Course - Beginner to Pro",
      channelName: "SuperSimpleDev",
      subscribers: "50K Views . 1 Year ago 278K  ",
      dataItem: "html-css",
    },
    {
      id: 14,
      thumbnailSrc:
        "https://th.bing.com/th/id/OIP.kXNc1BUd2mO2WuYkZRGwNQHaEK?pid=ImgDet&rs=1",
      channelIconSrc:
        "https://yt3.ggpht.com/ytc/AOPolaQ2iMmw9cWFFjnwa13nBwtZQbl-AqGYkkiTqNaTLg=s48-c-k-c0x00ffffff-no-rj",
      title: "7 better ways to create Link React app",
      channelName: "Fireship",
      subscribers: "90K Views . 1 Year ago 2.39M ",
      dataItem: "react",
    },
    {
      id: 15,
      thumbnailSrc:
        "	https://i.ytimg.com/vi/7T3gVzKHOlU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDiQiLzGQLRLrXIHqfaUtp5CqkmFg",
      channelIconSrc:
        "https://yt3.ggpht.com/sm9KjocCAAXBPB5gyBMk24j6ZWk2t8nOw2ID_00u5fiS2qBH3MIiphaklt5wq91KeSCHwlCz=s48-c-k-c0x00ffffff-no-rj",
      title:
        "Top 7 Tools For Web Development | Web Development Tools | Intellipaat",
      channelName: "Intellipaat",
      subscribers: "2M Views . 1 Year ago 6.97M",
      dataItem: "web-tools",
    },
    {
      id: 16,
      thumbnailSrc:
        "https://th.bing.com/th/id/OIP.N5IxrF7hOvVZrO7_AI8IeAHaEG?pid=ImgDet&rs=1",
      channelIconSrc:
        "https://yt3.ggpht.com/s5Eex4ZIqBSe2y2k5aidi71WGkfEJORkY-Hn2QDVMJxnkpRB5FdlOiHC9V1yyLuxSaCv5JCVYmM=s48-c-k-c0x00ffffff-no-rj",
      title: "Getting CSS Styles with JavaScript - getComputedStyle() function",
      channelName: "dcode",
      subscribers: "5K Views . 3 Year ago 121K",
      dataItem: "javascript-css",
    },
    {
      id: 17,
      thumbnailSrc:
        "https://th.bing.com/th/id/OIP.wr5x7VkvnQNHKLY1tm6vDAHaEK?pid=ImgDet&rs=1",
      channelIconSrc:
        "https://yt3.ggpht.com/ytc/AOPolaQ8qd9YUFBorodGktxw_--6xfk2EscQ-aT2v-dC6w=s48-c-k-c0x00ffffff-no-rj",
      title: "HTML & CSS Full Course for free 🌎 (2023)",
      channelName: "Bro Code",
      subscribers: "50K Views . 1 Year ago 1.2M",
      dataItem: "html-css",
    },
    {
      id: 18,
      thumbnailSrc:
        "https://th.bing.com/th/id/OIP.dDtlFuI4suV5bS_0kZc2pgHaEn?pid=ImgDet&rs=1",
      channelIconSrc:
        "https://yt3.ggpht.com/MgbkdtBeJKRobFd8hUJtwg05HoYN9imuK4RFlSAf2XobMGfh6SRMuSUKFAZ-0qALW7zpEfbYvA=s48-c-k-c0x00ffffff-no-rj",
      title:
        "JavaScript Complete Tutorial in Tamil | Tutor Joes | Full Stack Web Development",
      channelName: "Tutor Joe's Stanley",
      subscribers: "10K Views . 10 months ago 441K",
      dataItem: "javascript",
    },
    {
      id: 19,
      thumbnailSrc:
        "https://th.bing.com/th/id/OIP.W7njWRGFe9g7F05CdhUsmAHaEN?pid=ImgDet&rs=1",
      channelIconSrc:
        "https://yt3.ggpht.com/zSgb9auUHE_pgzi5Thya71hkDGx-F0F56SbpH3sW1IG899YDeva92ff0Is1oidgB3J1v4kgTTw=s48-c-k-c0x00ffffff-no-rj",
      title: "01. HTML, CSS, JS to React - #01 Introduction and Setup",
      channelName: "Lifetechfacts",
      subscribers: "800 Views . 10 months ago 3.24K",
      dataItem: "react",
    },
    {
      id: 20,
      thumbnailSrc:
        "https://i.ytimg.com/vi/G4O3Hon8Sh0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA8wFrJMJ-OIUDkaoSQYJzsMBnWAA",
      channelIconSrc:
        "https://yt3.ggpht.com/ytc/AOPolaReFpOoeq7FZ3A0u6MOKndgE57CV-5vpqGIlt4yBA=s48-c-k-c0x00ffffff-no-rj",
      title: "Building website with C++",
      channelName: "Ishtiak Mokut",
      subscribers: "50 Views . 20 Days ago 372",
      dataItem: "cpp-web",
    },
    {
      id: 21,
      thumbnailSrc:
        "	https://i.ytimg.com/vi/QV2kGyEApuQ/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDX--ndz4AmENioBp494kL0qIojMA",
      channelIconSrc:
        "https://yt3.ggpht.com/ytc/AOPolaQOnFvK_FiJL_iPMKp3Jq72QOsR129YCbLepcSaUw=s88-c-k-c0x00ffffff-no-rj",
      title:
        "#1 | Program to print half pyramid using * and Numbers | Java Pattern Programming in Tamil",
      channelName: "SANTRA TECHSPOT",
      subscribers: "3K Views . 9 months ago 55.5K",
      dataItem: "java",
    },
    {
      id: 22,
      thumbnailSrc:
        "https://i.ytimg.com/vi/GlEY28YLffs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLALQH6y336dPw_ib69a1SdSFyg74A",
      channelIconSrc:
        "https://yt3.ggpht.com/lMqV4Au-V6YjSRCLR14LeXMoMR1n…Vcar9EOiZm1z2PJ3zHclmy2=s88-c-k-c0x00ffffff-no-rj",
      title:
        "CSS Tutorial for beginners in Tamil | Full Course for Beginners | Basic to Advanced concepts",
      channelName: "Balachandra",
      subscribers: "5K Views . 1 Year ago 31.7K",
      dataItem: "css",
    },
    {
      id: 23,
      thumbnailSrc:
        "https://i.ytimg.com/vi/ESnrn1kAD4E/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCM4TFslI3SlIi1HgliT3Rcy6cT1w",
      channelIconSrc:
        "	https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0t…Vigp2kxJubYEVwBcBlogZDe=s88-c-k-c0x00ffffff-no-rj",
      title:
        "CSS Tutorial for Beginners | Complete CSS with Project, Notes & Code",
      channelName: "Apna College",
      subscribers: "800K Views . 6 months ago 2M",
      dataItem: "css",
    },
    {
      id: 24,
      thumbnailSrc:
        "	https://i.ytimg.com/vi/vLnPwxZdW4Y/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCE2SKqCRgaHXYYY78hJp_jTn8_3A",
      channelIconSrc:
        "		https://yt3.ggpht.com/ytc/AOPolaTs1IEit9EUooQAJkWS4SkpUE7oMDXYrjIgnOk1Kw=s68-c-k-c0x00ffffff-no-rj",
      title: "C++ Tutorial for Beginners - Full Course",
      channelName: "freeCodeCamp.org",
      subscribers: "3M Views . 2 Year ago 8.27M",
      dataItem: "cpp-web",
    },
    {
      id: 25,
      thumbnailSrc:
        "	https://i.ytimg.com/vi/lh3MGxP3Rl8/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLA5yyjR4rZwFfnjwnThcUkkyr2P6w",
      channelIconSrc:
        "			https://yt3.ggpht.com/ytc/AOPolaReFpOoeq7FZ3A0u6MOKndgE57CV-5vpqGIlt4yBA=s68-c-k-c0x00ffffff-no-rj",
      title: "Building website with C++",
      channelName: "Ishtiak Mokut",
      subscribers: "100 Views . 7 Days ago 376",
      dataItem: "cpp-web",
    },
    {
      id: 26,
      thumbnailSrc:
        "		https://i.ytimg.com/vi/TcTSqhpm80Y/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAOXNux-4rDtnkGFweA12bTj5wHeA",
      channelIconSrc:
        "				https://yt3.ggpht.com/ytc/AOPolaQ2iMmw9cWFFjnwa13nBwtZQbl-AqGYkkiTqNaTLg=s68-c-k-c0x00ffffff-no-rj",
      title: "21+ Browser Dev Tools & Tips You Need To Know",
      channelName: "Fireship",
      subscribers: "1M Views . 2 years ago 2.4M",
      dataItem: "web-tools",
    },
    {
      id: 27,
      thumbnailSrc:
        "https://i.ytimg.com/vi/TIu_KrdWO1M/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDLqKSmYVVX8CXu8Q1n5jL9Mtpiiw",
      channelIconSrc:
        "					https://yt3.ggpht.com/ytc/AOPolaQtlu0PGwRzx9cBYqccwGgJquizsY8oLzj-c7mNGQ=s68-c-k-c0x00ffffff-no-rj",
      title: "21+ Browser Dev Tools & Tips You Need To Know",
      channelName: "GorkCoder",
      subscribers: "10k Views . 6 months ago 376 800k",
      dataItem: "react",
    },
    {
      id: 28,
      thumbnailSrc:
        "https://i.ytimg.com/vi/tu1DeYVOJL4/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBD9dnBR-hciVnPXoHmWD0sPS09cw",
      channelIconSrc:
        "	https://yt3.ggpht.com/PkDljE3xM2RwK7Y9vF5UG5yGEy1m…xxmTaSlllCGlac7Jnf3bfYg=s68-c-k-c0x00ffffff-no-rj",
      title: "High-tech circus: The future of entertainment?",
      channelName: "CNN Business",
      subscribers: "100k Views . 12 Days ago 1M",
      dataItem: "entertainment",
    },
    {
      id: 29,
      thumbnailSrc:
        "	https://i.ytimg.com/vi/c_dlAdBhPng/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBKsNjk9f4Tjhq562JYgEJTw4FShg",
      channelIconSrc:
        "	https://yt3.ggpht.com/ytc/AOPolaQIPtPYGGPVHeOlmzzJFGneh04djMx6nHIS0ZEAEw=s68-c-k-c0x00ffffff-no-rj",
      title: "The Future of Entertainment",
      channelName: "The List Snow Tv",
      subscribers: "800 Views . 7 Days ago 100k",
      dataItem: "entertainment",
    },
    {
      id: 30,
      thumbnailSrc:
        "		https://i.ytimg.com/vi/6kcmTTYDPF0/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBkAn4ggGVAitVrz_eVkjCx0g8Y_g",
      channelIconSrc:
        "	https://yt3.ggpht.com/ytc/AOPolaSiRupzEgAaZYAidbAFh-nh3C-Blwf1BEOpL4Gn=s68-c-k-c0x00ffffff-no-rj",
      title: "Technology and entertainment",
      channelName: "Pacey vids",
      subscribers: "300k Views . 7 Days ago 2M",
      dataItem: "entertainment",
    },
    // Add more video objects here
  ];
  // Filter the videos based on the selected filter
  const filteredVideos =
    selectedFilter === "all"
      ? videos
      : videos.filter((video) => video.dataItem === selectedFilter);

  return (
    <div className="right_video-container12">
      <div
        style={{
          width: "480px",
          height: "100vh",
          marginTop: "40px",
          position: "relative",
        }}
      >
        <RightFilter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <div style={{ marginTop: "2rem" }} className=" right_video-container">
          {filteredVideos.map((video) => (
            <Link
              to={`/video/${video.id}`}
              key={video.id}
              className="text-decoration-none"
            >
              <div
                style={{
                  width: "240px",
                  marginBottom: "-50px",
                }}
                className=" d-flex video box"
              >
                <img
                  className="right_thumbnail"
                  src={video.thumbnailSrc}
                  alt=""
                />

                <div className=" content">
                  {/* <img
                    className="thumbnail channel-icon"
                    src={video.channelIconSrc}
                    alt=""
                  /> */}
                  <div style={{ width: "10rem" }} className="info ">
                    <h3 className="title_1 ">{video.title}</h3>
                    <p className="channel-name">{video.channelName}</p>
                    <p className=" views">{video.subscribers} subscribers</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default RightSidevd;
