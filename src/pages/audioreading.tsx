import React from "react";
import love from './../assets/icons/love.png';
import share_icon from './../assets/icons/share_icon.png';
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
        <div className="audio-reading">

             <div>
              <i className='bx bx-left-arrow-alt' id="audio-left-arrow"></i> <button className="back"> Back </button> 
             </div>

             <div className="main-frame">
                <div className="audio-frame">
                <div className="book-title"> EDUCATED </div>
                </div>
                <div>
                <img src={audio_image} className="audio-image" />
                <div className="chapter-number"> Chapter one : Give Name </div>
                <img src={arrow_left_dark} className="arrow-left-long" />
                <img src={play} className="play" />
                <img src={arrow_right_long} className="arrow-right-long" />
                </div>
             <div>
                <img src={love} className="like" />
                <img src={share_icon} className="share" />
                <button className="plus"> + </button>
             </div>
             <div>
                <button className="content"> Content </button>
                <img src={eye_white} className="content-icon" />
                <button className="premium"> Premium </button>
                <img src={premium} className="premium-icon" />
                <button className="subscribe-to"> Subscribe to<br /> creator's page </button>
             </div>
             <div className="frame">
                <pre className="chapter-1"> A groan threatened to make its way out of my throat as my personal assistant
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
                   <img src={comment} className="comments" />
                   <img src={comment} className="comments-2" />
             </div>
             </div>
             <div>
                <button className="previous"> Previous chapter </button>
                <img src={arrow_left_chevron} className="arrow-left-chevron" />
                <button className="next"> Next chapter </button>
                <img src={arrow_right_pupple} className="arrow-right" />
             </div>
             <div>
               <input className="write-comment" placeholder="Write a comment" />
               <button className="post-button"> Post </button>
             </div>
             <div className="group-6">
               <div className="group-1">
                  <img src={mercy} className="mercy" />
                  <div className="user"> Mercy Collin</div>
                  <div className="comment"> This is the most amazing chapter I've ever read </div>
                  <div className="reply"> Reply </div>
                  <img src={love} className="love" />
               </div>
               <div className="group-2">
                  <img src={kindred} className="kindred" />
                  <div className="user-2"> Kindred Lamb </div>
                  <div className="comment-2"> The plot twist is killing me!!! </div>
                  <div className="reply-2"> Reply </div>
                  <img src={love} className="love-2" />
               </div>
               <div className="group-3">
                  <img src={jojo} className="jojo" />
                  <div className="user-3"> Jojo Sims </div>
                  <div className="comment-3"> Yaaasssss!!!!!! </div>
                  <div className="reply-3"> Reply </div>
                  <img src={love} className="love-3" />
               </div>
               <div className="group-4">
                  <img src={samson} className="samson" />
                  <div className="user-4"> Samson Gate </div>
                  <div className="comment-4"> This is it!!! </div>
                  <div className="reply-4"> Reply </div>
                  <img src={love} className="love-4" />
               </div>
               <div className="group-5">
                  <img src={nathaniel} className="nathaniel" />
                  <div className="user-5"> Nathaniel Cargo </div>
                  <div className="comment-5"> Wooowww, I have no words </div>
                  <div className="reply-5"> Reply </div>
                  <img src={love} className="love-5" />
               </div>
               <button className="view-more-comments"> View more comments </button>
             </div>
        </div>
    );
};