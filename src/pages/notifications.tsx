import React from "react";
import book_open from './../assets/icons/book_open.png';
import pen from './../assets/icons/pen.png';
import notification_more from './../assets/icons/notification_more.png';
import ariana from './../assets/icons/ariana.png';

export const Notifications = () => {
    return (
    <div className="notifications">
      <div className="overlap-3">
        <div className="overlap-4">
          <div className="group-8">
            <div className="group-wrapper">
              <div className="group-9">
                <div className="group-10">
                  <p className="p">
                    Popular books this week: Find popular books people
                    <br />
                    are reading this week.
                  </p>
                  <img src={book_open} className="book-open" />
                  <div className="group-11">
                    <div className="text-wrapper-11">1h</div>
                    <div className="group-12">
                      <img src={notification_more} className="notification_more" />
                    </div>
                  </div>
                </div>
                <div className="group-13">
                  <div>
                    <p className="p">
                      Find creators for your next creative project and hire
                      <br />
                      them.
                    </p>
                  </div>
                  <img src={pen} className="pen" />
                  <div className="group-14">
                    <div className="text-wrapper-11">2d</div>
                    <div className="group-12">
                    <img src={notification_more} className="notification_more" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-15">
              <div>
                    <p className="p">
                       Trending post from CREATE WITH MIDE: The power
                       <br />
                       of creativity can not be ...
                </p>
              </div>
              <div className="group-16">
                <div className="overlap-5">
                  <div className="rectangle-2" />
                  <div className="group-17">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-13">CWM</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-18">
                <div className="text-wrapper-14">2d</div>
                <div className="group-12">
                <img src={notification_more} className="notification_more" />
                </div>
              </div>
            </div>
            <div className="group-19">
              <div>
                <p className="p"> Ariana Audrey reacted to your post: Creativity is very
                    <br />
                    important when it comes to ...
                </p>
              </div>
              <div className="group-20">
                <div className="overlap-group-4">
                  <img src={ariana}
                    className="ellipse-4" 
                  />
                </div>
              </div>
              <div className="group-18">
                <div className="text-wrapper-14">2d</div>
                <div className="group-12">
                <img src={notification_more} className="notification_more" />
                </div>
              </div>
            </div>
            <div className="group-21">
              <div>
                <p className="p"> Mide commented on Jenni Caldwell’s post: Creativity
                <br /> is very important when it comes to ...
                </p>
              </div>
              <div className="group-20">
                <div className="overlap-group-4">
                  <img
                    className="ellipse-4"
                    alt="Ellipse"
                    src="https://c.animaapp.com/Y2gfbMH5/img/ellipse-1977-2@2x.png"
                  />
                </div>
              </div>
              <div className="group-18">
                <div className="text-wrapper-14">7d</div>
                <div className="group-12">
                <img src={notification_more} className="notification_more" />
                </div>
              </div>
            </div>
            <div className="group-22">
              <div className="group-20">
                <div className="overlap-group-4">
                  <img src={ariana}
                    className="ellipse-4"
                  />
                
                </div>
              </div>
              <div className="group-23">
                <p className="p">
                  Ariana Audrey followed you back.
                </p>
              </div>
              <div className="group-24">
                <div className="text-wrapper-14">6d</div>
                <div className="group-12">
                <img src={notification_more} className="notification_more" />
                </div>
              </div>
            </div>
            <div className="group-25">
              <div className="group-20">
                <div className="overlap-group-4">
                  <img src={ariana}
                    className="ellipse-4"
                  />
                </div>
              </div>
              <div>
                <p className="p"> People are reacting to Ariana Audrey’s post.
                </p>
              </div>
              <div className="group-26">
                <div className="text-wrapper-14">6w</div>
                <div className="group-12">
                <img src={notification_more} className="notification_more" />
                </div>
              </div>
            </div>
          </div>
          <img className="line-3" alt="Line" src="https://c.animaapp.com/Y2gfbMH5/img/line-40.svg" />
        </div>
        <div className="group-27">
          <div className="group-28">
            <div className="text-wrapper-16">All</div>
            <img className="line-4" alt="Line" src="https://c.animaapp.com/Y2gfbMH5/img/line-42.svg" />
          </div>
          <div className="group-29">
            <a href="/myposts" className="text-wrapper-17">My posts</a>
          </div>
          <div className="group-30">
            <a href="/mentions" className="text-wrapper-18">Mentions</a>
          </div>
        </div>
      </div>
      <div className="title"> Notifications </div>
      <a href="/notification"> <div className="text-wrapper-19">View settings</div> </a>
      <div className="text-wrapper-20">Manage your notifications</div>
      </div>
    );
};