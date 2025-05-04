import React from "react";
import PropTypes from "prop-types";
import search from './../assets/icons/search.png';
import BookOpen5 from './../assets/icons/BookOpen5.png';

interface Props {
  property1:
  | "default"
  | "variant-5"
  | "variant-2"
  | "variant-3"
  | "variant-4"
  | "variant-8"
  | "variant-7"
  | "variant-6"
  | "variant-10"
  | "variant-9";
  className: any;
  propertyDefault: string;
}

export const Ongoingcontest = () => {
  return (
    <div className="main-padding h-full w-full pb-10">
      <div className="flex justify-between pt-24">
        <a href="/wallet">
          <div className="flex items-center gap-2 cursor-pointer">
            <i className='bx bx-left-arrow-alt text-2xl text-primary' id="left-arrow"></i>
            <h3 className="text-primary text-xl font-semibold">Back</h3>
          </div>
        </a>
        <div className="flex items-center gap-4 px-4">
          <button className="rounded-full bg-gray-300 px-12 py-3 text-base cursor-pointer">Search</button>
          <img src={search} width="15px" alt="Search icon" className="absolute ml-5" />
        </div>
      </div>

      <div>
        <div className="text-2xl text-left font-bold mb-6 mt-6">Ongoing Contest</div>
        <div className="flex flex-col lg:flex-row gap-10 rounded-xl bg-blue-300 h-[1050px] lg:h-[400px] p-10">
          <div>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex flex-col pt-8">
                <h3 className="text-3xl text-left font-semibold text-gray-900">Sci-Fi Adventure</h3>
                <p className="mb-4 mt-10 text-left font-medium text-gray-800 text-base leading-relaxed">
                  Let your imagination soar by crafting an exhilarating science fiction adventure story. Transport
                  readers to futuristic worlds, introduce them to intriguing characters, and weave a captivating
                  narrative filled with suspense, technology, and exploration.
                </p>
              </div>
              <div className="element-removebg-wrapper">
                <img
                  className="object-cover w-72 h-72"
                  alt="Element removebg"
                  src="https://c.animaapp.com/8MIxy1Uo/img/6665918-removebg-preview-1.png"
                />
              </div>
            </div>
            <div className="flex lg:-mt-10 space-x-6">
              <div className="flex flex-col items-center">
                <img
                  className="h-12 w-12 object-cover"
                  alt="Screenshot"
                  src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-1-5@2x.png"
                />
                <div className="text-base font-medium text-gray-900">10,000 coins</div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="h-12 w-12 object-cover"
                  alt="Screenshot"
                  src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-2-5@2x.png"
                />
                <div className="text-base font-medium text-gray-900">5,000 coins</div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="h-12 w-12 object-cover"
                  alt="Screenshot"
                  src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-3-5@2x.png"
                />
                <div className="text-base font-medium text-gray-900">1,000 coins</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div>
            <button className="flex items-center space-x-2 rounded-full bg-gray-300 px-6 py-2 text-sm font-semibold cursor-pointer">
              <span>Rules</span>
              <img className="h-5 w-5" src={BookOpen5} alt="Open book icon" />
            </button>
          </div>
          <a>
            <button className="left-0 rounded-full bg-primary px-8 py-3 text-white font-bold hover:bg-opacity-90 transition cursor-pointer">
              Join Now
            </button>
          </a>
        </div>
      </div>
      <div className="border border-solid w-80 lg:w-[550px] border-primary shadow-md rounded-xl mt-14 py-6 px-6">
        <div className="flex gap-1 lg:gap-10">
          <div className="flex flex-col gap-10 text-base font-semibold">
            <div className="text-gray-400">Days</div>
            <div className="text-black">25</div>
          </div>
          <div className="pt-16 font-bold">:</div>
          <div className="flex flex-col gap-10 text-base font-semibold">
            <div className="text-gray-400">Hours</div>
            <div className="text-black">20</div>
          </div>
          <div className="pt-16 font-bold">:</div>
          <div className="flex flex-col gap-10 text-base font-semibold">
            <div className="text-gray-400">Minutes</div>
            <div className="text-black">20</div>
          </div>
          <div className="pt-16 font-bold">:</div>
          <div className="flex flex-col gap-10 text-base font-semibold">
            <div className="text-gray-400">Seconds</div>
            <div className="text-black">50</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-10 text-left">
        <div className="text-black font-bold">No of Contestants</div>
        <p className="text-black text-sm font-medium">20 contestants joined so far</p>
      </div>
    </div>
  );
};

export const Countdown = ({
  property1,
  className,
  propertyDefault = "https://c.animaapp.com/8MIxy1Uo/img/property-1-default.svg",
}: Props): JSX.Element => {
  return (
    <img
      className={`countdown ${className}`}
      alt="Property default"
      src={
        property1 === "variant-2"
          ? "https://c.animaapp.com/8MIxy1Uo/img/property-1-variant2.svg"
          : property1 === "variant-3"
            ? "https://c.animaapp.com/8MIxy1Uo/img/property-1-variant3.svg"
            : property1 === "variant-4"
              ? "https://c.animaapp.com/8MIxy1Uo/img/property-1-variant4.svg"
              : property1 === "variant-5"
                ? "https://c.animaapp.com/8MIxy1Uo/img/property-1-variant5.svg"
                : property1 === "variant-6"
                  ? "https://c.animaapp.com/8MIxy1Uo/img/property-1-variant6.svg"
                  : property1 === "variant-7"
                    ? "https://c.animaapp.com/8MIxy1Uo/img/property-1-variant7.svg"
                    : property1 === "variant-8"
                      ? "https://c.animaapp.com/8MIxy1Uo/img/property-1-variant8.svg"
                      : property1 === "variant-9"
                        ? "https://c.animaapp.com/8MIxy1Uo/img/property-1-variant9.svg"
                        : property1 === "variant-10"
                          ? "https://c.animaapp.com/8MIxy1Uo/img/property-1-variant10.svg"
                          : propertyDefault
      }
    />
  );
};

Countdown.propTypes = {
  property1: PropTypes.oneOf([
    "default",
    "variant-5",
    "variant-2",
    "variant-3",
    "variant-4",
    "variant-8",
    "variant-7",
    "variant-6",
    "variant-10",
    "variant-9",
  ]),
  propertyDefault: PropTypes.string,
};