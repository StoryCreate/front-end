import React from "react";
import add_member from './../assets/icons/add_member.png';
import corey from './../assets/images/corey.png';
import night_reading from './../assets/images/night_reading.png';
import { Plus } from 'lucide-react';
import { Heart, Share2 } from 'lucide-react';

export const Joincommunity = () => {
  return (
    <div className="main-padding flex flex-col lg:flex-row gap-16 h-full pt-14 mb-14">
      <div>
        <div className="flex flex-col gap-6">
          <img
            className="h-14 w-14"
            alt="Ellipse"
            src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-5@2x.png"
          />
          <img
            className="h-14 w-14"
            alt="Ellipse"
            src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-4@2x.png"
          />
          <img
            className="h-14 w-14"
            alt="Ellipse"
            src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-3@2x.png"
          />
          <img
            className="h-14 w-14"
            alt="Ellipse"
            src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-2@2x.png"
          />
          <img
            className="h-14 w-14"
            alt="Ellipse"
            src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-1@2x.png"
          />
          <img className="h-14 w-14"
            alt="Ellipse"
            src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975@2x.png"
          />
        </div>
      </div>
      <div>
        <div className="flex gap-4 lg:gap-24">
          <div>
            <div className="text-black text-sm lg:text-base font-semibold text-left"> Inkwell society</div>
            <div className="text-primary text-xs lg:text-base font-medium text-left pt-4"> 1,000 Members</div>
          </div>
          <div>
            <img src={add_member} className="absolute mt-4 ml-3 h-4 w-4" />
            <button className="py-4 px-6 pl-9 text-xs lg:text-sm bg-transparent border border-solid font-medium text-primary rounded-2xl shadow-md hover:bg-primary hover:text-white cursor-pointer">Add Member</button>
          </div>
          <div>
            <a href="/communitypost" className="w-6 h-6 ml-6 lg:ml-36 bg-white"> <Plus className="shadow-md text-primary rounded-md hover:text-purple-600" /></a>
          </div>
        </div>
        <div className="w-80 lg:w-[700px] h-[700px] shadow-md p-8 mt-12 overflow-scroll overflow-x-hidden">
          <div className="mb-10">
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-4">
                <img src={corey} className="w-16 h-16" />
                <div className="text-left text-sm text-black font-semibold"> Corey Park </div>
              </div>
              <p className="text-left text-dark font-normal text-sm mt-6 mb-6"> Just pulling an all-nighter reading this amazing book. </p>
              <img src={night_reading} className="night-reader" />
            </div>
            <div className="flex items-center gap-3 pt-5 text-left text-3xl">
              <Heart className="w-5 h-5 text-black hover:text-primary cursor-pointer" />
              <img className="h-8 w-8 hover:text-primary cursor-pointer" alt="Frame" src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg" />
              <Share2 className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />
            </div>
            <div className="flex flex-col gap-4 pt-4 text-left text-black">
              <div>10 likes</div>
              <div>View all 10 comments</div>
              <div>10 mins ago</div>
            </div>
          </div>

          <div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-4">
                <img src={corey} className="w-16 h-16" />
                <div className="text-left text-sm text-black font-semibold"> Corey Park </div>
              </div>
              <p className="text-left text-dark font-normal text-sm mt-6 mb-6"> Just pulling an all-nighter reading this amazing book. </p>
              <img src={night_reading} className="night-reader" />
            </div>
            <div className="flex items-center gap-3 pt-5 text-left text-3xl">
              <Heart className="w-5 h-5 text-black hover:text-primary cursor-pointer" />
              <img className="h-8 w-8 hover:text-primary cursor-pointer" alt="Frame" src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg" />
              <Share2 className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />
            </div>
            <div className="flex flex-col gap-4 pt-4 text-left text-black">
              <div>10 likes</div>
              <div>View all 10 comments</div>
              <div>10 mins ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};