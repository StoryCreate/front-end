import React from "react";
import search from './../assets/icons/search.png';
import explore from './../assets/icons/explore.png';
import community from './../assets/icons/community.png';
import the_pen from './../assets/images/the_pen.png';
import storyteller_haven from './../assets/images/storyteller_haven.png';

export const Mycommunity = () => {
    return (
    <div className="community-explore">
      <div className="frame">
        <div className="group">
          <div className="div">
            <div className="group-2">
              <div className="group-3">
                <div><a href="/explore" className="explore"> Explore </a></div>
                <img src={explore} className="icon-instance-node" />
              </div>
            </div>
            <div className="group-4">
            <img className="line" alt="Line" src="https://c.animaapp.com/D8UwJhxt/img/line-26.svg" />
              <div className="group-5">
                <div className="mycommunity-text-wrapper-2">My Community</div>
                <img src={community} className="icon-instance-node" />
              </div>
            </div>
          </div>
          <div className="group-6">
            <div className="group-wrapper">
              <div className="group-7">
                <img
                  className="ellipse"
                  src={the_pen}
                />
                <div className="group-8">
                  <div className="text-wrapper-3">The Pen and Paper Club</div>
                  <p className="p">
                  A forum dedicated to fostering a supportive environment for writers to share their stories, seek advice,
                  and connect with fellow wordsmiths who share a love for the written art.
                  </p>
                </div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="group-9">
                <img
                  className="ellipse"
                  src={storyteller_haven}
                />
                <div className="group-10">
                  <div className="text-wrapper-3">Storyteller’s Haven</div>
                  <p className="p">
                  A virtual gathering place for storytellers to share their narratives, explore different storytelling techniques,
                  and find encouragement and support from a community of fellow storytellers.
                  </p>
                </div>
              </div>
            </div>
            <div className="group-11">
              <div className="group-12">
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-3@2x.png"
                />
                <div className="group-13">
                  <div className="text-wrapper-3">Literary Nexus</div>
                  <p className="p">
                    A hub for writers of all genres and styles to come together, network, and find inspiration while
                    engaging in thoughtful conversations about literature and writing techniques
                  </p>
                </div>
              </div>
            </div>
            <div className="group-14">
              <div className="group-9">
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-2@2x.png"
                />
                <div className="group-10">
                  <div className="text-wrapper-3">Bookworm’s Retreat</div>
                  <p className="p">
                    A cozy online haven for avid readers to discuss their favorite books, share recommendations, and
                    engage in lively literary discussions.
                  </p>
                </div>
              </div>
            </div>
            <div className="group-15">
              <div className="group-16">
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975-1@2x.png"
                />
                <div className="group-17">
                  <div className="text-wrapper-3">Page Turners’ Paradise</div>
                  <p className="p">
                    A virtual paradise for book lovers to connect, exchange thoughts on captivating reads, and find
                    their next literary adventure.
                  </p>
                </div>
              </div>
            </div>
            <div className="group-18">
              <div className="group-12">
                <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/D8UwJhxt/img/ellipse-1975@2x.png" />
                <div className="group-13">
                  <div className="text-wrapper-3">Storybook Enclave</div>
                  <p className="p">
                    A forum dedicated to celebrating the enchantment of books, where readers come together to share
                    their love for stories, discuss plot twists, and connect with fellow bookworms.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group-19">
            <div className="group-20">
              <div> <input className="text-wrapper-4" placeholder="Search" /> </div>
              <img src={search} className="search-instance" />
            </div>
          </div>
        </div>
      </div>
      <div className="group-21">
        <img
          className="element-tiny"
          alt="Element tiny"
          src="https://c.animaapp.com/D8UwJhxt/img/28480855-tiny-business-persons-working-on-jigsaw-puzzle-together.png"
        />
        <a  href="/createcommunity"> <button className="img"> + Create </button> </a>
      </div>
     </div>
    );
};