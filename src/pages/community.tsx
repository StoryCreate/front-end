import React from "react";
import { ArrowLeft } from 'lucide-react';
import { Button } from "@comp/ui/button";

export const Community = () => {
  return (
    <div className="main-padding bg-white w-full min-h-screen overflow-hidden flex flex-col lg:flex-row justify-center pt-14 pb-14">
      <div className="flex flex-col items-start gap-10 pt-10 pb-10 w-80 lg:w-96 pl-8 bg-white shadow-inner relative">
        <a href="/createcommunity">
          <button className="border border-solid border-primary rounded-full text-primary bg-transparent font-semibold text-sm px-8 py-4 shadow-md hover:bg-primary hover:text-white cursor-pointer">
            + Create
          </button>
        </a>
        <img
          className="w-[100px] h-[100px] lg:w-[208px] lg:h-[200px] object-cover"
          alt="Element tiny"
          src="https://c.animaapp.com/D8UwJhxt/img/28480855-tiny-business-persons-working-on-jigsaw-puzzle-together.png"
        />
      </div>
      <div className="w-80 lg:w-[784px] h-[350px] overflow-y-hidden overflow-x-hidden shadow-inner bg-white">
        <div className="bg-white shadow-inner w-full min-h-[2170px] p-4">
            <div className="flex justify-start mb-8">
              <ArrowLeft className="flex left w-6 h-6 text-primary" />
            </div>
          <div className="space-y-8">
            {[{
              title: "The Pen and Paper Club",
              description: "A forum dedicated to fostering a supportive environment for writers to share their stories, seek advice, and connect with fellow wordsmiths who share a love for the written art.",
              imgSrc: "https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-5@2x.png",
              members: "1000 Members",
              link: "/community"
            },
            ].map((community, index) => (
              <div key={index} className="bg-gray-300 text-left rounded-2xl p-6 flex space-x-6">
                <a href={community.link} className="flex-shrink-0">
                  <img src={community.imgSrc} alt={community.title} className="w-20 h-20 object-cover rounded-xl" />
                </a>
                <div>
                  <a href={community.link} className="text-sm text-left font-semibold text-primary whitespace-wrap">
                    {community.title}
                  </a>
                  <p className="text-sm font-medium text-dark-100 text-left mt-2 max-w-[400px]">
                    {community.description}
                  </p>
                  <p className="text-sm mt-2 font-semibold text-primary">
                    {community.members}
                  </p>
                  <a href="/joincommunity">
                  <Button className="rounded-xl mt-4 cursor-pointer">Join Community</Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
