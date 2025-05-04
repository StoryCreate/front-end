import React from "react";
import love from './../assets/icons/love.png';
import more_vertical from './../assets/icons/more_vertical.png';
import line from './../assets/icons/line.png';
import andrea from './../assets/images/andrea.png';
import find_gig from './../assets/images/find_gig.png';
import { Button } from "@comp/ui/button";

export const Savedjobs = () => {
  return (
    <div className="main-padding bg-white w-full h-full pb-14 overflow-hidden relative">
      <div className="flex items-center gap-2 mt-12 text-[#8b008b]">
        <i className='bx bx-left-arrow-alt text-[25px] text-primary' id="left-arrow"></i>
        <h1 className="text-sm font-medium">Back</h1>
      </div>
      <div className="mt-10 w-full h-20 lg:h-[150px] rounded-2xl">
        <div className="relative w-full h-full rounded-2xl p-6 border border-solid border-black/25">
          <img
            className="absolute -mt-5 left-[270px] lg:left-[1030px] w-16 h-16 lg:w-[154px] lg:h-[142px] object-cover rounded"
            alt="Screenshot"
            src={find_gig}
          />
          <a href="/findgig">
            <div className="pt-1 lg:pt-6 lg:ml-10 text-sm lg:text-2xl text-left font-semibold text-[#636161] tracking-wide leading-tight font-sans">
              Find a Creator
            </div>
          </a>
        </div>
      </div>
      <div className="relative mt-[50px] w-full h-[128px] flex items-center">
        <div className="relative w-full h-20 lg:h-[79px] border border-solid border-primary rounded-l-2xl flex items-center pl-4 pr-4 lg:pl-16">
          <input
            className="w-full h-full text-black font-semibold text-sm lg:text-base placeholder-black/25 tracking-wide leading-tight outline-none"
            placeholder="Type anything..."
          />
        </div>
        <div className="relative w-[200px] h-[128px] bg-magenta-100 rounded-tr-2xl rounded-br-2xl flex items-center justify-center cursor-pointer">
          <button className="text-white text-base font-medium px-8 py-7 lg:-ml-28 rounded-tr-2xl rounded-br-2xl bg-primary cursor-pointer hover:bg-opacity-90">
            Search
          </button>
        </div>
      </div>
      <img className="w-full mt-10" alt="Line" src="https://c.animaapp.com/nJgMXXKG/img/line-23.svg" />

      <div className="flex flex-row mt-6 justify-between">
        <div className="flex flex-col gap-2">
          <a href="/findgig" className="text-black font-medium text-sm text-left">Available jobs</a>
        </div>
        <div>
          <h3 className="text-sm text-primary text-semibold">Saved jobs</h3>
          <img className="w-24 h-0.5" alt="gigs-Line" src={line} />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-[4px_4px_4px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(0,0,0,0.25)] mt-[75px] p-4 lg:p-16 pb-10 w-full h-full relative">
        <div className="pb-14">
          <div className="flex gap-5">
            <img className="w-16 h-16" alt="Ellipse" src={andrea} />
            <div className="flex flex-col gap-4">
              <h3 className="text-left text-sm text-black font-semibold">Andrea Cole</h3>
              <p className="text-left text-sm text-black font-medium w-40 lg:min-w-[600px]">
                I need a fiction writer to help bring my idea to life. It’s going to be a 20k word project
              </p>
            </div>
          </div>
          <div className="flex gap-2 lg:gap-4 justify-end -mt-10">
            <img src={love} className="w-6 h-6 border border-solid border-gray-400 rounded-full" />
            <img src={more_vertical} className="w-6 h-6" />
          </div>
          <div className="text-sm mt-6 text-right text-gray-400 font-medium"> Posted 1 hour ago</div>
          <div>
            <Button className="rounded-xl mt-6 float-right cursor-pointer">
              Send Proposal
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-[4px_4px_4px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(0,0,0,0.25)] mt-[75px] p-4 lg:p-16 pb-10 w-full h-full relative">
        <div className="pb-14">
          <div className="flex gap-5">
            <img className="w-16 h-16" alt="Ellipse" src={andrea} />
            <div className="flex flex-col gap-4">
              <h3 className="text-left text-sm text-black font-semibold">Andrea Cole</h3>
              <p className="text-left text-sm text-black font-medium w-40 lg:min-w-[600px]">
                I need a fiction writer to help bring my idea to life. It’s going to be a 20k word project
              </p>
            </div>
          </div>
          <div className="flex gap-1 lg:gap-4 justify-end -mt-10">
            <img src={love} className="w-6 h-6 border border-solid border-gray-400 rounded-full" />
            <img src={more_vertical} className="w-6 h-6" />
          </div>
          <div className="text-sm mt-6 text-right text-gray-400 font-medium"> Posted 1 hour ago</div>
          <div>
            <Button className="rounded-xl mt-6 float-right cursor-pointer">
              Send Proposal
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-[4px_4px_4px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(0,0,0,0.25)] mt-[75px] p-4 lg:p-16 pb-10 w-full h-full relative">
        <div className="pb-14">
          <div className="flex gap-5">
            <img className="w-16 h-16" alt="Ellipse" src={andrea} />
            <div className="flex flex-col gap-4">
              <h3 className="text-left text-sm text-black font-semibold">Andrea Cole</h3>
              <p className="text-left text-sm text-black font-medium w-40 lg:min-w-[600px]">
                I need a fiction writer to help bring my idea to life. It’s going to be a 20k word project
              </p>
            </div>
          </div>
          <div className="flex gap-1 lg:gap-4 justify-end -mt-10">
            <img src={love} className="w-6 h-6 border border-solid border-gray-400 rounded-full" />
            <img src={more_vertical} className="w-6 h-6" />
          </div>
          <div className="text-sm mt-6 text-right text-gray-400 font-medium"> Posted 1 hour ago</div>
          <div>
            <Button className="rounded-xl mt-6 float-right cursor-pointer">
              Send Proposal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};