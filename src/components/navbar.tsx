import React from "react";
import { Link } from "react-router-dom"
import imageToAdd from './../assets/images/logo.png';
import { useEffect, useRef, useState } from "react";
import user from './../assets/icons/user.png';
import message from './../assets/icons/message.png';
import notifications from './../assets/icons/notifications.png';
import gigs from './../assets/icons/gigs.png';
import community from './../assets/icons/community.png';
import settings from './../assets/icons/settings.png';
import logout from './../assets/icons/logout.png';

export const Navbar = () => {
    const [open, setOpen] = useState (false);
    const dropdownRef = useRef<HTMLDivElement>(null)
    const handleDropDownFocus=(state: boolean)=> {
        setOpen(!state);
    };

    return (
     <div className="navbar">
        <div className="nav-logo">
            <Link to="/"> <img src={imageToAdd} alt="image" width="40px" height="40px"/> </Link>
            <a href="/" className="navletter-logo">StoryCreate</a>
        </div>
      <div className="links">
       <Link to="/dashboard"> <a> Dashboard </a> </Link>
       <Link to="/"> <a> Home </a> </Link>
       <Link to="/library"> <a> Library </a> </Link>
       <Link to="/wallet"> <a> Wallet </a> </Link>
       <button className='me-button'> <a onClick={e=>handleDropDownFocus(open)}> Me <i className='bx bx-chevron-down' id="me-drop-arrow"></i> </a>
            <div className="nav-me" ref={dropdownRef}>
            <div className="memenu">
                { open && (
                <dl>
                    <img alt="Ellipse"
                    src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977-2@2x.png" width="40px" height="40px"
                />
                <h5 className="me-user-name"> Jenni_caldwell </h5>
                <hr
                  style={{
                    background: 'grey',
                    color: 'grey',
                    borderColor: 'grey',
                    height: '1px',
                    width: '100%',
                    marginBottom: '15px',
                    position: 'absolute',
                    marginLeft: '-30px',
                  }}
                />
                <a href="/viewprofile" id="me-user-profile"> <img src={user} height="18px" /> <h5 className="me-profile"> View profile </h5> </a>
                 <a href="/messages" id="me-user-message"> <img src={message} height="18px" /> <h5 className="me-message"> Messages </h5> </a>
                 <a href="/notifications" id="me-user-notifications"> <img src={notifications} height="18px" /> <h5 className="me-notifications"> Notifications </h5> </a>
                 <a href="/mygigs" id="me-user-gigs"> <img src={gigs} height="18px" /> <h5 className="me-gigs"> My gigs </h5> </a>
                 <a href="/explore" id="me-user-community"> <img src={community} height="18px" /> <h5 className="me-community"> Community </h5> </a>
                 <a href="/settings" id="me-user-settings"> <img src={settings} height="18px" /> <h5 className="me-settings"> Settings </h5> </a>
                 <hr
                  style={{
                    background: 'grey',
                    color: 'grey',
                    borderColor: 'grey',
                    height: '1px',
                    width: '100%',
                    marginBottom: '10px',
                    position: 'absolute',
                    marginLeft: '-30px',
                  }}
                />
                 <a id="me-user-logout"> <img src={logout} height="18px" /> <h5 className="me-log-out"> Log Out </h5> </a>
                </dl>
                )}
            </div>
           </div>
        </button>
      </div>
     </div>
    )
}