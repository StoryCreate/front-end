import { Button } from "@comp/ui/button";
import React from "react";

export const Completed = () => {
  return (
    <div className="main-padding flex flex-col lg:flex-row items-center bg-white w-full h-full">
      <div className="mt-6 lg:w-[567px] lg:h-[574px]">
        <p className="max-w-[300px] text-left text-base lg:text-xl font-semibold font-montserrat text-black leading-normal">
          Take a look at your completed gig
        </p>
        <img
          className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] object-cover"
          alt="Element"
          src="https://c.animaapp.com/YxwUBPXI/img/18355626-73z-2108-w023-n001-896b-p1-1.png"
        />
      </div>
      <div className="mt-14 mb-16 w-80 lg:w-[668px] h-full border border-solid border-primary rounded-[30px] shadow-md">
        <div className="lg:w-[632px] h-[38px] flex justify-between">
          <div className="mt-12 w-[136px] h-[38px]">
            <a
              href="/mygigs" className="whitespace-nowrap text-sm font-semibold text-gray-400 font-body-medium-25 leading-[var(--body-medium-25-line-height)] tracking-[var(--body-medium-25-letter-spacing)]">
              Ongoing
            </a>
          </div>
          <div className="mt-12 w-[164px] h-[38px]">
            <div
              className="whitespace-nowrap text-sm font-semibold text-black font-body-medium-25 leading-[var(--body-medium-25-line-height)] tracking-[var(--body-medium-25-letter-spacing)]"
            >
              Completed
            </div>
            <img
              className="top-[30px] left-0 w-[104px] h-[4px]"
              alt="Line"
              src="https://c.animaapp.com/YxwUBPXI/img/line-28-1.svg"
            />
          </div>
        </div>
        <div>
          <div className="mt-24">
            <div className="flex flex-col gap-10 ml-5 items-start">
              <div className="whitespace-nowrap text-base font-semibold text-black font-body-medium-25 leading-[var(--body-medium-25-line-height)] tracking-[var(--body-medium-25-letter-spacing)]">
                10k words fiction writing
              </div>
              <div className="whitespace-nowrap text-sm font-semibold text-black/25 leading-[var(--body-medium-18-line-height)] tracking-[var(--body-medium-18-letter-spacing)]">
                Hired by: Andre Caldwell
              </div>
            </div>
            <div>
              <Button className="mt-20 mb-10 py-10 px-10 lg:px-[90px] lg:py-[15px] bg-primary text-white text-xs lg:text-lg font-semibold rounded-[18px] cursor-pointer whitespace-nowrap font-body-semibold-24">
                Propose new gig
              </Button>
            </div>
            <img
              className="w-full h-[2px]"
              alt="Line"
              src="https://c.animaapp.com/YxwUBPXI/img/line-29.svg"
            />
          </div>
        </div>

        <div>
          <div className="mt-24">
            <div className="flex flex-col gap-10 ml-5 items-start">
              <div className="whitespace-wrap text-base font-semibold text-black font-body-medium-25 leading-[var(--body-medium-25-line-height)] tracking-[var(--body-medium-25-letter-spacing)]">
                10k words fiction writing
              </div>
              <div className="whitespace-wrap text-sm font-semibold text-black/25 leading-[var(--body-medium-18-line-height)] tracking-[var(--body-medium-18-letter-spacing)]">
                Hired by: Timi Bamgboje
              </div>
            </div>
            <div>
              <Button className="mt-20 mb-10 py-10 px-10 lg:px-[90px] lg:py-[15px] bg-primary text-white text-xs lg:text-lg font-semibold rounded-[18px] cursor-pointer whitespace-nowrap font-body-semibold-24">
              Propose new gig
              </Button>
            </div>
            <img
              className="w-full h-[2px]"
              alt="Line"
              src="https://c.animaapp.com/YxwUBPXI/img/line-29.svg"
            />
          </div>
        </div>

        <div>
          <div className="mt-24">
            <div className="flex flex-col gap-10 ml-5 items-start">
              <div className="whitespace-wrap text-base font-semibold text-black font-body-medium-25 leading-[var(--body-medium-25-line-height)] tracking-[var(--body-medium-25-letter-spacing)]">
                10k words fiction writing
              </div>
              <div className="whitespace-wrap text-sm font-semibold text-black/25 leading-[var(--body-medium-18-line-height)] tracking-[var(--body-medium-18-letter-spacing)]">
                Hired by: Henrietta Peakson
              </div>
            </div>
            <div>
              <Button className="mt-20 mb-10 py-10 px-10 lg:px-[90px] lg:py-[15px] bg-primary text-white text-xs lg:text-lg font-semibold rounded-[18px] cursor-pointer whitespace-nowrap font-body-semibold-24">
              Propose new gig
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};