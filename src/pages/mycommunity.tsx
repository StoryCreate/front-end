import React from "react";
import search from './../assets/icons/search.png';
import explore from './../assets/icons/explore.png';
import { Users } from 'lucide-react';

export const Mycommunity = () => {
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
      <div className="w-80 lg:w-[784px] h-[803px] overflow-y-scroll overflow-x-hidden shadow-inner bg-white">
        <div className="bg-white shadow-inner w-full min-h-[2170px] p-4">
          <div className="flex justify-between items-center h-[49px] mb-8">
            <div className="flex items-center space-x-4 w-[321px]">
              <img src={explore} alt="Explore Icon" className="w-6 h-6" />
              <div className="text-sm font-medium text-gray-400 tracking-wide leading-tight">
                Explore
              </div>
            </div>
            <div className="flex items-center space-x-4 w-[321px] justify-end">
              <Users className="w-4 h-4" />
              <a href="/mycommunity" className="text-black text-sm text-left font-semibold tracking-wide leading-tight hover:text-black">
                My Community
              </a>
            </div>
          </div>
          <div className="mt-12 mb-12 flex gap-3 items-center border border-solid border-gray-400 rounded-full h-10 px-3 w-[630px] mx-auto">
            <img src={search} alt="Search Icon" className="w-4 h-4 ml-4" />
            <input
              className="flex-grow bg-transparent text-black text-sm font-semibold placeholder-black/25 focus:outline-none"
              placeholder="Search"
            />
          </div>
          <div className="space-y-8">
            {[{
              title: "Inkwell Society",
              description: "A forum where writers gather to share their works, exchange feedback, and discuss all things related to the written word.",
              imgSrc: "https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-5@2x.png",
              link: "/community"
            }, {
              title: "Wordcraft Circle",
              description: "A community for passionate writers to connect, collaborate, and refine their craft through discussions, workshops, and creative challenges.",
              imgSrc: "https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-4@2x.png",
              link: "/community"
            }, {
              title: "Literary Nexus",
              description: "A hub for writers of all genres and styles to come together, network, and find inspiration while engaging in thoughtful conversations about literature and writing techniques",
              imgSrc: "https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-3@2x.png",
              link: "/community"
            }, {
              title: "Bookworm’s Retreat",
              description: "A cozy online haven for avid readers to discuss their favorite books, share recommendations, and engage in lively literary discussions.",
              imgSrc: "https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-2@2x.png",
              link: "/community"
            }, {
              title: "Page Turners’ Paradise",
              description: "A virtual paradise for book lovers to connect, exchange thoughts on captivating reads, and find their next literary adventure.",
              imgSrc: "https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-1@2x.png",
              link: "/community"
            }, {
              title: "Storybook Enclave",
              description: "A forum dedicated to celebrating the enchantment of books, where readers come together to share their love for stories, discuss plot twists, and connect with fellow bookworms.",
              imgSrc: "https://c.animaapp.com/D8UwJhxt/img/ellipse-1975@2x.png",
              link: "/community"
            }].map((community, index) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
