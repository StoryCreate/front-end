import rectangle from './../assets/images/rectangle.png';
import eye from './../assets/icons/eye.png';
import romance from './../assets/images/romance.png';
import humor from './../assets/images/humor.png';
import mystery from './../assets/images/mystery.png';
import search from './../assets/icons/search.png';

export const Dashboard = () => {
    return (
        <div className="dashboard">
          <div className="search-create">
           <button className="dashboard-search"> Search </button>
           <div className="dashboard-search-icon"> <img src={search} width="15px" /> </div>
           <button className="create-new-story"> + Create a new story </button>
          </div>

          <div>
            <h2 className="trending-now"> Trending Now </h2>
            
            <div className="dashboard-group-1">

            <div>
             <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-25@2x.png"
                  height="457px" width="374px"
             />

             <div>
              <h3 className="dashboard-title"> THE FLATSHARE </h3>
              <p className="dashboard-author"> By Beth O'Leary </p>
               <div className="views">
               <img src={eye} />
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
              <img src={rectangle} height="457px" />

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
              </div>
             </div>

             </div>
            </div>

            <div>
             <h2 className="exciting-genre"> Some Exciting Genre You Can Check Out </h2>

             <div className="dashboard-group-5">
             <img src={romance} height="457px" width="374px" />
             <img src={humor} height="457px" width="374px" />
             <img src={mystery} height="457px" width="374px" />
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
                </div>
               </div>
             </div>
            </div>
            
          </div>
        </div>
  );
};