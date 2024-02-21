import React from "react";
import love from './../assets/icons/love.png';
import more_vertical from './../assets/icons/more_vertical.png';
import line from './../assets/icons/line.png';
import andrea from './../assets/images/andrea.png';
import find_gig from './../assets/images/find_gig.png';

export const Findgig = () => {
    return (
    <div className="find-gig">
      <div className="find-gig-back">
            <i className='bx bx-left-arrow-alt' id="left-arrow"></i> <h1 className="back"> Back </h1>
        </div>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="screenshot"
            alt="Screenshot"
            src={find_gig}
          />
          <div className="rectangle" />
          <div className="div">Let's get you a gig!</div>
        </div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="div-wrapper">
            <div className="overlap-group-2">
              <div><button className="text-wrapper-2"> Search </button></div>
            </div>
          </div>
          <div className="group-2">
            <div className="overlap-2">
              <div>
              <input className="text-wrapper-3" placeholder="Type anything..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="line" alt="Line" src="https://c.animaapp.com/nJgMXXKG/img/line-23.svg" />

      <div className="available-group">
            <img className="gig-line" alt="gigs-Line" src={line} />
              <div className="group-3">
                <div className="available-jobs">Available jobs</div>
              </div>
        </div>

        <div className="saved-group">
                <a href="/savedjobs" className="saved-jobs">Saved jobs</a>
        </div>

      <div className="group-wrapper">
        <div className="group-3">
          <div className="group-4">
            <img className="ellipse" alt="Ellipse" src={andrea} />
            <div className="text-wrapper-4">Andrea Cole</div>
            <p className="p">
            I need a fiction writer to help bring my idea to life. It’s going to be a 20k word project
            </p>
            <img src={love} className="like" />
            <img src={more_vertical} className="more-vertical" />
            <div className="time"> Posted 1 hour ago</div>
            <div>
            <button className="button">
              <div>
                Send Proposal
              </div>
            </button>
            </div>
          </div>
          </div>
        </div>

        <div className="group-wrapper-2">
        <div className="group-3">
          <div className="group-4">
            <img className="ellipse" alt="Ellipse" src={andrea} />
            <div className="text-wrapper-4">Andrea Cole</div>
            <p className="p">
            I need a fiction writer to help bring my idea to life. It’s going to be a 20k word project
            </p>
            <img src={love} className="like" />
            <img src={more_vertical} className="more-vertical" />
            <div className="time"> Posted 1 hour ago</div>
            <div>
            <button className="button">
              <div>
                Send Proposal
              </div>
            </button>
            </div>
          </div>
          </div>
        </div>

        <div className="group-wrapper-3">
        <div className="group-3">
          <div className="group-4">
            <img className="ellipse" alt="Ellipse" src={andrea} />
            <div className="text-wrapper-4">Andrea Cole</div>
            <p className="p">
            I need a fiction writer to help bring my idea to life. It’s going to be a 20k word project
            </p>
            <img src={love} className="like" />
            <img src={more_vertical} className="more-vertical" />
            <div className="time"> Posted 1 hour ago</div>
            <div>
            <button className="button">
              <div>
                Send Proposal
              </div>
            </button>
            </div>
          </div>
          </div>
        </div>

        <div className="group-wrapper-4">
        <div className="group-3">
          <div className="group-4">
            <img className="ellipse" alt="Ellipse" src={andrea} />
            <div className="text-wrapper-4">Andrea Cole</div>
            <p className="p">
            I need a fiction writer to help bring my idea to life. It’s going to be a 20k word project
            </p>
            <img src={love} className="like" />
            <img src={more_vertical} className="more-vertical" />
            <div className="time"> Posted 1 hour ago</div>
            <div>
            <button className="button">
              <div>
                Send Proposal
              </div>
            </button>
            </div>
          </div>
          </div>
        </div>

        <div className="group-wrapper-5">
        <div className="group-3">
          <div className="group-4">
            <img className="ellipse" alt="Ellipse" src={andrea} />
            <div className="text-wrapper-4">Andrea Cole</div>
            <p className="p">
            I need a fiction writer to help bring my idea to life. It’s going to be a 20k word project
            </p>
            <img src={love} className="like" />
            <img src={more_vertical} className="more-vertical" />
            <div className="time"> Posted 1 hour ago</div>
            <div>
            <button className="button">
              <div>
                Send Proposal
              </div>
            </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
};