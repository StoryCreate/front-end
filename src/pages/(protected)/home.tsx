import { Link } from "react-router-dom";
import imageToAdd from "@assets/icons/Frame 10.png";

export const Home = () => {
  return (
    <div className="home px-6">
      <div className="div">
        <div className="group">
          <div>
            <div>
              <div className="text-wrapper">
                <button id="search"> Search </button>{" "}
                <i className="bx bxs-bell" id="bell">
                  {" "}
                </i>{" "}
                <i className="bx bx-chat" id="chat"></i>{" "}
                <i className="bx bx-group" id="group">
                  {" "}
                </i>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="group-3">
          <i className="bx bx-left-arrow-alt" id="left-arrow"></i>{" "}
          <h1> Back </h1>
        </div>

        <div>
          {" "}
          <button id="post"> + </button>
        </div>

        <div className="frame">
          <div className="group-4">
            <div className="group-5">
              <div className="group-6">
                <div className="ellipse-1">
                  {" "}
                  <img
                    alt="Ellipse"
                    src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977-4@2x.png"
                    width="80px"
                    height="80px"
                  />
                  <div>
                    {" "}
                    <h4 className="text-wrapper-6">Cindy Lawrence</h4>{" "}
                  </div>
                </div>
              </div>

              <div className="rectangle-1">
                <div>
                  {" "}
                  <p className="p">
                    I came across this amazing library. Y’all should check it
                    out
                  </p>{" "}
                </div>
                <div>
                  {" "}
                  <img
                    src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3-4.png"
                    width="600px"
                    height="300px"
                  />{" "}
                </div>
              </div>
            </div>

            <div className="heart-icons">
              <i className="bx bx-heart"></i>{" "}
              <img
                className="img"
                alt="Frame"
                src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg"
              />{" "}
              <img src={imageToAdd} alt="image" />
            </div>
          </div>

          <div className="likes">
            <div className="text-wrapper-3">10 likes</div>
            <div className="text-wrapper-4">View all 10 comments</div>
            <div className="text-wrapper-5">10 mins ago</div>
          </div>

          <div className="group-7">
            <div className="share-wrapper"></div>

            <div className="group-8">
              <div>
                <div className="ellipse-2">
                  {" "}
                  <img
                    alt="Ellipse"
                    src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977-3@2x.png"
                    width="80px"
                    height="80px"
                  />
                  <div>
                    {" "}
                    <h4 className="text-wrapper-6">Katherine Cage</h4>{" "}
                  </div>
                </div>
              </div>

              <div className="rectangle-2">
                <div>
                  {" "}
                  <p className="p2">
                    Me and mines!!! Do y’all agree fashion is art?
                  </p>{" "}
                </div>
                <div>
                  {" "}
                  <img
                    src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3-3.png"
                    width="600px"
                    height="300px"
                  />{" "}
                </div>
              </div>

              <div className="heart-icons2">
                <i className="bx bx-heart" id="heart-2">
                  {" "}
                </i>{" "}
                <img
                  className="img"
                  alt="Frame"
                  src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg"
                />{" "}
                <img src={imageToAdd} alt="image" />
              </div>

              <div>
                <div className="group-9">
                  <div className="text-wrapper-3a">10 likes</div>
                  <div className="text-wrapper-4a">View all 10 comments</div>
                  <div className="text-wrapper-5a">10 mins ago</div>
                </div>
              </div>
              <div className="group-7">
                <div className="share-wrapper"></div>
              </div>
            </div>

            <div className="ellipse-3">
              <img
                alt="Ellipse"
                src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977-2@2x.png"
                width="80px"
                height="80px"
              />
              <h4 className="text-wrapper-6">Jenni Caldwell </h4>
            </div>

            <div className="group-11">
              <div>
                <p className="p3">
                  <span className="span">
                    I published my book today. Y’all should check it out and
                    tell me your thoughts. <br />
                    The link is{" "}
                  </span>
                  <span className="text-wrapper-7">
                    https://storycreate.tme.ggghhh.com/
                  </span>
                </p>
              </div>
              <div>
                {" "}
                <img
                  className="rectangle-3"
                  alt="Rectangle"
                  src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3-2.png"
                />{" "}
              </div>

              <div className="heart-icons3">
                <i className="bx bx-heart" id="heart-2">
                  {" "}
                </i>{" "}
                <img
                  className="img"
                  alt="Frame"
                  src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg"
                />{" "}
                <img src={imageToAdd} alt="image" />
              </div>

              <div>
                <div className="text-wrapper-8">10 likes</div>
                <div className="text-wrapper-9">View all 10 comments</div>
                <div className="text-wrapper-10">10 mins ago</div>
              </div>

              <div className="ellipse-4">
                <img
                  alt="Ellipse"
                  src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977-1@2x.png"
                  width="80px"
                  height="80px"
                />
                <div className="text-wrapper-6">Johnson Peters</div>
              </div>
            </div>

            <div className="group-13">
              <div className="rectangle-4">
                <p className="p4">
                  This is definitely one of the best books of our time!
                </p>
                <img src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3-1.png" />
              </div>

              <div className="heart-icons4">
                <i className="bx bx-heart" id="heart-2">
                  {" "}
                </i>{" "}
                <img
                  className="img"
                  alt="Frame"
                  src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg"
                />{" "}
                <img src={imageToAdd} alt="image" />
              </div>

              <div className="text-wrapper-11">10 likes</div>
              <div className="text-wrapper-12">View all 10 comments</div>
              <div className="text-wrapper-13">10 mins ago</div>
              <div className="group-15"></div>
            </div>
            <div className="group-16">
              <div className="ellipse-5">
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977@2x.png"
                  width="80px"
                  height="80px"
                />
                <div className="text-wrapper-6">Cindy Lawrence</div>
              </div>

              <div className="rectangle-5">
                <p className="p5">
                  Anime is everything it thinks it is! Damn!!
                </p>
                <img src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3.png" />
              </div>

              <div className="heart-icons5">
                <i className="bx bx-heart" id="heart-2">
                  {" "}
                </i>{" "}
                <img
                  className="img"
                  alt="Frame"
                  src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg"
                />{" "}
                <img src={imageToAdd} alt="image" />
              </div>

              <div className="text-wrapper-14">10 likes</div>
              <div className="text-wrapper-15">View all 10 comments</div>
              <div className="text-wrapper-16">10 mins ago</div>
            </div>
          </div>
        </div>

        <div className="group-24">
          <div className="notification">
            <div className="component-2"></div>
          </div>
        </div>
        <header className="header">
          <div className="navbar">
            <div className="text-wrapper-29">Dashboard</div>
            <Link className="text-wrapper-30" to="/home">
              Home{" "}
            </Link>
            <div className="text-wrapper-31">Library</div>
            <div className="text-wrapper-32">Me</div>
            <div className="text-wrapper-33">Wallet</div>
            <div className="group-25">
              <div className="text-wrapper-34">StoryCreate</div>
              <img
                className="rectangle-4"
                alt="Rectangle"
                src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-32@2x.png"
              />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
