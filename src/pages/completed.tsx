import React from "react";

export const Completed = () => {
    return (
        <div className="completed">
      <div className="group">
        <p className="text-wrapper">Take a look at what you’ve got<br /> going on</p>
        <img
          className="element"
          alt="Element"
          src="https://c.animaapp.com/YxwUBPXI/img/18355626-73z-2108-w023-n001-896b-p1-1.png"
        />
      </div>
      <div className="div">
        <div className="group-2">
          <div className="group-3">
            <a href="/mygigs" className="text-wrapper-2">Ongoing</a>
            <img className="line" alt="Line" src="https://c.animaapp.com/YxwUBPXI/img/line-28-1.svg" />
          </div>
          <div className="group-4">
            <div className="text-wrapper-3">Completed</div>
            <img className="img" alt="Line" src="https://c.animaapp.com/YxwUBPXI/img/line-28@2x.png" />
          </div>
        </div>
        <div className="group-5">
          <img className="line-2" alt="Line" src="https://c.animaapp.com/YxwUBPXI/img/line-29.svg" />
          <img className="line-3" alt="Line" src="https://c.animaapp.com/YxwUBPXI/img/line-29.svg" />
          <div className="group-6">
            <div className="text-wrapper-4">10k words fiction writing</div>
            <div className="text-wrapper-5">Hired by: Andre Caldwell</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <button className="text-wrapper-6">Propose New Gig</button>
              </div>
            </div>
          </div>
          <div className="group-7">
            <div className="text-wrapper-4">10k words fiction writing</div>
            <div className="text-wrapper-5">Hired by: Timi Bamigboye</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <button className="text-wrapper-6">Propose New Gig</button>
              </div>
            </div>
          </div>
          <div className="group-8">
            <div className="text-wrapper-4">10k words fiction writing</div>
            <div className="text-wrapper-5">Hired by: Henrietta Peakson</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <button className="text-wrapper-6">Propose New Gig</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    );
};