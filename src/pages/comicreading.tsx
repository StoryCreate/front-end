import React from "react";
import love from './../assets/icons/love.png';
import { Heart, Share2 } from 'lucide-react';
import eye_white from './../assets/icons/eye_white.png';
import arrow_left_chevron from './../assets/icons/arrow_left_chevron.png';
import premium from './../assets/icons/premium.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import mercy from './../assets/images/mercy.png';
import kindred from './../assets/images/kindred.png';
import jojo from './../assets/images/jojo.png';
import samson from './../assets/images/samson.png';
import nathaniel from './../assets/images/nathaniel.png';
import comic_1 from './../assets/images/comic_1.png';
import comic_2 from './../assets/images/comic_2.png';

export const Comicreading = () => {
   return (
      <div className="main-padding w-full h-full pb-16">
         <div>
            <a href="/createnewstory">
               <div className="flex items-center lg:p-4 gap-2 mt-12 mb-8">
                  <i className='bx bx-left-arrow-alt text-[25px] text-primary' id="left-arrow"></i>
                  <h1 className="text-base text-[#8b008b] font-medium">Back</h1>
               </div>
            </a>
         </div>
         <div>
            <div>
               <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-40">
                  <div className="h-[600px] w-80 lg:w-[800px] overflow-scroll overflow-x-hidden">
                     <img src={comic_1} className="w-80 h-[400px] lg:h-[600px] lg:w-[600px]" />
                     <p className="mb-8 mr-12 p-4 border border-solid text-sm font-medium float-right w-36 bg-white shadow-md rounded-xl text-black">I'm finally up</p>
                     <img src={comic_2} className="w-80 h-[400px] lg:h-[600px] lg:w-[600px]" />
                     <p className="mb-8 mr-12 p-4 border border-solid text-sm font-medium float-right w-36 bg-white shadow-md rounded-xl text-black"> Hi Martha! Hope you slept good </p>
                     <img src={comic_1} className="w-80 h-[400px] lg:h-[600px] lg:w-[600px]" />
                     <p className="mb-8 mr-12 p-4 border border-solid text-sm font-medium float-right w-36 bg-white shadow-md rounded-xl text-black"> Yes guys, thanks for asking </p>
                     <img src={comic_1} className="w-80 h-[400px] lg:h-[600px] lg:w-[600px]" />
                  </div>
                  <div className="flex flex-col gap-8 items-center justify-center space-x-6 mb-12 relative">
                     <div className="flex flex-row gap-5 items-center">
                        <button className="text-4xl font-medium bg-transparent cursor-pointer">+</button>
                        <Share2 className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />
                        <Heart className="w-5 h-5 text-black hover:text-primary cursor-pointer" />
                     </div>
                     <div className="flex flex-col gap-8 items-start">
                        <div className="flex flex-row">
                           <button className="bg-primary text-white font-semibold px-9 py-8 pb-3 cursor-pointer hover:bg-opacity-90">Content</button>
                           <img src={eye_white} alt="content icon" className="h-4 -ml-[75px] mt-2" />
                        </div>
                        <div>
                           <button className="bg-primary text-white font-semibold px-8 py-6 pb-5 cursor-pointer hover:bg-opacity-90">Premium</button>
                           <img src={premium} alt="premium icon" className="h-7 -ml-[75px] mt-2 pb-2" />
                        </div>
                        <button className="bg-primary text-white font-semibold px-5 py-3 max-w-[150px] text-sm cursor-pointer whitespace-wrap hover:bg-opacity-90">
                           Subscribe to creator's page
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex items-center justify-between mx-auto mt-10 mb-12">
            <button className="px-3 lg:px-8 py-4 rounded-lg border border-solid bg-transparent border-gray-500 text-gray-600 font-bold cursor-pointer flex items-center space-x-2">
               <img src={arrow_left_chevron} alt="left arrow" className="h-3" />
               <span>Previous chapter</span>
            </button>
            <a href="/readingnextchapter" className="flex items-center">
               <button className="px-7 lg:px-8 py-4 rounded-lg border border-solid bg-transparent border-primary text-primary font-bold cursor-pointer">
                  Next chapter
               </button>
               <img src={arrow_right_pupple} alt="right arrow" className="-ml-6 h-5" />
            </a>
         </div>
         <div className="mx-auto flex items-center space-x-4 mb-12">
            <input
               className="flex-grow border border-solid border-black/25 rounded-full px-6 py-4 text-sm font-semibold text-black placeholder-black/25"
               placeholder="Write a comment"
            />
            <button className="post-button text-primary font-semibold bg-transparent cursor-pointer">
               Post
            </button>
         </div>
         <div className="max-w-[1100px] space-y-8">
            {[{ img: mercy, user: "Mercy Collin", comment: "This is the most amazing chapter I've ever read" },
            { img: kindred, user: "Kindred Lamb", comment: "The plot twist is killing me!!!" },
            { img: jojo, user: "Jojo Sims", comment: "Yaaasssss!!!!!!" },
            { img: samson, user: "Samson Gate", comment: "This is it!!!" },
            { img: nathaniel, user: "Nathaniel Cargo", comment: "Wooowww, I have no words" }].map(({ img, user, comment }, idx) => (
               <div key={idx} className="flex items-center space-x-4">
                  <img src={img} alt={user} className="w-12 h-12 rounded-full" />
                  <div className="flex gap-6 items-center justify-between">
                     <div>
                        <div className="font-semibold text-sm text-left mt-2">{user}</div>
                        <div className="text-sm font-medium text-left mt-2">{comment}</div>
                        <div className="text-sm font-medium text-left text-primary cursor-pointer mt-2">Reply</div>
                     </div>
                     <div>
                        <img src={love} alt="love" className="w-7 h-7 cursor-pointer" />
                     </div>
                  </div>
               </div>
            ))}
            <button className="bg-primary text-white rounded-full px-20 py-5 font-semibold opacity-50 hover:opacity-80 cursor-pointer block">
               View more comments
            </button>
         </div>
      </div>
   );
};