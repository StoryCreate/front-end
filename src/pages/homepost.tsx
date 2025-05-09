import React, { useState, useContext, useRef } from "react";
import { useAppSelector } from "@comp/lib/hooks";
import { RootState } from '@comp/lib/store';
import profilePic from '../assets/icons/profile-pic.svg';
import photo_icon from './../assets/icons/photo_icon.png';
import SearchSection from "@comp/page-sections/home/SearchSection";
import { PostSection } from "@comp/page-sections/home/PostSection";
import { PostsContext } from "../context/PostsContext";

export const Homepost = () => {
  const { posts, addPost, likePost, commentPost } = useContext(PostsContext);
  const [postContent, setPostContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Use useAppSelector to get user, loading, and error
  const { user } = useAppSelector((state: RootState) => state.auth);

  const handlePost = () => {
    if (postContent.trim() === "" && !imageFile) return;
    addPost({ author: fullName, content: postContent, file: imageFile });
    setPostContent("");
    setImageFile(null);
    setImagePreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setImagePreviewUrl(url);
    }
  };

  const personData = user?.person || {};
  const firstName = personData.firstName || '';
  const lastName = personData.lastName || '';
  const fullName = `${firstName} ${lastName}`.trim() || user.name || '';

  return (
    <div className="main-padding h-full w-full pb-14">
      <div>
        <div className="px-7">
          <SearchSection />
        </div>

        <a href="/">
          <div className="flex items-center gap-2 pt-8 lg:pt-0 text-sm text-primary">
            <i className='bx bx-left-arrow-alt' id="left-arrow"></i> <h3> Back </h3>
          </div>
        </a>

        <div className="p-6 ml-0 lg:ml-20 mt-8 border border-solid border-gray-300 w-80 lg:w-[600px] rounded-xl">
          <div>
            <div className="flex gap-4 items-center pb-6">
              <img src={profilePic} className="h-10 w-10" />
              <div className="text-left font-semibold text-sm">{user.person?.firstName} {user.person?.lastName}</div>
            </div>
            <div>
              <textarea
                className="p-4 h-52 w-full text-black text-left text-sm font-medium resize-none"
                placeholder="type something..."
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />
            </div>
            {imagePreviewUrl && (
              <div className="pt-4">
                <img src={imagePreviewUrl} alt="Preview" className="max-w-full max-h-60 object-contain rounded" />
              </div>
            )}
          </div>
          <div className="flex items-center justify-between pt-4">
            <img
              src={photo_icon}
              className="h-6 w-6 cursor-pointer"
              onClick={handleImageClick}
              alt="Add"
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <button
              className="bg-primary text-white px-4 py-2 text-sm rounded-full cursor-pointer hover:bg-opacity-90"
              onClick={handlePost}
            >
              Post
            </button>
          </div>
        </div>

        <div className="mt-10 ml-0 lg:ml-20">
          <PostSection posts={posts} likePost={likePost} commentPost={commentPost} />
        </div>
      </div>
    </div>
  );
};
