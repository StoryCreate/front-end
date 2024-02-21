import React from "react";
import search from './../assets/icons/search.png';
import arrowleft from './../assets/icons/arrowleft.png';

export const Community = () => {
    return (
        <div className="community">
      <div className="frame">
        <div className="group">
        <a href="/explore"> <img src={arrowleft} className="arrow-left"/> </a>
          <div className="div">
            <div className="group-2">
              <img className="line" alt="Line" src="https://c.animaapp.com/D8UwJhxt/img/line-26.svg" />
              <div className="group-3">
                <div className="text-wrapper">Members</div>
              </div>
            </div>
          </div>
          <div className="group-6">
            <div className="group-wrapper-2">
              <div className="group-7">
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-5@2x.png"
                />
                <div className="group-8">
                  <div className="text-wrapper-3">Inkwell Society</div>
                  <p className="p">
                    A forum where writers gather to share their works, exchange feedback, and discuss all things related
                    to the written word.
                  </p>
                </div>
              </div>
            </div>
            <div className="members"> 1000 Members </div>
            <a href="/joincommunity"> <button className="join"> Join Community </button> </a>
           </div>
           <div className="group-19">
            <div className="group-20">
              <div> <input type="text" className="text-wrapper-4" placeholder="Search" /> </div>
              <img src={search} className="search-instance" />
            </div>
          </div>
          </div>
         </div>
         <div className="group-21">
        <img
          className="element-tiny"
          alt="Element tiny"
          src="https://c.animaapp.com/D8UwJhxt/img/28480855-tiny-business-persons-working-on-jigsaw-puzzle-together.png"
        />
        <a  href="/createcommunity"> <button className="img"> + Create </button> </a>
         </div>
       </div>
    );
};