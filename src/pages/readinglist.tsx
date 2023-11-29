import React from "react";

export const Readinglist = () => {
    return (
        <div className="profile-reading-list">
            <a href="/viewprofile"> <button className="readinglist-back-button"> X </button> </a>
      <div className="text-wrapper">Reading List</div>
      <div className="group-wrapper">
        <div className="group">
          <div className="div">
            <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/6V6EV1cC/img/rectangle-45@2x.png" />
            <div className="text-wrapper-2">MY HERO ACADEMIA</div>
            <div className="text-wrapper-3">By Kohei Horikoshi</div>
          </div>
          <div className="group-2">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://c.animaapp.com/6V6EV1cC/img/rectangle-45-6@2x.png"
            />
            <div className="text-wrapper-2">DEATH NOTE</div>
            <div className="text-wrapper-3">By Takeshi Obata</div>
          </div>
          <div className="group-3">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://c.animaapp.com/6V6EV1cC/img/rectangle-45-5@2x.png"
            />
            <div className="text-wrapper-2">YOUR LIE IN APRIL</div>
            <div className="text-wrapper-3">By Naoshi Arakawa</div>
          </div>
          <div className="group-4">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://c.animaapp.com/6V6EV1cC/img/rectangle-45-4@2x.png"
            />
            <div className="text-wrapper-2">THE ALCHEMIST</div>
            <div className="text-wrapper-3">By Paulo Coelho</div>
          </div>
          <div className="group-5">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://c.animaapp.com/6V6EV1cC/img/rectangle-45-3@2x.png"
            />
            <div className="text-wrapper-2">SAPIENS</div>
            <div className="text-wrapper-3">By Yuval Noah Harari</div>
          </div>
          <div className="group-6">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://c.animaapp.com/6V6EV1cC/img/rectangle-45-2@2x.png"
            />
            <div className="text-wrapper-2">MAUS</div>
            <div className="text-wrapper-3">By Art Spiegelman</div>
          </div>
          <div className="group-7">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://c.animaapp.com/6V6EV1cC/img/rectangle-45-1@2x.png"
            />
            <div className="text-wrapper-2">THE SANDMAN</div>
            <div className="text-wrapper-3">By Neil Gaiman</div>
          </div>
        </div>
      </div>
    </div>
    );
};