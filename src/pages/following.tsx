import React from "react";
import { Popup, PopupState, PopupType } from "../core/interfaces";

export const Following = ({ show, which }: PopupType) => {
  return (
    <div className={show == PopupState.SHOW && which == Popup.FOLLOWERS ? "profile-network" : "profile-network hide"}>
      <div className="text-wrapper">My Network</div>
      <div className="group">
        <div className="div">
          <div className="text-wrapper-friends">Friends</div>
        </div>
        <div className="group-2">
          <div className="text-wrapper-3">Followers</div>
        </div>
        <div className="group-3">
          <div className="text-wrapper-3c">Following</div>
          <img className="following-line" src="https://c.animaapp.com/ZP50CPgc/img/line-31.svg" />
        </div>
      </div>
      <div className="group-4">
        <div className="group-5">
          <div className="text-wrapper-4">Corey Park</div>
          <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-9@2x.png" />
          <div className="text-wrapper-5">Remove</div>
        </div>
        <div className="group-6">
          <div className="text-wrapper-4">Cassidy Klein</div>
          <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-8@2x.png" />
          <div className="text-wrapper-5">Remove</div>
        </div>
        <div className="group-7">
          <div className="text-wrapper-4">Tommy Cage</div>
          <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-7@2x.png" />
          <div className="text-wrapper-5">Remove</div>
        </div>
        <div className="group-8">
          <div className="text-wrapper-4">Colt Ben</div>
          <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-6@2x.png" />
          <div className="text-wrapper-5">Remove</div>
        </div>
        <div className="group-9">
          <div className="text-wrapper-4">Beau George</div>
          <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-5@2x.png" />
          <div className="text-wrapper-5">Remove</div>
        </div>
        <div className="group-10">
          <div className="text-wrapper-4">Mary Johnson</div>
          <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-4@2x.png" />
          <div className="text-wrapper-5">Remove</div>
        </div>
        <div className="group-11">
          <div className="text-wrapper-4">Esther Solange</div>
          <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-3@2x.png" />
          <div className="text-wrapper-5">Remove</div>
        </div>
        <div className="group-12">
          <div className="text-wrapper-4">Cassie Perri</div>
          <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-2@2x.png" />
          <div className="text-wrapper-5">Remove</div>
        </div>
        <div className="group-13">
          <div className="text-wrapper-4">Andrew Smith</div>
          <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-1@2x.png" />
          <div className="text-wrapper-5">Remove</div>
        </div>
        <div className="group-14">
          <div className="text-wrapper-4">Angel Code</div>
          <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977@2x.png" />
          <div className="text-wrapper-5">Remove</div>
        </div>
      </div>
    </div>
  );
};