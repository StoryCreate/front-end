import React, { createContext, useState, ReactNode, useEffect } from 'react';
import API from '../services/axiosInstance';

export interface Post {
  id: number;
  author: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  timestamp: string;
}

interface PostsContextType {
  posts: Post[];
  addPost: (post: Omit<Post, 'id' | 'likes' | 'comments' | 'timestamp'> & { file?: File | null }) => Promise<void>;
  likePost: (id: number) => Promise<void>;
  commentPost: (id: number) => Promise<void>;
}

export const PostsContext = createContext<PostsContextType>({
  posts: [],
  addPost: async () => {},
  likePost: async () => {},
  commentPost: async () => {},
});

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsProvider = ({ children }: PostsProviderProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.get<Post[]>('/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const addPost = async (post: Omit<Post, 'id' | 'likes' | 'comments' | 'timestamp'> & { file?: File | null }) => {
    try {
      const formData = new FormData();
      formData.append('author', post.author);
      formData.append('text', post.content);
      if (post.file) {
        formData.append('file', post.file);
      }
      const response = await API.post<Post>('/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPosts((prevPosts) => [response.data, ...prevPosts]);
    } catch (error) {
      console.error('Failed to add post:', error);
    }
  };

  const likePost = async (id: number) => {
    try {
      await API.post(`/posts/${id}/like`);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === id ? { ...post, likes: post.likes + 1 } : post
        )
      );
    } catch (error) {
      console.error('Failed to like post:', error);
    }
  };

  const commentPost = async (id: number) => {
    try {
      await API.post(`/posts/${id}/comment`);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === id ? { ...post, comments: post.comments + 1 } : post
        )
      );
    } catch (error) {
      console.error('Failed to comment on post:', error);
    }
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, likePost, commentPost }}>
      {children}
    </PostsContext.Provider>
  );
};
