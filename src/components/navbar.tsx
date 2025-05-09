import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import imageToAdd from './../assets/images/logo.png';
import { useEffect, useRef, useState } from "react";
import userIcon from './../assets/icons/user.png';
import message from './../assets/icons/message.png';
import notifications from './../assets/icons/notifications.png';
import gigs from './../assets/icons/gigs.png';
import community from './../assets/icons/community.png';
import settings from './../assets/icons/settings.png';
import logoutIcon from './../assets/icons/logout.png';
import profile_pic from './../assets/icons/profile-pic.svg';
import { Menu } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@comp/lib/hooks";
import { logout } from "@comp/lib/features/authSlice";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [opentwo, setOpentwo] = useState<boolean>(false);
  const [openthree, setOpenthree] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdowntwoRef = useRef<HTMLDivElement>(null);
  const dropdownthreeRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authUser = useAppSelector((state: any) => state.auth.user);
  const firstName = authUser?.person?.firstName || authUser?.firstName || '';
  const lastName = authUser?.person?.lastName || authUser?.lastName || '';

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    const handleClick = (e: any) => {
      if (open && !dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
      if (opentwo && !dropdowntwoRef.current?.contains(e.target as Node)) {
        setOpentwo(false);
      }
      if (openthree && !dropdownthreeRef.current?.contains(e.target as Node)) {
        setOpenthree(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [open, opentwo, openthree]);

  if (pathname === "/signup" || pathname === "/login") {
    return null;
  }

  const handleDropDownFocus = (state: boolean) => setOpen(!state);
  const handleDropDownFocustwo = (state: boolean) => setOpentwo(!state);
  const handleDropDownFocusthree = (state: boolean) => setOpenthree(!state);

  return (
    <div className="navbar">
      <div className="flex gap-4 lg:ml-10 items-center">
        <Link to="/"> <img src={imageToAdd} alt="image" width="40px" height="40px" /> </Link>
        <a href="/" className="navletter-logo">StoryCreate</a>
      </div>
      <div className="ml-[100px] md:ml-[490px] mt-0 visible lg:invisible text-primary">
        <div ref={dropdowntwoRef}>
          <div onClick={e => handleDropDownFocustwo(opentwo)}>
            <Menu />
            {opentwo && (
              <div className="absolute w-full mt-2 bg-white left-0 p-3 z-50 shadow-lg">
                <div className="flex flex-col gap-3 pl-4 text-left">
                  <Link to="/dashboard"> <div className="text-primary font-semibold hover:text-[#C710C7] text-xs"> Dashboard </div> </Link>
                  <Link to="/"> <div className="text-primary font-semibold hover:text-[#C710C7] text-xs"> Home </div> </Link>
                  <Link to="/library"> <div className="text-primary font-semibold hover:text-[#C710C7] text-xs"> Library </div> </Link>
                  <Link to="/wallet"> <div className="text-primary font-semibold hover:text-[#C710C7] text-xs"> Wallet </div> </Link>
                  <div ref={dropdownthreeRef}>
                    <button className='me-button-mobile'> <div onClick={e => {
                      e.stopPropagation();
                      handleDropDownFocusthree(openthree);
                    }}> Me <i className='bx bx-chevron-down' id="me-drop-arrow-mobile"></i> </div>
                      <div className="nav-me-mobile">
                        <div className="memenu-mobile">
                          {openthree && (
                            <dl>
                              <img alt="Profile"
                                src={profile_pic} width="40px" height="40px"
                              />
                              {authUser && <h5 className="p-4 text-black font-medium">{firstName} {lastName}</h5>}
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
                              <a href="/viewprofile" id="me-user-profile">
                                <img src={userIcon} height="18px" alt="User icon" />
                                <h5 className="text-black font-medium hover:text-primary">View profile</h5>
                              </a>
                              <a href="/messages" id="me-user-message"> <img src={message} height="18px" /> <h5 className="text-black font-medium hover:text-primary"> Messages </h5> </a>
                              <a href="/notifications" id="me-user-notifications"> <img src={notifications} height="18px" /> <h5 className="text-black font-medium hover:text-primary"> Notifications </h5> </a>
                              <a href="/mygigs" id="me-user-gigs"> <img src={gigs} height="18px" /> <h5 className="text-black font-medium hover:text-primary"> My gigs </h5> </a>
                              <a href="/explore" id="me-user-community"> <img src={community} height="18px" /> <h5 className="text-black font-medium hover:text-primary"> Community </h5> </a>
                              <a href="/settings" id="me-user-settings"> <img src={settings} height="18px" /> <h5 className="text-black font-medium hover:text-primary"> Settings </h5> </a>
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
                              <button id="me-user-logout" onClick={handleLogout} className="flex items-center gap-2 bg-transparent">
                                <img src={logoutIcon} height="18px" alt="Logout icon" />
                                <h5 className="text-black font-medium hover:text-primary cursor-pointer">Log Out</h5>
                              </button>
                            </dl>
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                  <button id="me-user-logout" onClick={handleLogout} className="flex items-center gap-2 bg-transparent">
                    <h5 className="text-primary -mt-4 font-semibold hover:text-primary cursor-pointer z-10">Log Out</h5>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute lg:relative flex flex-col lg:flex-row gap-0 lg:gap-8 mr-10 font-semibold items-center text-[#8b008b] invisible lg:visible">
        <Link to="/dashboard"> <div className="text-primary hover:text-[#C710C7]"> Dashboard </div> </Link>
        <Link to="/"> <div className="text-primary hover:text-[#C710C7]"> Home </div> </Link>
        <Link to="/library"> <div className="text-primary hover:text-[#C710C7]"> Library </div> </Link>
        <Link to="/wallet"> <div className="text-primary hover:text-[#C710C7]"> Wallet </div> </Link>
        <div ref={dropdownRef}>
          <button className='me-button'> <div onClick={e => handleDropDownFocus(open)}> Me <i className='bx bx-chevron-down' id="me-drop-arrow"></i> </div>
            <div className="nav-me">
              <div className="memenu">
                {open && (
                  <dl>
                    <img alt="Profile"
                      src={profile_pic} width="40px" height="40px"
                    />
                    {authUser && <h5 className="p-4 text-black font-medium">{firstName} {lastName}</h5>}
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
                    <a href="/viewprofile" id="me-user-profile">
                      <img src={userIcon} height="18px" alt="User icon" />
                      <h5 className="text-black font-medium hover:text-primary">View profile</h5>
                    </a>
                    <a href="/messages" id="me-user-message"> <img src={message} height="18px" /> <h5 className="text-black font-medium hover:text-primary"> Messages </h5> </a>
                    <a href="/notifications" id="me-user-notifications"> <img src={notifications} height="18px" /> <h5 className="text-black font-medium hover:text-primary"> Notifications </h5> </a>
                    <a href="/mygigs" id="me-user-gigs"> <img src={gigs} height="18px" /> <h5 className="text-black font-medium hover:text-primary"> My gigs </h5> </a>
                    <a href="/explore" id="me-user-community"> <img src={community} height="18px" /> <h5 className="text-black font-medium hover:text-primary"> Community </h5> </a>
                    <a href="/settings" id="me-user-settings"> <img src={settings} height="18px" /> <h5 className="text-black font-medium hover:text-primary"> Settings </h5> </a>
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
                    <button id="me-user-logout" onClick={handleLogout} className="flex items-center gap-2 bg-transparent">
                      <img src={logoutIcon} height="18px" alt="Logout icon" />
                      <h5 className="text-black font-medium hover:text-primary cursor-pointer">Log Out</h5>
                    </button>
                  </dl>
                )}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}