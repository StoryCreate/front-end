import React from "react";
import imageToAdd from './../assets/icons/Frame 10.png';
import add_member from './../assets/icons/add_member.png';
import jenni from './../assets/images/jenni.png';
import photo_icon from './../assets/icons/photo_icon.png';

export const Communitypost = () => {
    return (
        <div className="join-community">
          <div group-1>
            <div className="community-1">
            <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-5@2x.png"
                />
              </div>

                <div className="community-2">
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-4@2x.png"
                />
                </div>

                <div className="community-3">
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-3@2x.png"
                />
                </div>

                <div className="community-4">
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-2@2x.png"
                />
                </div>

                <div className="community-5">
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-1@2x.png"
                />
                </div>

                <div className="community-6">
                <img className="ellipse"
                alt="Ellipse"
                src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975@2x.png"
                />
                </div>
                </div>
                <div group-2>
                  <div className="title"> Inkwell society</div>
                  <div className="members"> 1,000 Members</div>
                </div>
                <div>
                  <button className="add-member-button"> Add Member </button>
                  <img src={add_member} className="add-member-icon" />
                </div>
                <div>
                  <a href="/mycommunity"> <div> <button className="post"> x </button></div> </a>
                </div>
                <div className="frame-2">
                  <div className="group-5">
                  <div>
                    <div className="community-member"> Jenni Caldwell </div>
                    <img src={jenni} className="corey" />
                  </div>
                  <input className="type-something" placeholder="type something..." />
                </div>
                 <div className="community-post-photo">
                <img src={photo_icon} className="photo-icon" />
                <button className="community-post-button"> Post </button>
                </div>
               </div>
        </div>
    );
};