import React from "react";
import star from './../assets/icons/star.png';

export const Hire = () => {
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
            src="https://c.animaapp.com/nJgMXXKG/img/screenshot-2023-08-11-at-14-43-1@2x.png"
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
      <div className="bg-white rounded-2xl shadow-[4px_4px_4px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(0,0,0,0.25)] mt-[75px] p-2 lg:p-8 pb-10 w-full h-full relative">
        <div className="relative top-[93px] left-0 w-full h-full">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="relative w-[1073px] h-full mx-auto mb-12 rounded-2xl border border-gray-200 p-6 flex gap-6">
              <img
                className="w-10 h-10 lg:w-[100px] lg:h-[100px] object-cover rounded-full"
                alt="Creator"
                src="https://c.animaapp.com/nJgMXXKG/img/ellipse-1797-3@2x.png"
              />
              <div className="flex flex-col flex-grow">
                <div className="flex flex-col gap-6 text-left">
                  <div className="text-dark-100 text-lg font-semibold tracking-wide leading-tight whitespace-nowrap">
                    Ariana Audrey
                  </div>
                  <div className="text-black text-opacity-50 text-base font-semibold tracking-wide leading-tight whitespace-nowrap">
                    Fiction Writer
                  </div>
                </div>
                <p className="text-black text-sm lg:text-base font-medium tracking-wide leading-relaxed mt-4 w-52 lg:min-w-[881px] text-left">
                  I’m a Fiction Writer with 3 years experience. I'm a passionate writer with a love for storytelling and
                  a knack for wordsmithing. Whether it's crafting captivating narratives or penning thought-provoking
                  articles, I'm always up for a creative challenge. Based in beautiful Ibadan, Nigeria, I find
                  inspiration in the vibrant culture and rich history of my surroundings. Let's embark on a literary
                  journey together!
                </p>
                <div className="flex flex-col lg:flex-row gap-6 lg:justify-between mt-6 lg:mt-16">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, starIdx) => (
                        <img key={starIdx} src={star} alt="star" className="h-5" />
                      ))}
                    </div>
                    <div className="text-black text-sm lg:text-base font-medium tracking-wide leading-tight">
                      5/5 ratings
                    </div>
                  </div>
                  <button className="p-6 lg:ml-0 mr-10 rounded-2xl text-white bg-primary font-semibold text-sm lg:text-base self-start hover:bg-opacity-90 cursor-pointer">
                    Contact Creator
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
