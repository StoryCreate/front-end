import React from "react";
import SearchSection from "@comp/page-sections/home/SearchSection";
import PostSection from "@comp/page-sections/home/PostSection";

export const Home = () => {

  return (
    <div className="main-padding h-full w-full">
      <div>
        <div className="home-group">
          <SearchSection />
        </div>
        <a>
          <div className="flex gap-2 pt-8 lg:pt-0 text-primary">
            <i className='bx bx-left-arrow-alt' id="left-arrow"></i> <h3> Back </h3>
          </div>
        </a>

        {/* home post */}

        <a href="/homepost"> <button id="post"> + </button></a>

        <div className="lg:ml-24 pb-12">
          <PostSection />
        </div>
      </div>
    </div>
  );
};