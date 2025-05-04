import React from "react";

export const Creators = () => {
  return (
    <div className="main-padding bg-white rounded-2xl w-full h-full pb-8">
      <a href="/viewprofile">
        <button className="ml-72 lg:ml-[10px] mt-6 lg:mt-14 text-base font-semibold text-black bg-transparent cursor-pointer">X</button>
      </a>
      <div className="text-dark-100 text-sm lg:text-2xl text-left font-bold tracking-wide leading-tight mt-6 mb-8">
        Creators I follow
      </div>
      <div className="flex flex-col space-y-2 lg:space-y-8 ml-4 w-80 lg:w-[502px]">
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
