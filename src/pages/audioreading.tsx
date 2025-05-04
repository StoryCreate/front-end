import React from "react";
import love from './../assets/icons/love.png';
import { Heart, Share2 } from 'lucide-react';
import eye_white from './../assets/icons/eye_white.png';
import arrow_left_chevron from './../assets/icons/arrow_left_chevron.png';
import premium from './../assets/icons/premium.png';
import comment from './../assets/icons/comment.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import mercy from './../assets/images/mercy.png';
import kindred from './../assets/images/kindred.png';
import jojo from './../assets/images/jojo.png';
import samson from './../assets/images/samson.png';
import nathaniel from './../assets/images/nathaniel.png';
import audio_image from './../assets/images/audio_image.png';
import arrow_left_dark from './../assets/icons/arrow_left_dark.png';
import play from './../assets/icons/play.png';
import arrow_right_long from './../assets/icons/arrow_right_long.png';

export const Audioreading = () => {
   return (
      <div className="main-padding w-full h-full pb-16">
         <div>
            <a href="/createnewstory">
               <div className="flex items-center p-4 gap-2 text-[#8b008b] mt-12 mb-8">
                  <i className='bx bx-left-arrow-alt text-[25px] text-primary' id="left-arrow"></i>
                  <h1 className="text-base font-medium">Back</h1>
               </div>
            </a>
         </div>
         <div>
            <div>
               <div className="flex flex-col lg:flex-row gap-10 lg:gap-60">
                  <div className="p-4 lg:p-14 h-44 lg:h-[300px] w-80 lg:w-[800px] shadow-[4px_4px_4px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(0,0,0,0.25)]">
                     <div className="flex gap-6 lg:gap-20 items-center pl-9">
                        <div>
                           <img src={audio_image} className="h-24 w-24 lg:h-44 lg:w-44" />
                        </div>
                        <div className="flex flex-col gap-7">
                           <h3 className="text-left text-sm lg:text-2xl text-black font-semibold"> EDUCATED </h3>
                           <h2 className="text-left text-black text-sm lg:text-base font-medium"> Chapter one : Give Name </h2>
                           <div className="flex gap-2 lg:gap-6">
                              <img src={arrow_left_dark} className="h-6 w-6 cursor-pointer" />
                              <img src={play} className="h-6 w-6 cursor-pointer" />
                              <img src={arrow_right_long} className="h-6 w-6 cursor-pointer" />
                           </div>
                        </div>
                     </div>
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
               <div>
                  <pre className="text-black text-left text-sm font-medium whitespace-pre-wrap leading-relaxed"> A groan threatened to make its way out of my throat as my personal assistant
                     brought him<br /> in. Sebastian, the one person I had grown to hate, was standing
                     right in front of me. <br />
                     <br />

                     “This is a joke, right?” <br />
                     <br />

                     Anna shook her head, introducing us and ignoring me. “Sir, this is Sebastian
                     Aguilar, your<br /> new security detail and bodyguard.” <br /> <br />

                     He nodded, looking at me with a glint in his eyes that I ignored. I waved Anna off,
                     releasing<br /> her to go back to her duties at the office. As she left my mansion, I knew I
                     would hate every<br /> second I had to spend alone with him. <br /> <br />

                     “New house, aye?” <br /> <br />

                     “I’ll appreciate it if you understand your position here, Mr. Aguilar. You will refer to
                     me as Sir<br /> or Mr. Davis. You cannot speak to me like I’m your buddy, at least not while you
                     are on the<br /> clock, on  my dime.” <br /> <br />

                     His jaw ticked at my tone, and I walked away from him before the thudding of my heart<br />
                     reached his ears. This had to be the universe punishing me—first, a stalker, then a
                     break-in,<br /> and now this! My life had been too good lately; I knew I was due some bad luck
                     at some point.<br /> But who was I to complain?  <br /> <br />

                     I had a job that I loved making art for the stars, and it made me a freshly minted
                     billionaire.<br /> Of course, there would be a few bumps in the road.  <br /> <br />

                     “Is there anything else you’ll like to know, Mr. Aguilar?” I turned to face him with as
                     straight a<br /> face as I could manage. As my assistant must have briefed you, you’re staying
                     in my house.” <br /> <br />

                     “I’m aware of that, sir.” <br /> <br />

                     “Good. Anything else?” I asked, sparing him a glance over my shoulder. “This is your room.” <br /> <br />

                     “Do you have any cameras in the house? Something I can look through to see the culprit,<br />
                     at least?” <br /> <br />

                     I shook my head. It wasn’t something I ever considered having in my home. All my life, I
                     had<br /> lived without having to be so cautious, but I didn’t have such luxury anymore. Perhaps<br />
                     installing cameras would be excellent precaution to take after all. <br /> <br />

                     “I’ll like your opinions on the things you believe might be best to improve the security
                     status of<br /> the house. If you think of anything that can help you with your work too, please
                     let me know<br /> or relate to Anna.” <br /> <br />

                     “I’ll get to work with finding the perfect surveillance cameras to install in the house.
                     It’s rather<br /> unbelievable that a house as big as this doesn’t have one.” <br /> <br />

                     Knowing Sebastian, I was certain that would not be his last snide remark, but I did not
                     have<br /> the patience for his jabs. Not today, not ever. I walked out of his room, taking two
                     steps at a<br /> time to mine. The instant I got into my room, I felt my shoulders sag. <br /> <br />

                     Who would have thought he would be back so soon? Just how long had it been since I saw<br /> him?
                     How could he be the best security detail they could find? <br /> <br />
                  </pre>
                  <img src={comment} alt="comment" className="absolute left-80 lg:left-[760px] top-[870px] h-7" />
                  <img src={comment} alt="comment" className="absolute left-80 lg:left-[760px] top-[1020px] h-7" />
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