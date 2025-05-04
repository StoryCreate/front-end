import React from "react";
import add_member from './../assets/icons/add_member.png';
import jenni from './../assets/images/jenni.png';
import photo_icon from './../assets/icons/photo_icon.png';
import { Delete } from 'lucide-react';

export const Communitypost = () => {
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
            <a href="/mycommunity" className="ml-6 lg:ml-36 bg-white"> <Delete className="text-primary rounded-md hover:text-purple-600" /></a>
          </div>
        </div>
        <div className="w-80 lg:w-[700px] h-[530px] shadow-md p-4 lg:p-8 mt-12 pb-4">
          <div className="mb-10">
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-4">
                <img src={jenni} className="w-16 h-16" />
                <div className="text-left text-sm text-black font-semibold"> Jenni Caldwell </div>
              </div>
            </div>
            <div>
              <textarea
                className="flex justify-start mt-6 w-full h-80 bg-transparent text-sm text-left p-0 resize-none"
                placeholder="Type something ..." />
            </div>
            <div className="flex justify-between items-center gap-3 pt-5 text-left text-3xl">
              <div>
                <img src={photo_icon} className="w-6 h-6 cursor-pointer" />
              </div>
              <div>
                <button className="bg-primary text-white p-3 px-6 font-medium rounded-full cursor-pointer hover:bg-opacity-90">
                  Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};