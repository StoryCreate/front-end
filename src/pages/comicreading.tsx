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
import comic_1 from './../assets/images/comic_1.png';
import comic_2 from './../assets/images/comic_2.png';

export const Comicreading = () => {
    return (
        <div className="comic-reading">

             <div>
              <i className='bx bx-left-arrow-alt' id="comic-left-arrow"></i> <button className="back"> Back </button> 
             </div>

             <div className="main-frame">
                <img src={comic_1} className="comic-1" />
                <p className="p-1"> I'm finally<br /> up</p>
                <img src={comic_2} className="comic-2" />
                <p className="p-2"> Hi Martha!<br /> Hope you<br /> slept<br /> good </p>
                <img src={comic_1} className="comic-3" />
                <p className="p-3"> Yes guys,<br /> thanks for<br /> asking </p>
                   <img src={comment} className="comments" />
                   <img src={comment} className="comments-2" />
                   <img src={comment} className="comments-3" />
                   <img src={comic_1} className="comic-4" />
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