import React from "react";
import Header from "../components/Header";
import { BiLike } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import VideoCard from "../components/VideoCard";
import "./Home.css";
function Home() {
  return (
    <div className=" bg-gray-500 grid place-items-center h-[100vh]">
      <div className="w-[70vh] ">
        <Header />
      </div>
      <div className="flex">
        <div className=" h-[85vh] w-[70vh] bg-white rounded-b-md app_videos">
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
        <div className=" flex flex-col space-y-5 mt-44">
          <div className=" bg-white rounded-full p-3 cursor-pointer items-center">
            <BiLike className="" />
          </div>
          <div className="bg-white rounded-full p-3 cursor-pointer items-center">
            <MdMessage className="" />
          </div>
          <div className="bg-white rounded-full p-3 cursor-pointer items-center">
            <FaShareAlt className="" />
          </div>
          <div className="bg-white rounded-full p-3 cursor-pointer items-center">
            <BsFillCartPlusFill className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
