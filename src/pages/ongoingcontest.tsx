import React from "react";
import { Link } from "react-router-dom";
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
        <div className="ongoing-contest">
        <div className="home-group">
            <div>
              <div>
                <div className="text-wrapper">
                <button className="contest-search"> Search </button> </div>
                <div className="contest-search-icon"> <img src={search} width="15px" /> </div>
              </div>
            </div>
          </div>

          <a href="/contest"> <div className="contest-back">
               <i className='bx bx-left-arrow-alt' id="left-arrow"></i> <h3> Back </h3> 
             </div> </a>

      <div className="group-2">
        <div className="text-wrapper-3">No of Contestants</div>
        <p className="p">20 contestants joined so far</p>
      </div>
      <div className="group-3">
        <div className="text-wrapper-3">Ongoing Contest</div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="group-4">
              <div className="overlap-group">
                <div className="element-removebg-wrapper">
                  <img
                    className="element-removebg"
                    alt="Element removebg"
                    src="https://c.animaapp.com/8MIxy1Uo/img/6665918-removebg-preview-1.png"
                  />
                </div>
                <div className="group-5">
                  <div className="group-6">
                    <img
                      className="screenshot"
                      alt="Screenshot"
                      src="https://c.animaapp.com/8MIxy1Uo/img/screenshot-2023-08-29-at-09-37-1@2x.png"
                    />
                    <div className="text-wrapper-4">10,000 coins</div>
                  </div>
                  <div className="group-7">
                    <img
                      className="img"
                      alt="Screenshot"
                      src="https://c.animaapp.com/8MIxy1Uo/img/screenshot-2023-08-29-at-09-37-2@2x.png"
                    />
                    <div className="text-wrapper-4">5,000 coins</div>
                  </div>
                  <div className="group-8">
                    <img
                      className="screenshot-2"
                      alt="Screenshot"
                      src="https://c.animaapp.com/8MIxy1Uo/img/screenshot-2023-08-29-at-09-37-3@2x.png"
                    />
                    <div className="text-wrapper-4">1,000 coins</div>
                  </div>
                </div>
                <div className="group-9">
                  <p className="text-wrapper-5">
                    Let your imagination soar by crafting an exhilarating science fiction adventure story. Transport
                    readers to futuristic worlds, introduce them to intriguing characters, and weave a captivating
                    narrative filled with suspense, technology, and exploration.
                  </p>
                  <div className="text-wrapper-6">Sci-Fi Adventure</div>
                </div>
              </div>
              <div>
                <div className="group-10">
                <button className="rules-button"> Rules <img className="open-book-icon" src={BookOpen5} />  </button>
                </div>
              </div>

              <a> <button className="button"> Join Now </button> </a>

            </div>
          </div>
        </div>
      </div>
      <div className="overlap-group-wrapper">
        <div className="overlap-3">
          <div className="text-wrapper-9">:</div>
          <div className="text-wrapper-10">:</div>
          <div className="text-wrapper-11">:</div>
          <div className="group-11">
            <div className="text-wrapper-12">Days</div>
            <div className="text-wrapper-13">25</div>
          </div>
          <div className="group-12">
            <div className="text-wrapper-12">Hours</div>
            <div className="text-wrapper-14">20</div>
          </div>
          <div className="group-13">
            <div className="text-wrapper-12">Minutes</div>
            <div className="text-wrapper-15">20</div>
          </div>
          <div className="text-wrapper-16">Seconds</div>
          <Countdown
            className="countdown-instance"
            property1="default"
            propertyDefault="https://c.animaapp.com/8MIxy1Uo/img/countdown.svg"
          />
        </div>
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