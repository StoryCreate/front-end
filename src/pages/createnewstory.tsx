import React from "react";
import marker_pen from './../assets/icons/marker_pen.png';
import photo_icon from './../assets/icons/photo_icon.png';
import toggle_pupple from './../assets/icons/toggle_pupple.png';
import up_down from './../assets/icons/up_down.png';

export const Createnewstory = () => {
    return (
        <div className="create-story">
            <a href="/dashboard">
            <div className="library-back">
              <i className='bx bx-left-arrow-alt' id="left-arrow"></i> <h1 className="back"> Back </h1>
             </div> </a>
             <a href="/hire"> <button className="library-hire-creator"> Hire a creator </button> <img src={marker_pen} className="marker-pen" /> </a>

             <div className="frame">
                <div className="frame-2">
                    Add a Story Cover
                </div>
                <img src={photo_icon} className="photo-icon"/>
                <div className="photo-plus"> + </div>

                <div>
                    <input type="text" placeholder="Book Title" className="frame-3"/>
                </div>

                <div>
                    <input type="text" placeholder="Book Description"  className="frame-4" />
                </div>

                <div className="frame-5">
                    Book Category
                </div>
                <img src={up_down} className="up-down-1" />

                <div className="frame-6">
                    Main Character
                </div>

                <div className="photo-plus-2"> + </div>

                <div className="frame-7">
                    Primary Audience
                </div>
                <img src={up_down} className="up-down-2" />

                <div className="frame-8">
                    Add Tag
                </div>

                <div className="photo-plus-3"> + </div>

                <div className="frame-9">
                    Select Language
                </div>
                <img src={up_down} className="up-down-3" />

                <div className="frame-10">
                    Upload file
                </div>

                <button className="browse-button"> Browse </button>

                <div className="frame-11">
                    Give subscribers full access
                </div>

                <img src={toggle_pupple} className="toggle-pupple" />

                <a href="/storytyping"> <button className="continue-button"> Continue </button> </a>

             </div>
        </div>
    );
};