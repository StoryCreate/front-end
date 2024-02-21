import { Link } from "react-router-dom";
import imageToAdd from './../assets/icons/Frame 10.png';
import search from './../assets/icons/search.png';
import jenni from './../assets/images/jenni.png';
import photo_icon from './../assets/icons/photo_icon.png';

export const Homepost = () => {
    
    return (
        <div className="homepost">
         <div className="div">
          <div className="home-group">
            <div>
              <div>
                <div className="text-wrapper">
                <button className="home-search"> Search </button> <i className='bx bxs-bell' id="bell"> </i> <i className='bx bx-chat' id="chat"></i> <i className='bx bx-group' id="group"> </i> </div>
                <div className="home-search-icon"> <img src={search} width="15px" /> </div>
              </div>
            </div>
          </div>

          <a href="/"> <div className="homepost-back">
               <i className='bx bx-left-arrow-alt' id="left-arrow"></i> <h3> Back </h3>
             </div> </a>

             <div className="frame-2">
                  <div className="group-5">
                  <div>
                    <div className="community-member"> Jenni Caldwell </div>
                    <img src={jenni} className="jenni" />
                  </div>
                  <div>
                  <input className="type-something" placeholder="type something..." />
                  </div>
                </div>
                 <div className="home-post-photo">
                <img src={photo_icon} className="photo-icon" />
                <button className="home-post-button"> Post </button>
                </div>
             </div>

             <div className="frame-3">
                <div className="group-6">

                </div>
             </div>
          
        </div>
      </div>
    );
  };