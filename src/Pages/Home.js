import React from "react";
import Header from "../components/Header";
import VideoCard from "../components/VideoCard";
import "./Home.css";
function Home() {
  return (
    <div className="bg-gray-100 grid place-items-center h-[100vh]">
      <div className=" h-[95vh] w-[70vh] bg-white rounded-md app_videos">
        <Header />
        <VideoCard />
      </div>
    </div>
  );
}

export default Home;
