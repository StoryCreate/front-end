import React from "react";
import notification_more from './../assets/icons/notification_more.png';
import chess from './../assets/icons/chess.png';
import ariana from './../assets/icons/ariana.png';

export const Mentions = () => {
    return (
      <div className="mentions">
      <div className="overlap-3">
        <div className="overlap-4">
          <div className="group-1">
            <div>
              <div className="group-2">
                <div className="group-3">
                    <img src={ariana} className="ariana" />
                  <p className="p">
                  Ariana Audrey and 2 others reacted to your
                  </p>
                  <img src={chess} className="chess" />
                  <p className="post-content"> Creativity is very important when it
                    <br />comes to creating amazing stories... </p>

                  <div className="reactions">
                    3 Reactions
                  </div>
                  <div className="dot"> . </div><div/>
                  <div className="comments">
                    1 Comment
                  </div>
                  
                  <div className="group-4">
                    <div className="text-wrapper-11">6h</div>
                    <div className="group-5">
                      <img src={notification_more} className="notification_more" />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
          <img className="line-3" alt="Line" src="https://c.animaapp.com/Y2gfbMH5/img/line-40.svg" />
        </div>
        
        <div className="overlap-4a">
          <div className="group-1">
            <div>
              <div className="group-2">
                <div className="group-3">
                    <img src={ariana} className="ariana" />
                  <p className="p">
                  Ariana Audrey and 2 others reacted to your
                  </p>
                  <img src={chess} className="chess" />
                  <p className="post-content"> Creativity is very important when it
                    <br />comes to creating amazing stories... </p>

                  <div className="reactions">
                    3 Reactions
                  </div>
                  <div className="dot"> . </div><div/>
                  <div className="comments">
                    1 Comment
                  </div>
                  
                  <div className="group-4">
                    <div className="text-wrapper-11">6h</div>
                    <div className="group-5">
                      <img src={notification_more} className="notification_more" />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
        <div className="group-6">
          <div className="group-7">
            <a href="/notifications" className="text-wrapper-16">All</a>
          </div>
          <div className="group-8">
            <a href="/myposts" className="text-wrapper-17">My posts</a>
          </div>
          <div className="group-9">
            <div className="text-wrapper-18">Mentions</div>
            <img className="line-4" alt="Line" src="https://c.animaapp.com/Y2gfbMH5/img/line-42.svg" />
          </div>
        </div>
      </div>
      <div className="title"> Notifications </div>
      <a href="/notification"> <div className="text-wrapper-19">View settings</div> </a>
      <div className="text-wrapper-20">Manage your notifications</div>
      </div>
    );
};