import React from "react";
import imageToAdd from './../assets/images/logo.png';
import twitter from './../assets/icons/twitter.png';
import facebook from './../assets/icons/facebook.png';
import youtube from './../assets/icons/youtube.png';
import apple from './../assets/images/apple.png';
import google from './../assets/images/google.png';


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
               <div className="logo"> <img
                  alt="Rectangle"
                  src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-32-1@2x.png" width="100px" height="100px"
                /> <a className="letterlogo">StoryCreate</a>
                </div>
                <p className="text-wrapper-21">Never miss a new release</p>
                <p className="text-wrapper-22">Be the first to get the latest update </p>
                <p className="text-wrapper-23">from our platform</p>
              </div>

              <div className="div-wrapper">
                <div className="overlap">
                  <div className="group-20">
                    <div className="overlap-group-2">
                      <div className="input-group"> <input className="email-input" /> <button className="subscribe"> Subscribe </button> </div>
                    </div>
                  </div>
                  <div className="group-21">
                  
                  </div>
                </div>
              </div>
            </div>
            
            <div className="overlap-wrapper">
            <img className="line" alt="Line" src="https://c.animaapp.com/d3ZMzGnY/img/line-17.svg" width="35px" height="70px" />
            </div>

            <div className="about-us">
              <div className="text-wrapper-24">About Us</div>
              <div className="text-wrapper-25">Careers</div>
              <div className="text-wrapper-26">Contact Us</div>
              <div className="text-wrapper-27">FAQ</div>
            </div>
            <div> <img className="apple" src={apple} /> </div>
            <div> <img className="google" src={google} /> </div>
            <div className="group-18">
              <div className="group-19">
            
              </div>
              
            </div>
            <img className="line-2" alt="Line" src="https://c.animaapp.com/d3ZMzGnY/img/line-17.svg" width="35px" height="70px" />
            <div className="group-22">
              <div className="follow">Follow Us</div>
              <div className="social-media-icons">
              <img className="image-icon" src={twitter} alt="image" width="18px" height="18px"/>
              <i className='bx bxl-instagram'></i>
              <img src={facebook} alt="image" width="25px" height="25px"/>
              <img className="image-icon" src={youtube} alt="image" width="25px" height="25px"/>
              </div>
            </div>
            <div>
            
            </div>
          </footer>
    )
}

