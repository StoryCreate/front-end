import React from "react";
import imageToAdd from './../assets/icons/Frame 10.png';
import add_member from './../assets/icons/add_member.png';
import corey from './../assets/images/corey.png';
import night_reading from './../assets/images/night_reading.png';

export const Joincommunity = () => {
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
                  <a href="/communitypost"> <div> <button className="post"> + </button></div> </a>
                </div>
                <div className="frame">
                  <div className="group-3">
                  <div>
                    <div className="community-member"> Corey Park </div>
                    <img src={corey} className="corey" />
                  </div>
                  <img src={night_reading} className="night-reader" />
                  <p className="post-caption"> Just pulling an all-nighter reading this amazing book. </p>
                </div>
                 <div className="heart-icons">
                  <i className='bx bx-heart'></i> <img className="img" alt="Frame" src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg"/> <img src={imageToAdd} alt="image"/>
                 </div>
                 <div className="group-4">
                <div className="likes">10 likes</div>
                <div className="comments">View all 10 comments</div>
                <div className="time">10 mins ago</div>
                </div>
               </div>
        </div>
    );
};