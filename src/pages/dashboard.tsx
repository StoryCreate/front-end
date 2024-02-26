import React from "react";
import { useEffect, useRef, useState } from "react";
import rectangle from './../assets/images/rectangle.png';
import eye from './../assets/icons/eye.png';
import romance from './../assets/images/romance.png';
import humor from './../assets/images/humor.png';
import mystery from './../assets/images/mystery.png';
import search from './../assets/icons/search.png';
import love from './../assets/icons/love.png';
import share_icon from './../assets/icons/share_icon.png';
import star from './../assets/icons/star.png';

export const Dashboard = () => {
  const [open, setOpen] = useState (false);
    const dropdownRef = useRef<HTMLDivElement>(null)
    const handleDropDownFocus=(state: boolean) => {
        setOpen(!state);
    };

    const handleClickOutsideDropdown =(e:any)=>{
      if(open && !dropdownRef.current?. contains(e.target as Node)){
        setOpen(false)
  
      }
    }
  
    window.addEventListener("click",handleClickOutsideDropdown)
    
    return (
        <div className="dashboard">
          <div className="search-create">
          <a href="/search"> <button className="dashboard-search"> Search </button> </a>
           <div className="dashboard-search-icon"> <img src={search} width="15px" /> </div>
          </div>

          <div ref={dropdownRef}>
          <div className="creating-story"> <a onClick={e=>handleDropDownFocus(open)}> <button className="create-new-story"> + Create a new story </button> </a>
           <div className="create-story">
            <div className="create">
                { open && (
                <dl>
                <a id="more-Create-one-myself"> <h5 className="Create-one-myself"> Create one myself </h5> <input type="radio" name="select-button"/> </a>
                 <a id="more-Hire-a-Creator"> <h5 className="Hire-a-Creator"> Hire a Creator </h5> <input type="radio" name="select-button"/> </a>
                 <a href="/findgig" id="more-Find-who-hiring"> <h5 className="Find-who-hiring"> Find who's hiring </h5> <input type="radio" name="select-button"/> </a>
                 <a id="more-Create-for-StoryCreate"> <h5 className="Create-for-StoryCreate"> Create for StoryCreate Platform </h5> <input type="radio" name="select-button"/> </a>
                 <a href="/createnewstory" id="more-creators"> <h5 className="continue"> Continue </h5> </a>
                </dl>
                )}
              </div>
             </div>
            </div>
            </div>

          <div>
            <h2 className="trending-now"> Trending Now </h2>
            
            <div className="dashboard-group-1">

            <div>
             <a href="/reading"> <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-25@2x.png"
                  height="457px" width="374px"
             /> </a>

             <div>
              <h3 className="dashboard-title"> THE FLATSHARE </h3>
              <p className="dashboard-author"> By Beth O'Leary </p>
               <div className="views">
               <img src={eye} alt=""/>
               <p> 35K </p>
               </div>
             </div>
            </div>
            
            <div>
             <img
                  className="rectangle-8"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-26@2x.png"
                  height="457px" width="374px"
             />

            <div>
              <h3 className="dashboard-title-2"> BEACH READ </h3>
              <p className="dashboard-author-2"> By Emily Henry </p>
               <div className="views">
               <img src={eye} />
               <p> 35K </p>
               </div>
            </div>

            </div>
              <div>
              <img className="rectangle-8" src={rectangle} height="457px" width="374px" />

              <h3 className="dashboard-title-3"> THE SILENT PATIENT </h3>
              <p className="dashboard-author-3"> By Alex Michaelides </p>
              <div className="views">
               <img src={eye} />
               <p> 35K </p>
               </div>
              </div>
            </div>
            
            <div>
             <h2 className="sponsored-posts"> Sponsored Posts </h2>

             <div className="dashboard-group-2">
             <div>
              <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-9@2x.png"
                  height="457px" width="374px"
              />

              <div>
               <h3 className="dashboard-title-4"> PERSEPOLIS </h3>
               <p className="dashboard-author-4"> By Marjane Satrapi </p>
               <div className="views">
               <img src={eye} />
               <p> 800K </p>
               </div>
               <div>
                <img src={love} className="like" />
                <img src={share_icon} className="share" />
                <button className="plus"> + </button>
               </div>
               <div className="star-rating">
               <div className="star-group">
                <img src={star} className="star" />
                <img src={star} className="star" />
                <img src={star} className="star" />
                <img src={star} className="star" />
                <img src={star} className="star" />
               </div>
              <div className="five-rating">5/5 ratings</div>
              </div>
              </div>
             </div>

             <div>
               <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-19@2x.png"
                  height="457px" width="374px"
               />
                
                <div>
                 <h3 className="dashboard-title-5"> THE GIRL ON THE TRAIN </h3>
                 <p className="dashboard-author-5"> By Paula Hawkins </p>
                 <div className="views">
                 <img src={eye} />
                 <p> 800K </p>
                 </div>
                <div>
                <img src={love} className="like-2" />
                <img src={share_icon} className="share-2" />
                <button className="plus-2"> + </button>
                </div>
                <div className="star-rating-2">
                <div className="star-group">
                <img src={star} className="star" />
                <img src={star} className="star" />
                <img src={star} className="star" />
                <img src={star} className="star" />
                <img src={star} className="star" />
                 </div>
                 <div className="five-rating">5/5 ratings</div>
                 </div>
                </div>
             </div>
              
              <div>
                <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-7@2x.png"
                  height="457px" width="374px"
                />

                <div>
                 <h3 className="dashboard-title-6"> THE SANDMAN </h3>
                 <p className="dashboard-author-6"> By Neil Gaiman </p>
                 <div className="views">
                 <img src={eye} />
                 <p> 35K </p>
                 </div>
                 <div>
                  <img src={love} className="like-3" />
                  <img src={share_icon} className="share-3" />
                  <button className="plus-3"> + </button>
                  </div>
                  <div className="star-rating-3">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
                </div>
              </div>
             </div>
            </div>
            
            <div>
             <h2 className="readers-favourite"> Readers' Favourite </h2>

             <div className="dashboard-group-3">
              <div>
                <img
                  className="dashboard-rectangle-5"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-31@2x.png"
                  height="457px" width="374px"
                />

                <div>
                 <h3 className="dashboard-title-7"> THE GIVERS OF STARS </h3>
                 <p className="dashboard-author-7"> By Jojo Moyes </p>
                 <div className="views">
                 <img src={eye} />
                 <p> 1M </p>
                 </div>
                 <div>
                  <img src={love} className="like-4" />
                  <img src={share_icon} className="share-4" />
                  <button className="plus-4"> + </button>
                  </div>
                  <div className="star-rating-4">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
                </div>
               </div>

               <div>
                <img
                  className="dashboard-rectangle-6"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-30@2x.png"
                  height="457px" width="374px"
                />

                <div>
                 <h3 className="dashboard-title-8"> THE KISS QUOTIENT </h3>
                 <p className="dashboard-author-8"> By Helen Hoang </p>
                 <div className="views">
                 <img src={eye} />
                 <p> 500K </p>
                 </div>
                 <div>
                  <img src={love} className="like-5" />
                  <img src={share_icon} className="share-5" />
                  <button className="plus-5"> + </button>
                  </div>
                  <div className="star-rating-5">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
                </div>
               </div>

               <div>
                <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-28@2x.png"
                  height="457px" width="374px"
                />

                <div>
                 <h3 className="dashboard-title-9"> THE WEDDING DAY </h3>
                 <p className="dashboard-author-9"> By Jasmine Guillory </p>
                 <div className="views">
                 <img src={eye} />
                 <p> 800K </p>
                 </div>
                 <div>
                  <img src={love} className="like-6" />
                  <img src={share_icon} className="share-6" />
                  <button className="plus-6"> + </button>
                  </div>
                  <div className="star-rating-6">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
                </div>
               </div>

             </div>
            </div>

            <div>
            <h2 className="highly-rated"> Highly Rated Books </h2>

             <div className="dashboard-group-4">
             <div>
              <img
                  className="rectangle-8"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-26@2x.png"
                  height="457px" width="374px"
              />

              <div>
               <h3 className="dashboard-title-10"> BEACH READ </h3>
               <p className="dashboard-author-10"> By Emily Henry </p>
                <div className="views">
                <img src={eye} />
                <p> 35K </p>
                </div>
                <div>
                  <img src={love} className="like-7" />
                  <img src={share_icon} className="share-7" />
                  <button className="plus-7"> + </button>
                  </div>
                  <div className="star-rating-7">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
              </div>
             </div>

             <div>
             <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-25@2x.png"
                  height="457px" width="374px"
             />

             <div>
              <h3 className="dashboard-title-11"> THE FLATSHARE </h3>
              <p className="dashboard-author-11"> By Beth O'Leary </p>
               <div className="views">
               <img src={eye} />
               <p> 35K </p>
               </div>
               <div>
                  <img src={love} className="like-8" />
                  <img src={share_icon} className="share-8" />
                  <button className="plus-8"> + </button>
                  </div>
                  <div className="star-rating-8">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
              </div>
             </div>

             <div>
             <img
                  className="rectangle-6"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-23@2x.png"
                  height="457px" width="374px"
             />

             <div>
              <h3 className="dashboard-title-12"> THE TESTAMENTS </h3>
              <p className="dashboard-author-12"> By Margaret Atwood </p>
               <div className="views">
               <img src={eye} />
               <p> 35K </p>
               </div>
               <div>
                  <img src={love} className="like-9" />
                  <img src={share_icon} className="share-9" />
                  <button className="plus-9"> + </button>
                  </div>
                  <div className="star-rating-9">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
              </div>
             </div>

             </div>
            </div>

            <div>
             <h2 className="exciting-genre"> Some Exciting Genre You Can Check Out </h2>

             <div className="dashboard-group-5">
             <img className="rectangle-7"  src={romance} height="457px" width="374px" />
             <img className="rectangle-7"  src={humor} height="457px" width="374px" />
             <img className="rectangle-7"  src={mystery} height="457px" width="374px" />
             </div>

            </div>
            
            <div>
             <h2 className="Audio-books"> Audio Books You Might Like </h2>

             <div className="dashboard-group-6">
               <div>
                <img
                  className="rectangle-8"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-21@2x.png"
                  height="457px" width="374px"
                />

               <div>
               <h3 className="dashboard-title-13"> EDUCATED </h3>
               <p className="dashboard-author-13"> By Tara Westover </p>
                <div className="views">
                <img src={eye} />
                <p> 35K </p>
                </div>
                <div>
                  <img src={love} className="like-10" />
                  <img src={share_icon} className="share-10" />
                  <button className="plus-10"> + </button>
                  </div>
                  <div className="star-rating-10">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
               </div>
               </div>

               <div>
                <img
                  className="rectangle-6"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-20@2x.png"
                  height="457px" width="374px"
                />

               <div>
               <h3 className="dashboard-title-14"> BECOMING </h3>
               <p className="dashboard-author-14"> By Michelle Obama </p>
               <div className="views">
               <img src={eye} />
               <p> 35K </p>
               </div>
               <div>
                  <img src={love} className="like-11" />
                  <img src={share_icon} className="share-11" />
                  <button className="plus-11"> + </button>
                  </div>
                  <div className="star-rating-11">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
               </div>
               </div>

               <div>
                <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-18@2x.png"
                  height="457px" width="374px"
                />

               <div>
               <h3 className="dashboard-title-15"> THE ALCHEMIST </h3>
               <p className="dashboard-author-15"> By Paulo Coelho </p>
               <div className="views">
               <img src={eye} />
               <p> 35K </p>
               </div>
               <div>
                  <img src={love} className="like-12" />
                  <img src={share_icon} className="share-12" />
                  <button className="plus-12"> + </button>
                  </div>
                  <div className="star-rating-12">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
               </div>
               </div>
             </div>
            </div>

            <div>
             <h2 className="anime-stories"> Anime Stories Picked For You </h2>

             <div className="dashboard-group-7">
               <div>
                <img
                  className="rectangle-8"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-16@2x.png"
                  height="457px" width="374px"
                />

                <div>
                <h3 className="dashboard-title-16"> ATTACK ON TITAN </h3>
                <p className="dashboard-author-16"> By Hajime Isayama </p>
                <div className="views">
                <img src={eye} />
                <p> 35K </p>
                </div>
                <div>
                  <img src={love} className="like-13" />
                  <img src={share_icon} className="share-13" />
                  <button className="plus-13"> + </button>
                  </div>
                  <div className="star-rating-13">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
               </div>
               </div>

               <div>
                <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-15@2x.png"
                  height="457px" width="374px"
                />

                <div>
                <h3 className="dashboard-title-17"> FULLMETA ALCHEMIST </h3>
                <p className="dashboard-author-17"> By Hiromu Arakawa </p>
                <div className="views">
                <img src={eye} />
                <p> 35K </p>
                </div>
                <div>
                  <img src={love} className="like-14" />
                  <img src={share_icon} className="share-14" />
                  <button className="plus-14"> + </button>
                  </div>
                  <div className="star-rating-14">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
                </div>
               </div>

               <div>
                <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-13@2x.png"
                  height="457px" width="374px"
                />

                <div>
                 <h3 className="dashboard-title-18"> DEATH NOTE </h3>
                 <p className="dashboard-author-18"> By Takeshi Obata </p>
                 <div className="views">
                 <img src={eye} />
                 <p> 35K </p>
                 </div>
                 <div>
                  <img src={love} className="like-15" />
                  <img src={share_icon} className="share-15" />
                  <button className="plus-15"> + </button>
                  </div>
                  <div className="star-rating-15">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
                 </div>
               </div>
             </div>
            </div>
            
            <div>
             <h2 className="graphic-novels"> Check Out These Graphic Novels </h2>

             <div className="dashboard-group-8">
               <div>
                <img
                  className="rectangle-8"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-11@2x.png"
                  height="457px" width="374px"
                />

                <div>
                 <h3 className="dashboard-title-19"> WATCHMEN </h3>
                 <p className="dashboard-author-19"> By Alan Moore <span className="dashboard-and"> & </span> Dave Gibbons </p>
                 <div className="views">
                 <img src={eye} />
                 <p> 35K </p>
                 </div>
                 <div>
                  <img src={love} className="like-16" />
                  <img src={share_icon} className="share-16" />
                  <button className="plus-16"> + </button>
                  </div>
                  <div className="star-rating-16">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
                </div>
               </div>

               <div>
                <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-10@2x.png"
                  height="457px" width="374px"
                />

                <div>
                 <h3 className="dashboard-title-20"> SAGA </h3>
                 <p className="dashboard-author-20"> By Brian K. Vaughan <span className="dashboard-and"> & </span> Fiona Staples </p>
                 <div className="views">
                 <img src={eye} />
                 <p> 35K </p>
                 </div>
                 <div>
                  <img src={love} className="like-17" />
                  <img src={share_icon} className="share-17" />
                  <button className="plus-17"> + </button>
                  </div>
                  <div className="star-rating-17">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
                </div>
               </div>

               <div>
                <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-8@2x.png"
                  height="457px" width="374px"
                />

                <div>
                <h3 className="dashboard-title-21"> MAUS </h3>
                <p className="dashboard-author-21"> By Art Spiegelman </p>
                <div className="views">
                <img src={eye} />
                <p> 35K </p>
                </div>
                <div>
                  <img src={love} className="like-18" />
                  <img src={share_icon} className="share-18" />
                  <button className="plus-18"> + </button>
                  </div>
                  <div className="star-rating-18">
                  <div className="star-group">
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  <img src={star} className="star" />
                  </div>
                  <div className="five-rating">5/5 ratings</div>
                  </div>
                </div>
               </div>
             </div>
            </div>
            
          </div>
        </div>
  );
};