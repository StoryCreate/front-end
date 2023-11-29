import { Link } from "react-router-dom";
import imageToAdd from './../assets/icons/Frame 10.png';
import search from './../assets/icons/search.png';

export const Home = () => {
    
    return (
        <div className="home">
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

             <div className="home-back">
              <i className='bx bx-left-arrow-alt' id="left-arrow"></i> <h1> Back </h1>
             </div>

          <div> <button id="post"> + </button></div>

          <div className="frame">
            <div className="home-group-4">
              <div className="home-group-5">
              <div className="home-group-6">

                  <div className="ellipse-1"> <img
                    alt="Ellipse"
                    src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977-4@2x.png" width="80px" height="80px"/>
                    <div> <h4 className="text-wrapper-6">Cindy Lawrence</h4> </div>
                  </div>

                </div>

                <div className="rectangle-1">
                <div> <p className="home-p">I came across this amazing library. Y’all should check it out</p> </div>
                <div> <img src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3-4.png" width="600px" height="300px"/> </div>
                </div>
                </div>

                  <div className="home-heart-icons">
                  <i className='bx bx-heart'></i> <img className="img" alt="Frame" src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg"/> <img src={imageToAdd} alt="image"/>
                  </div>
                </div>

                <div className="likes">
                <div className="text-wrapper-3">10 likes</div>
                <div className="text-wrapper-4">View all 10 comments</div>
                <div className="text-wrapper-5">10 mins ago</div>
                </div>
                
                <div className="home-group-7">
                <div className="share-wrapper">
              </div>

              <div className="home-group-8">
              <div>
                  <div className="ellipse-2"> <img
                    alt="Ellipse"
                    src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977-3@2x.png" width="80px" height="80px"/>
                    <div> <h4 className="text-wrapper-6">Katherine Cage</h4> </div>
                  </div>
                </div>

                <div className="rectangle-2">
                <div> <p className="home-p2">Me and mines!!! Do y’all agree fashion is art?</p> </div>
                <div> <img src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3-3.png" width="600px" height="300px"/> </div>
                </div>

                <div className="home-heart-icons">
                <i className='bx bx-heart' id="heart-2"> </i> <img className="img" alt="Frame" src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg"/> <img src={imageToAdd} alt="image"/>
                </div>

                <div>
                <div className="home-group-9">
                <div className="text-wrapper-3a">10 likes</div>
                <div className="text-wrapper-4a">View all 10 comments</div>
                <div className="text-wrapper-5a">10 mins ago</div>
                </div>

                </div>
                <div className="home-group-7">
                  <div className="share-wrapper">
                  </div>
                </div>
              </div>

              <div className="ellipse-3">
              <img alt="Ellipse"
                    src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977-2@2x.png" width="80px" height="80px"
                />
                  <h4 className="text-wrapper-6">Jenni Caldwell </h4>
              </div>

              <div className="home-group-11">
              <div>
                <p className="home-p3">
                  <span className="span">
                    I published my book today. Y’all should check it out and tell me your thoughts. <br />
                    The link is{" "}
                  </span>
                  <span className="text-wrapper-7">https://storycreate.tme.ggghhh.com/</span>
                </p>
                </div>
                <div> <img className="rectangle-3"
                  alt="Rectangle"
                  src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3-2.png"
                /> </div>

                <div className="home-heart-icons">
                <i className='bx bx-heart' id="heart-2"> </i> <img className="img" alt="Frame" src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg"/> <img src={imageToAdd} alt="image"/>
                </div>

                <div>
                <div className="text-wrapper-8">10 likes</div>
                <div className="text-wrapper-9">View all 10 comments</div>
                <div className="text-wrapper-10">10 mins ago</div>
                </div>

                <div className="ellipse-4">
                 <img
                    alt="Ellipse"
                    src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977-1@2x.png" width="80px" height="80px"
                  />
                  <div className="text-wrapper-6"> <h4> Johnson Peters </h4> </div>
                </div>
              </div>

              <div className="home-group-13">
                <div className="rectangle-4">
                <p className="home-p4">This is definitely one of the best books of our time!</p>
                <img src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3-1.png" />
                </div>

                <div className="home-heart-icons">
                <i className='bx bx-heart' id="heart-2"> </i> <img className="img" alt="Frame" src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg"/> <img src={imageToAdd} alt="image"/>
                </div>

                <div className="text-wrapper-11">10 likes</div>
                <div className="text-wrapper-12">View all 10 comments</div>
                <div className="text-wrapper-13">10 mins ago</div>
                <div className="group-15">
                  
                </div>
              
              </div>
              <div className="home-group-16">

                <div className="ellipse-5">
                  <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977@2x.png" width="80px" height="80px" />
                  <div className="text-wrapper-6"> <h4> Cindy Lawrence </h4> </div>
                </div>

                <div className="rectangle-5">
                <p className="home-p5">Anime is everything it thinks it is! Damn!!</p>
                <img src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3.png" />
                </div>

                <div className="home-heart-icons">
                <i className='bx bx-heart' id="heart-2"> </i> <img className="img" alt="Frame" src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg"/> <img src={imageToAdd} alt="image"/>
                </div>

                <div className="text-wrapper-14">10 likes</div>
                <div className="text-wrapper-15">View all 10 comments</div>
                <div className="text-wrapper-16">10 mins ago</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  };