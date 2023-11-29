import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import location from './../assets/icons/location.png';
import facebook_profile from './../assets/icons/facebook_profile.png';
import instagram_profile from './../assets/icons/instagram_profile.png';
import LinkedIN_profile from './../assets/icons/LinkedIN_profile.png';
import more_icon from './../assets/icons/more_icon.png';
import book_open from './../assets/icons/book_open.png';
import notebook from './../assets/icons/notebook.png';
import thumbs_up from './../assets/icons/thumbs_up.png';
import subscribers from './../assets/icons/subscribers.png';
import creators from './../assets/icons/creators.png';

export const Viewprofile = () => {
  const [open, setOpen] = useState (false);
    const dropdownRef = useRef<HTMLDivElement>(null)
    const handleDropDownFocus=(state: boolean)=> {
        setOpen(!state);
    };

    return (
     <div className="profile">
      <div className="group">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="overlap-group">
              <div className="overlap-group-wrapper">
                <div className="div">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://c.animaapp.com/7HeBl85L/img/rectangle-2383.png"
                  />
                  <img
                    className="ellipse"
                    alt="Ellipse"
                    src="https://c.animaapp.com/7HeBl85L/img/ellipse-1980@2x.png"
                  />
                </div>
              </div>
              <div className="text-wrapper">Jenni Caldwell</div>
              <p className="p">Fiction Writer | Book Writer</p>
            </div>
            <div>
                <button className="edit-profile-button"> Edit Profile </button>
            </div>
            <div className="group-2">
              <a href="/friends" className="text-wrapper-3">1000 Friends</a>
              <a href="/followers"className="text-wrapper-4">900 Followers</a>
              <a href="/following" className="text-wrapper-5">500 Following</a>
            </div>
          </div>
        </div>
        <div className="group-wrapper">
          <div className="group-3">
            <div className="text-wrapper-6">About Me</div>
            <p className="i-m-a-fiction-writer">
              I’m a Fiction Writer with 3 years experience. I&#39;m a passionate writer with a love for storytelling and
              a knack for wordsmithing. Whether it&#39;s crafting captivating narratives or penning thought-provoking
              articles, I&#39;m always up for a creative challenge. Based in beautiful Phoenix, USA. I find inspiration
              in the vibrant culture and rich history of my surroundings. Let&#39;s embark on a literary journey
              together!
            </p>
          </div>
        </div>
      </div>
      <div className="group-4">
        <div className="group-5">
          <div className="text-wrapper-6">Interest</div>
          <div className="group-6">
            <div className="text-wrapper-7">Reading</div>
            <div className="text-wrapper-8">●</div>
          </div>
          <div className="group-7">
            <div className="text-wrapper-7">Writing</div>
            <div className="text-wrapper-8">●</div>
          </div>
          <div className="group-8">
            <div className="text-wrapper-7">Traveling</div>
            <div className="text-wrapper-8">●</div>
          </div>
          <div className="group-9">
            <div className="text-wrapper-7">Connecting</div>
            <div className="text-wrapper-8">●</div>
          </div>
        </div>
      </div>
      <div className="group-10">
        <div className="group-11">
          <div className="text-wrapper-9">Location</div>
          <div className="group-12">
            <img src={location} className="location-icon" />
            <div className="text-wrapper-10">Phoenix, USA</div>
          </div>
        </div>
      </div>
      <div className="group-13">
        <div className="group-14">
          <div className="text-wrapper-6">Let’s Connect</div>
          <div className="group-15">
            <div className="text-wrapper-11">www.jennicaldwell.com</div>
            <img className="image" alt="Image" src="https://c.animaapp.com/7HeBl85L/img/--.svg" />
          </div>
          <div className="group-16">
            <div className="text-wrapper-12">Jenni_Caldwell</div>
            <img className="image" src={instagram_profile} />
          </div>
          <div className="group-17">
            <div className="text-wrapper-12">Jenni Caldwell</div>
            <img className="image" src={facebook_profile} />
          </div>
          <div className="group-18">
            <div className="text-wrapper-13">Jenni Caldwell</div>
            <img className="image" src={LinkedIN_profile} />
          </div>
        </div>
      </div>
      <div> <a onClick={e=>handleDropDownFocus(open)}> <img className="more_icon" src={more_icon}/> </a>
      <div className="view-profile-more">
            <div className="moremenu" ref={dropdownRef}>
                { open && (
                <dl>
                <a id="more-published-stories"> <img src={book_open} height="18px" /> <h5 className="published-stories"> Published Stories </h5> </a>
                 <a href="/readinglist" id="more-reading-list"> <img src={notebook} height="18px" /> <h5 className="reading-list"> Reading List </h5> </a>
                 <a id="more-saved-books"> <img src={thumbs_up} height="18px" /> <h5 className="saved-books"> Saved Books </h5> </a>
                 <a href="/subscribers" id="more-subscribers"> <img src={subscribers} height="18px" /> <h5 className="subscribers"> Subscribers </h5> </a>
                 <a href="/creators" id="more-creators"> <img src={creators} height="18px" /> <h5 className="creators"> Creators I follow </h5> </a>
                </dl>
                )}
              </div>
             </div>
            </div>
      </div>
    );
};