import React from "react";
import search from './../assets/icons/search.png';
import PropTypes from "prop-types";
import { useReducer } from "react";
import BookOpen5 from './../assets/icons/BookOpen5.png';
import HeroiconsOutlineChevronLeft5 from './../assets/icons/HeroiconsOutlineChevronLeft5.png';
import HeroiconsOutlineChevronRight3 from './../assets/icons/HeroiconsOutlineChevronRight3.png';

interface Props {
  property1: "frame-49" | "frame-48" | "frame-50" | "frame-46" | "frame-47";
  className: any;
}

export const OngoingContests = ({ property1, className }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-46",
  });

  return (
    <div className={`ongoing-contests ${className}`}>
      <div className="group">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className={`element-removebg-wrapper ${state.property1}`}>
              <img
                className="element-removebg"
                alt="Element removebg"
                src={
                  state.property1 === "frame-47"
                    ? "https://c.animaapp.com/CxrNblAG/img/6665918-removebg-preview-1-1@2x.png"
                    : state.property1 === "frame-48"
                    ? "https://c.animaapp.com/CxrNblAG/img/6665918-removebg-preview-1-2@2x.png"
                    : state.property1 === "frame-49"
                    ? "https://c.animaapp.com/CxrNblAG/img/6665918-removebg-preview-1-3@2x.png"
                    : state.property1 === "frame-50"
                    ? "https://c.animaapp.com/CxrNblAG/img/6665918-removebg-preview-1-4@2x.png"
                    : "https://c.animaapp.com/CxrNblAG/img/6665918-removebg-preview-1-5@2x.png"
                }
              />
            </div>
            <div className="div">
              <div className="group-2">
                <img
                  className="screenshot"
                  alt="Screenshot"
                  src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-1-5@2x.png"
                />
                <div className="text-wrapper">10,000 coins</div>
              </div>
              <div className="group-3">
                <img
                  className="img"
                  alt="Screenshot"
                  src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-2-5@2x.png"
                />
                <div className="text-wrapper">5,000 coins</div>
              </div>
              <div className="group-4">
                <img
                  className="screenshot-2"
                  alt="Screenshot"
                  src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-3-5@2x.png"
                />
                <div className="text-wrapper">1,000 coins</div>
              </div>
            </div>
            <div>
              <div className="group-5">
                <button className="rules-button"> Rules <img className="open-book-icon" src={BookOpen5} />  </button>
               
              </div>
            </div>

            <a href="/ongoingcontest"> <button className="button"> Join Now </button> </a>

            <div className={`group-6 property-1-0-${state.property1}`}>
              <div className="let-your-imagination">
                {state.property1 === "frame-46" && (
                  <p className="text-wrapper-29">
                    Let your imagination soar by crafting an
                    exhilarating science fiction adventure story.
                    Transport readers to futuristic worlds, introduce
                    them to intriguing characters, and weave a
                    captivating narrative filled with suspense,
                    technology, and exploration.
                  </p>
                )}

                {state.property1 === "frame-47" && (
                  <p className="text-wrapper-29">
                    Unleash your creativity and create an electrifying comic where two original superheroes clash in an
                    epic battle for justice!
                  </p>
                )}

                {state.property1 === "frame-48" && (
                  <p className="text-wrapper-29">
                    Transport readers to a different era by writing a captivating historical fiction story. Immerse them
                    in a richly detailed world, filled with compelling characters and events that bring history to life.
                  </p>
                )}

                {state.property1 === "frame-49" && (
                  <p className="text-wrapper-29">
                    Delve into the depths of darkness and create a gripping comic that unravels the mysterious origins
                    of a supervillain, revealing the events that shaped their path to becoming a formidable force.
                  </p>
                )}

                {state.property1 === "frame-50" && (
                  <p className="text-wrapper-29">
                    Merge two beloved comic book universes and weave an extraordinary tale where iconic characters from
                    different worlds team up or face off in an epic battle that will leave readers on the edge of their
                    seats.
                  </p>
                )}
              </div>
              <div className="sci-fi-adventure">
                {state.property1 === "frame-46" && <>Sci-Fi Adventure</>}

                {state.property1 === "frame-47" && <>Superhero Showdown</>}

                {state.property1 === "frame-48" && <>Historical Fiction</>}

                {state.property1 === "frame-49" && <>Villain Origin</>}

                {state.property1 === "frame-50" && <>Comic Crossover</>}
              </div>
            </div>
          </div>
        </div>
        <div className="group-7">
          <div
            className={`heroicons-outline-wrapper property-1-1-${state.property1}`}
            onClick={() => {
              dispatch("click_252");
            }}
          >
            <button className="icon-left"> <img src={HeroiconsOutlineChevronLeft5}
              className="heroicons-outline"
              color={state.property1 === "frame-46" ? "#030003" : "#FFFEFD"}
              
            /> </button>
          </div>
          <div
            className={`heroicons-outline-chevron-right-3-wrapper property-1-2-${state.property1}`}
            onClick={() => {
              dispatch("click");
            }}
          >
            <button className="icon-right"> <img src={HeroiconsOutlineChevronRight3}
              className="heroicons-outline"
              color={state.property1 === "frame-50" ? "#030003" : "#FFFEFD"}
              
            /> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "frame-46") {
    switch (action) {
      case "click":
        return {
          property1: "frame-47",
        };
    }
  }

  if (state.property1 === "frame-47") {
    switch (action) {
      case "click_252":
        return {
          property1: "frame-46",
        };

      case "click":
        return {
          property1: "frame-48",
        };
    }
  }

  if (state.property1 === "frame-48") {
    switch (action) {
      case "click_252":
        return {
          property1: "frame-47",
        };

      case "click":
        return {
          property1: "frame-49",
        };
    }
  }

  if (state.property1 === "frame-49") {
    switch (action) {
      case "click_252":
        return {
          property1: "frame-48",
        };

      case "click":
        return {
          property1: "frame-50",
        };
    }
  }

  if (state.property1 === "frame-50") {
    switch (action) {
      case "click_252":
        return {
          property1: "frame-49",
        };
    }
  }

  return state;
}

OngoingContests.propTypes = {
  property1: PropTypes.oneOf(["frame-49", "frame-48", "frame-50", "frame-46", "frame-47"]),
};

export const Contest = (): JSX.Element => {
  return (
    <div className="contest">
      <div className="home-group">
            <div>
              <div>
                <div className="text-wrapper">
                <button className="contest-search"> Search </button> </div>
                <div className="contest-search-icon"> <img src={search} width="15px" /> </div>
              </div>
            </div>
          </div>

          <a href="/wallet"> <div className="home-back">
               <i className='bx bx-left-arrow-alt' id="left-arrow"></i> <h1> Back </h1> 
             </div> </a>

      <div className="group-10">
        <div className="text-wrapper-6">Ongoing Contest</div>
        <OngoingContests className="ongoing-contests-instance" property1="frame-46" />
      </div>
      <div className="group-11">
        <div className="text-wrapper-6">Upcoming Contest</div>
        <div className="frame">
          <div className="group-12">
            <div className="upcoming-contest">
              <div className="overlap-group-2">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://c.animaapp.com/CxrNblAG/img/rectangle-17854@2x.png"
                />
                <div className="text-wrapper-7">Sidekick Stories</div>
                <p className="p">
                  Explore the untold stories of unsung heroes and bring their courageous adventures to life in a comic
                  that celebrates the power of loyalty and friendship.
                </p>
                <div className="text-wrapper-8">September 1 - 30</div>
                <div className="group-13">
                  <div className="group-14">
                    <img
                      className="screenshot-3"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-1-11@2x.png"
                    />
                    <div className="text-wrapper-9">10,000 coins</div>
                  </div>
                  <div className="group-15">
                    <img
                      className="screenshot-4"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-2-11@2x.png"
                    />
                    <div className="text-wrapper-9">5,000 coins</div>
                  </div>
                  <div className="group-16">
                    <img
                      className="screenshot-5"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-3-11@2x.png"
                    />
                    <div className="text-wrapper-9">1,000 coins</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://c.animaapp.com/CxrNblAG/img/rectangle-17854-1@2x.png"
                />
                <div className="text-wrapper-7">Mystery and Suspense</div>
                <p className="p">
                  Create a thrilling mystery or suspense story that keeps readers on the edge of their seats. Craft a
                  compelling plot, intriguing characters, and unexpected twists that will leave readers guessing until
                  the very end.
                </p>
                <div className="text-wrapper-10">September 1 - 30</div>
                <div className="group-17">
                  <div className="group-14">
                    <img
                      className="screenshot-3"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-1-11@2x.png"
                    />
                    <div className="text-wrapper-9">10,000 coins</div>
                  </div>
                  <div className="group-15">
                    <img
                      className="screenshot-4"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-2-11@2x.png"
                    />
                    <div className="text-wrapper-9">5,000 coins</div>
                  </div>
                  <div className="group-16">
                    <img
                      className="screenshot-5"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-3-11@2x.png"
                    />
                    <div className="text-wrapper-9">1,000 coins</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="upcoming-contest-2">
              <div className="overlap-group-2">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://c.animaapp.com/CxrNblAG/img/rectangle-17854-2@2x.png"
                />
                <div className="text-wrapper-7">Imaginary World</div>
                <p className="p">
                  Channel your creativity and use your imagination to create a vivid and immersive fictional world
                  filled with unique characters, landscapes, and adventures.
                </p>
                <div className="text-wrapper-8">September 1 - 30</div>
                <div className="group-13">
                  <div className="group-14">
                    <img
                      className="screenshot-3"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-1-11@2x.png"
                    />
                    <div className="text-wrapper-9">10,000 coins</div>
                  </div>
                  <div className="group-15">
                    <img
                      className="screenshot-4"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-2-11@2x.png"
                    />
                    <div className="text-wrapper-9">5,000 coins</div>
                  </div>
                  <div className="group-16">
                    <img
                      className="screenshot-5"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-3-11@2x.png"
                    />
                    <div className="text-wrapper-9">1,000 coins</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="upcoming-contest-3">
              <div className="overlap-group-2">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://c.animaapp.com/CxrNblAG/img/rectangle-17854-3@2x.png"
                />
                <div className="text-wrapper-7">Time Travel Tales</div>
                <p className="p">
                  Dive into the thrilling world of time travel and craft a captivating comic that takes readers on an
                  exhilarating journey through different eras and dimensions.
                </p>
                <div className="text-wrapper-8">September 1 - 30</div>
                <div className="group-13">
                  <div className="group-14">
                    <img
                      className="screenshot-3"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-1-11@2x.png"
                    />
                    <div className="text-wrapper-9">10,000 coins</div>
                  </div>
                  <div className="group-15">
                    <img
                      className="screenshot-4"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-2-11@2x.png"
                    />
                    <div className="text-wrapper-9">5,000 coins</div>
                  </div>
                  <div className="group-16">
                    <img
                      className="screenshot-5"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-3-11@2x.png"
                    />
                    <div className="text-wrapper-9">1,000 coins</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="upcoming-contest-4">
              <div className="overlap-group-2">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://c.animaapp.com/CxrNblAG/img/rectangle-17854-4@2x.png"
                />
                <div className="text-wrapper-7">Flash Fiction</div>
                <p className="p">
                  Challenge yourself to craft a complete and captivating story in just a few hundred words, showcasing
                  your storytelling skills.
                </p>
                <div className="text-wrapper-11">September 1 - 30</div>
                <div className="group-18">
                  <div className="group-14">
                    <img
                      className="screenshot-3"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-1-11@2x.png"
                    />
                    <div className="text-wrapper-9">10,000 coins</div>
                  </div>
                  <div className="group-15">
                    <img
                      className="screenshot-4"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-2-11@2x.png"
                    />
                    <div className="text-wrapper-9">5,000 coins</div>
                  </div>
                  <div className="group-16">
                    <img
                      className="screenshot-5"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-3-11@2x.png"
                    />
                    <div className="text-wrapper-9">1,000 coins</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="upcoming-contest-5">
              <div className="overlap-group-2">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://c.animaapp.com/CxrNblAG/img/rectangle-17854-5@2x.png"
                />
                <div className="text-wrapper-7">Genre Mashup</div>
                <p className="p">
                  Combine two or more genres, such as sci-fi and romance or fantasy and mystery, to create a captivating
                  and original story.
                </p>
                <div className="text-wrapper-11">September 1 - 30</div>
                <div className="group-18">
                  <div className="group-14">
                    <img
                      className="screenshot-3"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-1-11@2x.png"
                    />
                    <div className="text-wrapper-9">10,000 coins</div>
                  </div>
                  <div className="group-15">
                    <img
                      className="screenshot-4"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-2-11@2x.png"
                    />
                    <div className="text-wrapper-9">5,000 coins</div>
                  </div>
                  <div className="group-16">
                    <img
                      className="screenshot-5"
                      alt="Screenshot"
                      src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-3-11@2x.png"
                    />
                    <div className="text-wrapper-9">1,000 coins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
