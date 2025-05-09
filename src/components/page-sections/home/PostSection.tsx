import React from 'react'
import { Heart, Share2 } from 'lucide-react'
import { Post } from '../../../context/PostsContext'

interface PostSectionProps {
  posts: Post[]
  likePost: (id: number) => void
  commentPost: (id: number) => void
}

const getRelativeTime = (timestamp: string) => {
  const now = new Date();
  const postDate = new Date(timestamp);
  const diff = (now.getTime() - postDate.getTime()) / 1000; // seconds

  if (diff < 60) {
    return Math.floor(diff) + 's ago';
  } else if (diff < 3600) {
    return Math.floor(diff / 60) + 'm ago';
  } else if (diff < 86400) {
    return Math.floor(diff / 3600) + 'h ago';
  } else {
    return Math.floor(diff / 86400) + 'd ago';
  }
}

export const PostSection = ({ posts, likePost, commentPost }: PostSectionProps) => {
  return (
    <div className="w-full">
      {posts.length === 0 ? (
        <div>No posts available.</div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="pt-12 flex flex-col items-start">
            <div>
              <div className="flex items-center gap-4">
                <img
                  alt="Ellipse"
                  src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977@2x.png"
                  width="80px"
                  height="80px"
                />
                <div>
                  <h4 className="text-black">{post.author}</h4>
                </div>
              </div>
            </div>
            <div>
              <p className="text-black text-left pt-5">{post.content}</p>
            </div>
            {post.imageUrl && (
              <div className="pt-5 text-left">
                <img
                  className="pt-5 text-left w-[300px] lg:w-[600px] object-cover object-top"
                  src={post.imageUrl}
                  width="600px"
                  height="300px"
                />
              </div>
            )}
            <div className="flex items-center gap-3 pt-5 text-left text-3xl">
              <Heart
                className="w-5 h-5 text-black hover:text-primary cursor-pointer"
                onClick={() => likePost(post.id)}
              />
              <img
                className="h-8 w-8 hover:text-primary cursor-pointer"
                alt="Frame"
                src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg"
                onClick={() => commentPost(post.id)}
              />
              <Share2 className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />
            </div>
            <div className="flex flex-col gap-4 pt-4 text-left text-black">
              <div>{post.likes} likes</div>
              <div>View all {post.comments} comments</div>
              <div>{getRelativeTime(post.timestamp)}</div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
