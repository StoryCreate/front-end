import React from "react";
import { useLocation } from "react-router-dom"
import imageToAdd from './../assets/images/logo.png';
import twitter from './../assets/icons/twitter.png';
import facebook from './../assets/icons/facebook.png';
import youtube from './../assets/icons/youtube.png';
import apple from './../assets/images/apple.png';
import google from './../assets/images/google.png';


export const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/signup") return null;
  if (pathname === "/login") return null;

  return (
    <footer className="w-full p-6 lg:p-14 bg-[#005d8b] justify-between z-50">
      <div className="flex gap-6 text-white items-center"> <img
        alt="Rectangle"
        src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-32-1@2x.png" width="45px" height="45px"
      /> <a id="letterlogo">StoryCreate</a>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row items-center">
        <div className="pt-9">
          <p className="text-white text-left text-xl">Never miss a new release</p>
          <p className="font-semibold pt-6 text-white text-left text-xl max-w-md">
            Be the first to get the
            latest update from our platform
          </p>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row lg:items-center gap-0 md:gap-16 lg:gap-16 -ml-60 md:ml-10 lg:ml-32">
          <img className="invisible lg:visible" alt="Line" src="https://c.animaapp.com/d3ZMzGnY/img/line-17.svg" width="30px" height="70px" />

          <div className="flex flex-col gap-6 text-left text-white min-w-[90px]">
            <div>About Us</div>
            <div>Careers</div>
            <div>Contact Us</div>
            <div>FAQ</div>
          </div>

          <img className="invisible lg:visible" alt="Line" src="https://c.animaapp.com/d3ZMzGnY/img/line-17.svg" width="30px" height="70px" />

          <div>
            <div className="text-white text-lg">Follow Us</div>
            <div className="flex gap-2 items-center text-white">
              <img className="image-icon" src={twitter} alt="image" width="13px" height="13px" />
              <i className='bx bxl-instagram'></i>
              <img src={facebook} alt="image" width="18px" height="18px" />
              <img className="image-icon" src={youtube} alt="image" width="18px" height="18px" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start lg:items-center pt-12">
          <div className="flex"> <input type="email" className="py-6 px-14 text-left pl-4 w-full" placeholder="Enter your email" />
            <button type="button" className="py-6 px-6 bg-[#C710C7] text-white rounded-r-xl"> Subscribe </button>
          </div>
          <div> <img className="h-16 cursor-pointer" src={apple} /> </div> <div> <img className="h-16 cursor-pointer" src={google} /> </div>
        </div>
      </div>

    </footer>
  )
}

