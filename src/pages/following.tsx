import React, { useContext } from "react";
import { Delete } from 'lucide-react';
import { Popup, PopupState, PopupType } from "../core/interfaces";
import { PopupContext } from "../context/PopupProvider";

export const Following = ({ show, which }: PopupType) => {
  const popupContext = useContext(PopupContext);
  const closeModal = () => {
    popupContext?.dispatch({
      type: PopupState.HIDE,
      payload: {
        show: PopupState.HIDE,
        which: Popup.NONE
      }
    });
  };

  return (
    <div className={show == PopupState.SHOW && which == Popup.FOLLOWERS ? "profile-network" : "profile-network hide"}>
      <div className="flex items-center justify-between px-6">
        <h3 className="text-black text-left text-base pt-8 pl-2 font-semibold">My Network</h3>
        <Delete onClick={closeModal} className="text-primary rounded-md hover:bg-opacity-70 cursor-pointer" />
      </div>
      <div className="flex items-center justify-between px-8 pt-7">
        <div className="">
          <div className="text-black text-sm font-medium cursor-pointer">Friends</div>
        </div>
        <div className="">
          <div className="text-black text-sm font-medium cursor-pointer">Followers</div>
        </div>
        <div className="">
          <div className="text-black text-sm font-bold">Following</div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 pt-6 px-4 lg:space-y-8 ml-4 w-80 lg:w-[502px]">
        <div className="flex items-center h-20 w-full">
          <img
            className="h-14 w-14 object-cover rounded-full"
            alt="Corey Park"
            src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-9@2x.png"
          />
          <div className="text-dark-100 text-sm lg:text-base font-semibold ml-6 whitespace-nowrap">
            Corey Park
          </div>
          <div className="text-primary text-sm lg:text-base font-semibold ml-auto whitespace-nowrap cursor-pointer">
            Remove
          </div>
        </div>
        <div className="flex items-center h-20 w-full">
          <img
            className="h-h-14 w-14 object-cover rounded-full"
            alt="Cassidy Klein"
            src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-8@2x.png"
          />
          <div className="text-dark-100 text-sm lg:text-base font-semibold ml-6 whitespace-nowrap">
            Cassidy Klein
          </div>
          <div className="text-primary text-sm lg:text-base font-semibold ml-auto whitespace-nowrap cursor-pointer">
            Remove
          </div>
        </div>
        <div className="flex items-center h-20 w-full">
          <img
            className="h-14 w-14 object-cover rounded-full"
            alt="Tommy Cage"
            src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-7@2x.png"
          />
          <div className="text-dark-100 text-sm lg:text-base font-semibold ml-6 whitespace-nowrap">
            Tommy Cage
          </div>
          <div className="text-primary text-sm lg:text-base font-semibold ml-auto whitespace-nowrap cursor-pointer">
            Remove
          </div>
        </div>
        <div className="flex items-center h-20 w-full">
          <img
            className="h-14 w-14 object-cover rounded-full"
            alt="Colt Ben"
            src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-6@2x.png"
          />
          <div className="text-dark-100 text-sm lg:text-base font-semibold ml-6 whitespace-nowrap">
            Colt Ben
          </div>
          <div className="text-primary text-sm lg:text-base font-semibold ml-auto whitespace-nowrap cursor-pointer">
            Remove
          </div>
        </div>
        <div className="flex items-center h-20 w-full">
          <img
            className="h-14 w-14 object-cover rounded-full"
            alt="Beau George"
            src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-5@2x.png"
          />
          <div className="text-dark-100 text-sm lg:text-base font-semibold ml-6 whitespace-nowrap">
            Beau George
          </div>
          <div className="text-primary text-sm lg:text-base font-semibold ml-auto whitespace-nowrap cursor-pointer">
            Remove
          </div>
        </div>
        <div className="flex items-center h-20 w-full">
          <img
            className="h-14 w-14 object-cover rounded-full"
            alt="Mary Johnson"
            src="https://c.animaapp.com/ZP50CPgc/img/ellipse-1977-4@2x.png"
          />
          <div className="text-dark-100 text-sm lg:text-base font-semibold ml-6 whitespace-nowrap">
            Mary Johnson
          </div>
          <div className="text-primary text-sm lg:text-base font-semibold ml-auto whitespace-nowrap cursor-pointer">
            Remove
          </div>
        </div>
      </div>
    </div>
  );
};