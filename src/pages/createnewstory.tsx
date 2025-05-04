import React from "react";
import marker_pen from './../assets/icons/marker_pen.png';
import photo_icon from './../assets/icons/photo_icon.png';
import toggle_pupple from './../assets/icons/toggle_pupple.png';
import up_down from './../assets/icons/up_down.png';

export const Createnewstory = () => {
    return (
        <div className="main-padding w-full h-full pb-16">
            <div className="flex items-center justify-between mt-8">
                <a href="/dashboard">
                    <div className="flex items-center gap-2 text-[#8b008b] mb-8">
                        <i className='bx bx-left-arrow-alt text-[25px] text-primary' id="left-arrow"></i>
                        <h1 className="text-base font-medium">Back</h1>
                    </div>
                </a>
                <a href="/hire" className="flex items-center mb-8 space-x-2 cursor-pointer">
                    <img src={marker_pen} alt="marker pen" className="absolute h-6 ml-4" />
                    <button className="border border-solid border-[#8b008b] rounded-full px-3 py-2 lg:px-8 lg:py-4 pl-8 lg:pl-10 text-[#8b008b] font-bold text-sm bg-transparent cursor-pointer">
                        Hire a creator
                    </button>
                </a>
            </div>
            <div className="bg-transparent border border-black/25 rounded-lg shadow-inner shadow-black/25 p-6 lg:p-20 w-full space-y-8 mt-6">
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-72 items-start">
                    <div className="flex items-center space-x-4">
                        <div className="flex-grow border border-solid max-w-[250px] h-72 pt-2 border-black/25 rounded-lg p-8 text-[#8d8d8d] font-semibold text-sm flex items-center justify-center">
                            <h3 className="pt-16 text-sm">
                                + Add a Story Cover
                            </h3>
                            <div>
                                <img src={photo_icon} alt="photo icon" className="-ml-40 -mt-16 h-10" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-14">
                        <input
                            type="text"
                            placeholder="Book Title"
                            className="w-full min-w-80 lg:min-w-[550px] border border-solid border-black/25 rounded-lg px-4 py-2 text-sm font-semibold text-black placeholder-[#8d8d8d]"
                        />
                        <textarea
                            placeholder="Book Description"
                            className="w-full h-64 border border-solid border-black/25 rounded-lg px-4 py-2 text-sm font-semibold text-black placeholder-[#8d8d8d] resize-none"
                        />
                        <div className="flex flex-col gap-6">
                            <div className="relative">
                                <div className="border border-solid border-black/25 rounded-lg px-4 py-2 text-[#8d8d8d] font-semibold text-left text-sm cursor-pointer">
                                    Book Category
                                </div>
                                <img src={up_down} alt="up down" className="absolute top-2 right-3 h-7 pointer-events-none" />
                            </div>
                            <div className="relative flex items-center space-x-2">
                                <div className="flex-grow border border-solid border-black/25 rounded-lg px-4 py-2 text-[#8d8d8d] font-semibold text-left text-sm cursor-pointer">
                                    Main Character
                                </div>
                                <div className="border border-solid border-black/25 rounded-lg px-2 text-4xl font-normal text-[#8d8d8d] cursor-pointer select-none">
                                    +
                                </div>
                            </div>
                            <div className="relative">
                                <div className="border border-solid border-black/25 rounded-lg px-4 py-2 text-[#8d8d8d] font-semibold text-left text-sm cursor-pointer">
                                    Primary Audience
                                </div>
                                <img src={up_down} alt="up down" className="absolute top-2 right-3 h-7 pointer-events-none" />
                            </div>
                            <div className="relative flex items-center space-x-2">
                                <div className="flex-grow border border-solid border-black/25 rounded-lg px-4 py-2 text-[#8d8d8d] font-semibold text-left text-sm cursor-pointer">
                                    Add Tag
                                </div>
                                <div className="border border-solid border-black/25 rounded-lg px-2 text-4xl font-normal text-[#8d8d8d] cursor-pointer select-none">
                                    +
                                </div>
                            </div>
                            <div className="relative">
                                <div className="border border-solid border-black/25 rounded-lg px-4 py-2 text-[#8d8d8d] font-semibold text-left text-sm cursor-pointer">
                                    Select Language
                                </div>
                                <img src={up_down} alt="up down" className="absolute top-2 right-3 h-7 pointer-events-none" />
                            </div>
                            <div className="relative flex items-center">
                                <div className="flex-grow border border-solid border-black/25 rounded-l-lg px-4 py-2 text-[#8d8d8d] font-semibold text-left text-sm cursor-pointer">
                                    Upload file
                                </div>
                                <button className="bg-primary opacity-50 px-5 py-3 rounded-r-lg text-white font-semibold cursor-pointer hover:bg-opacity-80">
                                    Browse
                                </button>
                            </div>
                        </div>
                        <div className="border border-solid border-black/25 rounded-lg px-4 py-2 text-[#8d8d8d] font-semibold text-sm cursor-pointer flex items-center justify-between">
                            Give subscribers full access
                            <img src={toggle_pupple} alt="toggle" className="h-7 ml-1 cursor-pointer" />
                        </div>
                        <a href="/storytyping" className="block text-center mt-8">
                            <button className="bg-primary text-white px-20 py-4 rounded-2xl text-lg font-semibold cursor-pointer hover:bg-opacity-90">
                                Continue
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
