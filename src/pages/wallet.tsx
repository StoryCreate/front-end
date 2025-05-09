import React from "react";
import { Link } from "react-router-dom";
import arrowup from './../assets/icons/arrowup.png';
import plus from './../assets/icons/plus.png';
import chevronright from './../assets/icons/chevronright.png';
import wallet_with_coins from './../assets/images/wallet_with_coins.png';
import gold_coins from './../assets/images/gold_coins.png';

export const Wallet = () => {
  return (
    <div className="main-padding bg-white w-full min-h-screen overflow-hidden p-8">
      <div className="mt-8 flex items-center justify-between max-w-[1200px] mx-auto">
        <h2 className="text-gray-900 font-semibold text-lg font-sans">
          MY WALLET
        </h2>
        <a href="/contest">
          <div className="flex items-center">
            <button className="px-12 py-5 pl-5 bg-primary text-white rounded-[25px] text-base cursor-pointer">
              Contest
            </button>
            <img src={arrowup} className="h-4 w-4 -ml-10" alt="Arrow up" />
          </div>
        </a>
      </div>
      <div className="max-w-[965px] mx-auto mt-10 lg:ml-10">
        <div className="bg-primary w-full rounded-t-[20px] mr-5 p-6 relative">
          <div className="mt-6 px-4">
            <img src={plus} height="30px" width="30px" className="cursor-pointer flex justify-end ml-52 lg:ml-[830px]" />
            <div className="flex flex-col gap-12 font-semibold">
              <div className="text-white text-left font-semibold text-sm font-sans">Total Balance</div>
              <div className="whitespace-nowrap text-left font-semibold text-white text-base mt-2">1,000 USD</div>
              <button className="mt-8 px-5 py-2.5 max-w-[100px] bg-white text-primary rounded-lg font-semibold cursor-pointer">Withdraw</button>
            </div>
          </div>
          <div className="rounded-t-[20px] p-6">
            <img
              className="absolute -mt-60 -ml-5 lg:-mt-72 lg:-ml-28 mx-auto w-40 h-32 lg:w-[500px] lg:h-[350px] object-cover"
              alt="Element illustration"
              src={wallet_with_coins}
            />
          </div>
          <div className="mt-10 px-4 mb-10 flex items-center justify-between text-white font-semibold text-lg space-x-10">
            <div>
              <div className="text-base font-sans ">Points</div>
              {/* <img className="w-[65px] h-[5px]" alt="Line" src="https://c.animaapp.com/3tXRlJSe/img/line-33.svg" /> */}
            </div>
            <a href="/creds" className="text-[#cfcdcd] text-base">Creds</a>
            <a href="/coins" className="text-[#cfcdcd] font-semibold text-base font-sans">Coins</a>
          </div>
        </div>
        <div className="relative bg-white rounded-2xl shadow-[0_3.66px_3.66px_rgba(0,0,0,0.25),inset_0_1.83px_1.83px_rgba(0,0,0,0.15)] -mt-6 p-6 max-w-[466px] mx-auto">
          <div className="flex items-center">
            <img
              className="w-[90px] h-[90px] object-cover"
              alt="Gold coins falling"
              src={gold_coins}
            />
            <div className="ml-6">
              <div className="text-black font-semibold text-base font-sans tracking-wide leading-[1.2]">1,000 points</div>
              <button className="mt-4 px-6 py-2.5 bg-primary text-white rounded-lg cursor-pointer inline-flex items-center gap-2">
                convert to creds
                <img src={chevronright} className="w-[15px] h-[15px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 max-w-[1179px] mx-auto">
          <div className="font-semibold text-left text-gray-900 mb-4">Earn more points</div>
          <div className="mt-10 bg-white rounded-[38px] shadow-[0_7.29px_7.29px_rgba(0,0,0,0.25),inset_0_7.29px_7.29px_rgba(0,0,0,0.25)] p-6 mb-6 w-80 lg:w-[1210px] mx-auto">
            <div className="flex items-center justify-between mx-auto">
              <p className="text-gray-500 font-semibold text-base text-left font-sans tracking-wide leading-[1.2]">Daily Login : +15 points</p>
              <button className="px-7 py-5 bg-primary text-white font-medium rounded-lg cursor-pointer">Receive</button>
            </div>
          </div>
          <div className="mt-10 mb-10 bg-white rounded-[38px] shadow-[0_7.29px_7.29px_rgba(0,0,0,0.25),inset_0_7.29px_7.29px_rgba(0,0,0,0.25)] p-6 w-80 lg:w-[1210px] mx-auto">
            <div className="flex items-center justify-between mx-auto">
              <p className="text-gray-500 font-semibold text-base text-left font-sans tracking-wide leading-[1.2]">Daily WheelSpin : +15 points</p>
              <button className="px-7 py-5 bg-primary text-white font-medium rounded-lg cursor-pointer">Receive</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
