import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import Subscription from "./pages/Subscription";
import Library from "./pages/Library";
import History from "./pages/History";
import YourVideos from "./pages/YourVideos";
import WatchLater from "./pages/WatchLater";
import LikedVideos from "./pages/LikedVideos";
import VideoPage from "./components/VideoPage";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/library" element={<Library />} />
            <Route path="/history" element={<History />} />
            <Route path="/yourvideos" element={<YourVideos />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="/likedvideos/" element={<LikedVideos />} />

            <Route path="/video/:videoId" element={<VideoPage></VideoPage>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
