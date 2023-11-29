import React from "react";
import search from './../assets/icons/search.png';
import send_icon from './../assets/icons/send_icon.png';
import profile_picture1 from './../assets/icons/profile_picture1.png';
import profile_picture2 from './../assets/icons/profile_picture2.png';

export const Messages = () => {
    return (
        <div className="message">
      <div className="frame">
        <div className="group">
          <div className="overlap">
            <div className="group-wrapper">
              <div className="div">
              <div> <input className="message-search" placeholder="Search" /> <img className="messages-search-icon" src={search} width="15px" /> 
                </div>
              </div>
            </div>
            <div className="group-2">
              <div className="div-wrapper">
                <div className="group-3">
                    <div>
                      <img className="profile-picture-1" src={profile_picture1}/>
                    </div>
                  <div className="group-4">
                    <div className="text-wrapper-3">Austin Usman</div>
                    <div className="text-wrapper-4">Fiction Book</div>
                    <div className="text-wrapper-5">10:10 AM</div>
                    <p className="p">Can you take a look and...</p>
                  </div>
                </div>
              </div>
              
              <div className="group-3">
                  <div>
                  <img className="profile-picture-2" src={profile_picture2}/>
                  </div>
                  <div className="group-5">
                    <div className="text-wrapper-3a">Pete Kort</div>
                    <div className="text-wrapper-4a">Fiction Book</div>
                    <div className="text-wrapper-5a">10:10 AM</div>
                    <p className="p2">Can you take a look and...</p>
                  </div>
                </div>

                <div className="group-3">
                  <div>
                  <img className="profile-picture-2b" src={profile_picture2}/>
                  </div>
                  <div className="group-6">
                    <div className="text-wrapper-3a">Pete Kort</div>
                    <div className="text-wrapper-4a">Fiction Book</div>
                    <div className="text-wrapper-5a">10:10 AM</div>
                    <p className="p2">Can you take a look and...</p>
                  </div>
                </div>

                <div className="group-3">
                  <div>
                  <img className="profile-picture-2c" src={profile_picture2}/>
                  </div>
                  <div className="group-7">
                    <div className="text-wrapper-3a">Pete Kort</div>
                    <div className="text-wrapper-4a">Fiction Book</div>
                    <div className="text-wrapper-5a">10:10 AM</div>
                    <p className="p2">Can you take a look and...</p>
                  </div>
                </div>

                <div className="group-3">
                  <div>
                  <img className="profile-picture-2d" src={profile_picture2}/>
                  </div>
                  <div className="group-8">
                    <div className="text-wrapper-3a">Pete Kort</div>
                    <div className="text-wrapper-4a">Fiction Book</div>
                    <div className="text-wrapper-5a">10:10 AM</div>
                    <p className="p2">Can you take a look and...</p>
                  </div>
                </div>

                <div className="group-3">
                  <div>
                  <img className="profile-picture-2e" src={profile_picture2}/>
                  </div>
                  <div className="group-9">
                    <div className="text-wrapper-3a">Pete Kort</div>
                    <div className="text-wrapper-4a">Fiction Book</div>
                    <div className="text-wrapper-5a">10:10 AM</div>
                    <p className="p2">Can you take a look and...</p>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="frame-2">
        <div className="group-10">
          <div className="group-11">
            <div className="group-12">
              <div>
                <div>
                <img className="profile-picture-1b" src={profile_picture1}/>
                </div>
              </div>
              <div className="group-14">
                <div className="text-wrapper-6">Austin Usman</div>
                <p className="text-wrapper-7">
                  Hi Jenni
                  <br />
                  <br />
                  I have a fiction project that I’d like to have you on. Please send me <br /> your email address so I’d
                  send the details
                </p>
                <div className="text-wrapper-8">10:10 AM</div>
              </div>
            </div>
          </div>
          <div className="group-15">
            <div className="group-16">
              <div className="group-17">
                <div className="overlap-group-2">
                  <img className="ellipse-4" alt="Ellipse" src="https://c.animaapp.com/crPnW2vq/img/ellipse-1973.svg" />
                  <div className="ellipse-2" />
                </div>
              </div>
              <div className="group-18">
                <div className="text-wrapper-6">Jenni Caldwell</div>
                <p className="text-wrapper-7">
                  Hi Austin!
                  <br />
                  <br />
                  Thank you for considering me for this gig. I’d love to know more details about your project please. My
                  email is jenni@gmail.com
                  <br />
                  <br />I look forward to you mail. Thank you
                </p>
                <div className="text-wrapper-8">10:10 AM</div>
              </div>
            </div>
          </div>
          <div className="group-19">
            <div className="group-20">
              <div>
                <div>
                <img className="profile-picture-1b2" src={profile_picture1}/>
                </div>
              </div>
              <div className="group-21">
                <div className="text-wrapper-6">Austin Usman</div>
                <p className="text-wrapper-7">
                  Can you take a look and let me know your thoughts? I just sent you a mail.
                </p>
                <div className="text-wrapper-8">10:10 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-22">
        <div className="group-23">
          <div>
            <button className="contract-button">Contract</button>
          </div>
        </div>
        <div className="group-24">
          <div className="text-wrapper-10">Austin Usman</div>
          <div className="text-wrapper-11">8:00 AM GMT</div>
          <p className="text-wrapper-12">I need a fiction writer</p>
        </div>
      </div>
      <div className="overlap-wrapper">
        <div>
          <input className="type-message" placeholder="Type a message ..." />
          <img className="send-icon" src={send_icon} />
          <div className="group-25">
            <div>
              <button className="attach-button">Attach</button>
            </div>
          </div>
        </div>
      </div>
     </div>
    );
};