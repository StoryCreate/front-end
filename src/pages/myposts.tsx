import React from "react";
import notification_more from './../assets/icons/notification_more.png';
import chess from './../assets/icons/chess.png';
import ariana from './../assets/icons/ariana.png';

export const Myposts = () => {
  return (
    <div className="main-padding flex flex-col lg:flex-row">
      <div className="flex flex-col gap-4 text-left mt-10 lg:mt-20">
        <h1 className="text-sm lg:text-2xl font-bold mb-6">Notifications</h1>
        <p className="text-gray-700 text-sm font-semibold mt-1">
          Manage your notifications
        </p>
        <a href="/notification" className="text-primary text-sm font-semibold cursor-pointer">
          View settings
        </a>
      </div>

      <div className="bg-white w-[330px] lg:w-11/12 max-w-3xl mx-auto mt-10 lg:mt-20 mb-10 p-6 rounded-md shadow-md">
        <div className="flex space-x-8 justify-between border-b border-gray-300 pb-2">
          <div className="text-xs lg:text-sm font-semibold text-gray-400 cursor-pointer border-b-2 border-blue-600 pb-1">
            All
          </div>
          <a href="/myposts" className="text-xs lg:text-sm font-semibold text-gray-900 hover:text-gray-700">
            My posts
          </a>
          <a href="/mentions" className="text-xs lg:text-sm font-semibold text-gray-400 hover:text-gray-700 cursor-pointer">
            Mentions
          </a>
        </div>

        <div className="flex flex-row items-center gap-4 lg:gap-8 mt-6">
          <div>
            <img src={ariana} className="h-8 w-8" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xs lg:text-sm font-semibold text-left">
              Ariana Audrey and 2 others reacted to your post
            </p>
            <div className="flex items-center gap-4">
              <img src={chess} className="w-16 h-16" />
              <p className="text-xs lg:text-sm text-left border"> Creativity is very important when it
                comes to creating amazing stories...
              </p>
            </div>
            <div className="flex text-xs lg:text-sm gap-1 items-center">
              <div>3 Reactions</div>
              <div className="h-6 w-6 font-bold">.</div>
              <div>1 Comment</div>
            </div>
          </div>
          <div>
            <div className="text-xs lg:text-sm">6h</div>
            <div>
              <img src={notification_more} className="h-1 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};