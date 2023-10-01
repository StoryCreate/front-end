import React from "react";
import { Link } from "react-router-dom"
import imageToAdd from './../assets/images/logo.png';

export const Navbar = () => {
    return (
     <div className="navbar">
        <div className="nav-logo">
            <Link to="/"> <img src={imageToAdd} alt="image" width="40px" height="40px"/> </Link>
            <a className="navletter-logo">StoryCreate</a>
        </div>
      <div className="links">
       <Link to="/dashboard"> <a> Dashboard </a> </Link>
       <Link to="/"> <a> Home </a> </Link>
       <Link to="/library"> <a> Library </a> </Link>
       <Link to="/wallet"> <a> Wallet </a> </Link>
       <Link to="/memenu"> <a> Me </a> </Link>
      </div>
     </div>
    )
}