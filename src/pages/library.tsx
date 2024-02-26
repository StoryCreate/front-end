import React from "react";
import { useRef, useState } from "react";
import vanishing from './../assets/images/vanishing.png'
import whispered from './../assets/images/whispered.png'
import eternal from './../assets/images/eternal.png'
import eye from './../assets/icons/eye.png';
import swept from './../assets/images/swept.png'
import moonlight from './../assets/images/moonlight.png'
import hidden from './../assets/images/hidden.png'
import enchanted from './../assets/images/enchanted.png'
import search from './../assets/icons/search.png';

export const Library = () => {
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
        <div className="library">
          <div className="library-search-create">
          <a href="/search"> <button className="library-search"> Search </button> </a>
           <img src={search} width="15px" className="library-search-icon" />
          </div>

          <div ref={dropdownRef}>
          <div className="creating-story"> <a onClick={e=>handleDropDownFocus(open)}> <button className="create-new-story"> + Create a new story </button> </a>
           <div className="create-story">
            <div className="create">
                { open && (
                <dl>
                <a id="more-Create-one-myself"> <h5 className="Create-one-myself"> Create one myself </h5> <button className="select-button"> O </button> </a>
                 <a id="more-Hire-a-Creator"> <h5 className="Hire-a-Creator"> Hire a Creator </h5> <button className="select-button"> O </button> </a>
                 <a id="more-Find-who-hiring"> <h5 className="Find-who-hiring"> Find who's hiring </h5> <button className="select-button"> O </button> </a>
                 <a id="more-Create-for-StoryCreate"> <h5 className="Create-for-StoryCreate"> Create for StoryCreate Platform </h5> <button className="select-button"> O </button> </a>
                 <a href="/createnewstory" id="more-creators"> <h5 className="continue"> Continue </h5> </a>
                </dl>
                )}
              </div>
             </div>
            </div>
            </div>

          <div>
            <h2 className="keep-reading"> Keep Reading </h2>
            
            <div className="library-group-1">
             <div>
             <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-25@2x.png"
                  height="457px" width="374px"
             />

             <div>
              <h3 className="library-title-1"> THE FLATSHARE </h3>
              <p className="library-author-1"> By Beth O'Leary </p>
             </div>

             <button className="library-continue-reading"> Continue Reading</button>
             </div>

             <div>
             <img
                  className="rectangle-6"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-23@2x.png"
                  height="457px" width="374px"
             />

             <div>
              <h3 className="library-title-2"> THE TESTAMENTS </h3>
              <p className="library-author-2"> By Margaret Atwood </p>
             </div>

             <button className="library-continue-reading"> Continue Reading</button>
             </div>

             <div>
             <img className="rectangle-7" src={vanishing} height="457px" />

             <div>
              <h3 className="library-title-3"> THE VANISHING HALF </h3>
              <p className="library-author-3"> By Brit Bennett </p>
             </div>

             <button className="library-continue-reading"> Continue Reading</button>
             </div>
             </div>
          </div>

          <div>
           <h2 className="library-continue-writing-header"> Continue Writing Your Amazing Story</h2>

           <div className="library-group-2">
            <div>
            <img className="rectangle-7" src={whispered} height="457px" width="374px"/>

            <p className="p-1"> Whispered Love : A Tale of passion </p>
            <p className="p-2"> and Secrets</p>
            <button className="library-continue-writing"> Continue Writing</button>
            </div>

            <div>
            <img className="rectangle-7" src={eternal} height="457px" />

            <p className="p-1b"> Eternal Embrace : Love Across </p>
            <p className="p-2b"> Time </p>
            <button className="library-continue-writing"> Continue Writing</button>
            </div>
           </div>

           <div>
            <h2 className="library-saved-books"> Saved Books </h2>

            <div className="library-group-3">

              <div>
              <img
                  className="rectangle-8"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-26@2x.png"
                  height="457px" width="374px"
              />

             <div>
              <h3 className="library-title-4"> BEACH READ </h3>
              <p className="library-author-4"> By Emily Henry </p>
               <div className="views">
               <img src={eye} />
               <p> 35K </p>
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
              <h3 className="library-title-5"> THE FLATSHARE </h3>
              <p className="library-author-5"> By Beth O'Leary </p>
               <div className="views">
               <img src={eye} />
               <p> 35K </p>
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
              <h3 className="library-title-6"> THE TESTAMENTS </h3>
              <p className="library-author-6"> By Margaret Atwood </p>
               <div className="views">
               <img src={eye} />
               <p> 35K </p>
               </div>
              </div>
              </div>

            </div>
           </div>

           <div>
            <h2 className="library-books-ready"> Books Ready To Be Published</h2>

            <div className="library-group-4">
            <div>
            <img src={swept} height="457px" width="374px" className="books-ready"/>
            </div>

            <div>
            <h3 className="library-title-7"> SWEPT AWAY </h3>
            <p className="library-author-7"> By Jenni Caldwell</p>
            <button className="library-publish-now"> Publish Now</button>
            </div>
            </div>

           </div>

           <div>
            <h2 className="library-submitted"> Submitted For Review</h2>

            <div className="library-group-5">
            <div>
            <img src={moonlight} height="457px" width="374px" className="submitted"/>
            </div>

            <div>
            <h3 className="library-title-8"> MOONLIGHT PROMISES </h3>
            <p className="library-author-8"> By Jenni Caldwell</p>
            </div>
            </div>

           </div>

           <div>
             <h2 className="library-read-again"> Read Again </h2>

             <div className="library-group-6">
              <div>
                <img
                  className="dashboard-rectangle-5"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-31@2x.png"
                  height="457px" width="374px"
                />

                <div>
                 <h3 className="library-title-9"> THE GIVERS OF STARS </h3>
                 <p className="library-author-9"> By Jojo Moyes </p>
                 <div className="views">
                 <img src={eye} />
                 <p> 1M </p>
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
                 <h3 className="library-title-10"> THE KISS QUOTIENT </h3>
                 <p className="library-author-10"> By Helen Hoang </p>
                 <div className="views">
                 <img src={eye} />
                 <p> 500K </p>
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
                 <h3 className="library-title-11"> THE WEDDING DAY </h3>
                 <p className="library-author-11"> By Jasmine Guillory </p>
                 <div className="views">
                 <img src={eye} />
                 <p> 800K </p>
                 </div>
                </div>
               </div>

             </div>
            </div>

          <div>
          <h2 className="library-published"> Published Books</h2>

            <div className="library-group-7">
            <div>
            <img className="rectangle-7" src={hidden} height="457px" width="374px"/>

            <h3 className="library-title-12"> THE GIVERS OF STARS </h3>
            <p className="library-author-12"> By Jenni Caldwell </p>
            <div className="views">
              <img src={eye} />
              <p> 1M </p>
            </div>
            </div>

            <div>
            <img className="rectangle-7" src={enchanted} height="457px" width="374px"/>
            <h3 className="library-title-13"> ENCHANTED HEARTS : A </h3>
            <h3 className="library-title-13a"> SPELLBINDING LOVE STORY </h3>
            <p className="library-author-13"> By Jenni Caldwell </p>
            <div className="views">
              <img src={eye} />
              <p> 500K </p>
            </div>
            </div>

            </div>
            </div>
          
          </div>

        </div>
    )
}