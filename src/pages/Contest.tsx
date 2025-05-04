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
    <div className={`h-full w-full ${className}`}>
      <div className="h-[1200px] lg:h-[700px]">
        <div className="h-full w-full">
          <div className="flex flex-col lg:flex-row gap-10 rounded-xl bg-blue-300 h-[1050px] lg:h-[500px] p-10">
            <div>
              <div className="mt-6">
                <div className="text-3xl text-left font-semibold text-gray-900">
                  {state.property1 === "frame-46" && <>Sci-Fi Adventure</>}
                  {state.property1 === "frame-47" && <>Superhero Showdown</>}
                  {state.property1 === "frame-48" && <>Historical Fiction</>}
                  {state.property1 === "frame-49" && <>Villain Origin</>}
                  {state.property1 === "frame-50" && <>Comic Crossover</>}
                </div>
                <div className="mb-4 mt-10 text-left font-medium text-gray-800 text-base leading-relaxed">
                  {state.property1 === "frame-46" && (
                    <p>
                      Let your imagination soar by crafting an exhilarating science fiction adventure story.
                      Transport readers to futuristic worlds, introduce them to intriguing characters, and
                      weave a captivating narrative filled with suspense, technology, and exploration.
                    </p>
                  )}

                  {state.property1 === "frame-47" && (
                    <p>
                      Unleash your creativity and create an electrifying comic where two original superheroes
                      clash in an epic battle for justice!
                    </p>
                  )}

                  {state.property1 === "frame-48" && (
                    <p>
                      Transport readers to a different era by writing a captivating historical fiction story.
                      Immerse them in a richly detailed world, filled with compelling characters and events
                      that bring history to life.
                    </p>
                  )}

                  {state.property1 === "frame-49" && (
                    <p>
                      Delve into the depths of darkness and create a gripping comic that unravels the
                      mysterious origins of a supervillain, revealing the events that shaped their path to
                      becoming a formidable force.
                    </p>
                  )}

                  {state.property1 === "frame-50" && (
                    <p>
                      Merge two beloved comic book universes and weave an extraordinary tale where iconic
                      characters from different worlds team up or face off in an epic battle that will
                      leave readers on the edge of their seats.
                    </p>
                  )}
                </div>
              </div>
              <div className="flex mt-10 space-x-6">
                <div className="flex flex-col items-center">
                  <img
                    className="h-12 w-12 object-cover"
                    alt="Screenshot"
                    src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-1-5@2x.png"
                  />
                  <div className="text-base font-medium text-gray-900">10,000 coins</div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    className="h-12 w-12 object-cover"
                    alt="Screenshot"
                    src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-2-5@2x.png"
                  />
                  <div className="text-base font-medium text-gray-900">5,000 coins</div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    className="h-12 w-12 object-cover"
                    alt="Screenshot"
                    src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-3-5@2x.png"
                  />
                  <div className="text-base font-medium text-gray-900">1,000 coins</div>
                </div>
              </div>
            </div>
            <div className={`${state.property1}`}>
              <div className="flex flex-col gap-6 justify-end items-end lg:pr-20">
                <div className="mt-4">
                  <button className="flex items-center space-x-2 rounded-full bg-gray-300 px-6 py-2 text-sm font-semibold cursor-pointer">
                    <span>Rules</span>
                    <img className="h-5 w-5" src={BookOpen5} alt="Open book icon" />
                  </button>
                </div>
                <img
                  className="object-cover w-72 h-72"
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
              <a href="/ongoingcontest">
                <button className="mt-4 left-0 rounded-full bg-primary px-8 py-3 text-white font-bold hover:bg-opacity-90 transition cursor-pointer">
                  Join Now
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-6 -mt-32 lg:-mt-44 justify-center">
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch("click_252");
            }}
          >
            <button className="p-2 rounded-full cursor-pointer hover:bg-gray-400">
              <img
                src={HeroiconsOutlineChevronLeft5}
                className="h-4 w-4"
                alt="Left arrow"
                color={state.property1 === "frame-46" ? "#030003" : "#FFFEFD"}
              />
            </button>
          </div>
          <div
            className="rounded-full"
            onClick={() => {
              dispatch("click");
            }}
          >
            <button className="p-2 rounded-full bg-primary cursor-pointer hover:bg-opacity-80">
              <img
                src={HeroiconsOutlineChevronRight3}
                className="h-4 w-4"
                alt="Right arrow"
                color={state.property1 === "frame-50" ? "#8b008b" : "#FFFEFD"}
              />
            </button>
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
    <div className="bg-white w-11/12 max-w-screen-xl mx-auto h-full pb-14 overflow-hidden">
      <div className="flex justify-between pt-24">
        <a href="/wallet">
          <div className="flex items-center gap-2 ml-4 cursor-pointer">
            <i className='bx bx-left-arrow-alt text-2xl text-primary' id="left-arrow"></i>
            <h3 className="text-primary text-xl font-semibold">Back</h3>
          </div>
        </a>
        <div className="flex items-center gap-4 px-4">
          <button className="rounded-full bg-gray-300 px-12 py-3 text-base cursor-pointer">Search</button>
          <img src={search} width="15px" alt="Search icon" className="absolute ml-5" />
        </div>
      </div>

      <div className="mt-20 px-4">
        <div className="text-2xl text-left font-bold mb-6">Ongoing Contest</div>
        <OngoingContests className="relative top-10" property1="frame-46" />
      </div>

      <div className="mt-4 px-4">
        <div className="text-2xl font-bold text-left mb-6">Upcoming Contest</div>
        <div className="overflow-x-scroll">
          <div className="flex space-x-6 w-max">
            <div className="bg-white shadow-md rounded-lg w-80 lg:w-[420px] h-[729px] flex-shrink-0 relative">
              <img
                className="h-[323px] w-full object-cover rounded-t-lg"
                alt="Rectangle"
                src="https://c.animaapp.com/CxrNblAG/img/rectangle-17854@2x.png"
              />
              <div className="absolute top-[355px] left-3 lg:left-8 text-left text-lg font-semibold text-gray-900 whitespace-nowrap">
                Sidekick Stories
              </div>
              <p className="absolute top-[412px] left-3 lg:left-8 text-left text-sm lg:text-base max-w-[305px] lg:max-w-[370px] font-normal text-gray-900 leading-normal">
                Explore the untold stories of unsung heroes and bring their courageous adventures to life in a comic that celebrates the power of loyalty and friendship.
              </p>
              <div className="absolute top-[523px] left-3 lg:left-8 text-left w-[168px] text-purple-800 font-semibold text-base">
                September 1 - 30
              </div>
              <div className="absolute top-[577px] left-3 lg:left-8 flex space-x-0 lg:space-x-4 w-[395px] h-[88px]">
                <div className="w-[114px] h-full relative">
                  <img
                    className="h-[50px] w-[49px] object-cover absolute top-0 left-5"
                    alt="Screenshot"
                    src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-1-11@2x.png"
                  />
                  <div className="absolute top-[66px] -left-1 text-sm lg:text-base font-medium text-gray-900 whitespace-nowrap">
                    10,000 coins
                  </div>
                </div>
                <div className="w-[105px] h-full relative">
                  <img
                    className="h-[50px] w-[49px] object-cover absolute top-0 left-3"
                    alt="Screenshot"
                    src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-2-11@2x.png"
                  />
                  <div className="absolute top-[66px] text-sm lg:text-base font-medium text-gray-900 whitespace-nowrap">
                    5,000 coins
                  </div>
                </div>
                <div className="w-[102px] h-full relative">
                  <img
                    className="h-[50px] w-[49px] object-cover absolute top-0 left-3"
                    alt="Screenshot"
                    src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-3-11@2x.png"
                  />
                  <div className="absolute top-[66px] text-sm lg:text-base font-medium text-gray-900 whitespace-nowrap">
                    1,000 coins
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat similar blocks for other upcoming contests with adjusted left margins removed */}

            <div className="bg-white shadow-md rounded-lg w-80 lg:w-[420px] h-[729px] flex-shrink-0 relative">
              <img
                className="h-[323px] w-full object-cover rounded-t-lg"
                alt="Rectangle"
                src="https://c.animaapp.com/CxrNblAG/img/rectangle-17854-1@2x.png"
              />
              <div className="absolute top-[355px] left-3 lg:left-8 text-left text-lg font-semibold text-gray-900 whitespace-nowrap">
                Mystery and Suspense
              </div>
              <p className="absolute top-[412px] left-3 lg:left-8 text-left w-[400px] text-sm lg:text-base max-w-[305px] lg:max-w-[370px] font-normal text-gray-900 leading-normal">
                Create a thrilling mystery or suspense story that keeps readers on the edge of their seats. Craft a compelling plot, intriguing characters, and unexpected twists that will leave readers guessing until the very end.
              </p>
              <div className="absolute top-[543px] left-3 lg:left-8 text-left w-[168px] text-purple-800 font-semibold text-base">
                September 1 - 30
              </div>
              <div className="absolute top-[597px] left-3 lg:left-8 flex space-x-0 lg:space-x-4 w-[395px] h-[88px]">
                <div className="w-[114px] h-full relative">
                  <img
                    className="h-[50px] w-[49px] object-cover absolute top-0 left-5"
                    alt="Screenshot"
                    src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-1-11@2x.png"
                  />
                  <div className="absolute top-[66px] -left-1 text-sm lg:text-base font-medium text-gray-900 whitespace-nowrap">
                    10,000 coins
                  </div>
                </div>
                <div className="w-[105px] h-full relative">
                  <img
                    className="h-[50px] w-[49px] object-cover absolute top-0 left-3"
                    alt="Screenshot"
                    src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-2-11@2x.png"
                  />
                  <div className="absolute top-[66px] text-sm lg:text-base font-medium text-gray-900 whitespace-nowrap">
                    5,000 coins
                  </div>
                </div>
                <div className="w-[102px] h-full relative">
                  <img
                    className="h-[50px] w-[49px] object-cover absolute top-0 left-3"
                    alt="Screenshot"
                    src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-3-11@2x.png"
                  />
                  <div className="absolute top-[66px] text-sm lg:text-base font-medium text-gray-900 whitespace-nowrap">
                    1,000 coins
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg w-80 lg:w-[420px] h-[729px] flex-shrink-0 relative">
              <img
                className="h-[323px] w-full object-cover rounded-t-lg"
                alt="Rectangle"
                src="https://c.animaapp.com/CxrNblAG/img/rectangle-17854@2x.png"
              />
              <div className="absolute top-[355px] left-3 lg:left-8 text-left text-lg font-semibold text-gray-900 whitespace-nowrap">
                Mystery and Suspense
              </div>
              <p className="absolute top-[412px] left-3 lg:left-8 text-left w-[400px] text-sm lg:text-base max-w-[305px] lg:max-w-[370px] font-normal text-gray-900 leading-normal">
                Create a thrilling mystery or suspense story that keeps readers on the edge of their seats. Craft a compelling plot, intriguing characters, and unexpected twists that will leave readers guessing until the very end.
              </p>
              <div className="absolute top-[543px] left-3 lg:left-8 text-left w-[168px] text-purple-800 font-semibold text-base">
                September 1 - 30
              </div>
              <div className="absolute top-[597px] left-3 lg:left-8 flex space-x-0 lg:space-x-4 w-[395px] h-[88px]">
                <div className="w-[114px] h-full relative">
                  <img
                    className="h-[50px] w-[49px] object-cover absolute top-0 left-5"
                    alt="Screenshot"
                    src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-1-11@2x.png"
                  />
                  <div className="absolute top-[66px] -left-1 text-sm lg:text-base font-medium text-gray-900 whitespace-nowrap">
                    10,000 coins
                  </div>
                </div>
                <div className="w-[105px] h-full relative">
                  <img
                    className="h-[50px] w-[49px] object-cover absolute top-0 left-3"
                    alt="Screenshot"
                    src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-2-11@2x.png"
                  />
                  <div className="absolute top-[66px] text-sm lg:text-base font-medium text-gray-900 whitespace-nowrap">
                    5,000 coins
                  </div>
                </div>
                <div className="w-[102px] h-full relative">
                  <img
                    className="h-[50px] w-[49px] object-cover absolute top-0 left-3"
                    alt="Screenshot"
                    src="https://c.animaapp.com/CxrNblAG/img/screenshot-2023-08-29-at-09-37-3-11@2x.png"
                  />
                  <div className="absolute top-[66px] text-sm lg:text-base font-medium text-gray-900 whitespace-nowrap">
                    1,000 coins
                  </div>
                </div>
              </div>
            </div>

            {/* Additional upcoming contest blocks omitted for brevity */}
          </div>
        </div>
      </div>
    </div>
  );
};
