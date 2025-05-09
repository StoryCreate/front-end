import React, { useContext } from "react";
import SearchSection from "@comp/page-sections/home/SearchSection";
import { PostSection } from "@comp/page-sections/home/PostSection";
import { Plus } from 'lucide-react';
import { PostsContext } from "../context/PostsContext";

export const Home = () => {
  const { posts, likePost, commentPost } = useContext(PostsContext);

  return (
    <div className="main-padding h-full w-full">
      <div>
        <div>
          <SearchSection />
        </div>
        {/* <a>
          <div className="flex items-center gap-2 pt-8 lg:pt-0 text-sm text-primary">
            <i className='bx bx-left-arrow-alt' id="left-arrow"></i> <h3> Back </h3>
          </div>
        </a> */}

        {/* home post */}

        <a href="/homepost" className="w-6 h-6 ml-72 bg-white"> <Plus className="shadow-md text-primary rounded-md hover:text-purple-600" /></a>

        <div className="lg:ml-24 pb-12">
          <PostSection posts={posts} likePost={likePost} commentPost={commentPost} />
        </div>
      </div>
    </div>
  );
};
