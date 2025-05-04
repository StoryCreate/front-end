import React from "react";
import { BookOpen, Pen, MoreHorizontal } from "lucide-react";
import ariana from './../assets/icons/ariana.png';

export const Notifications = () => {
  return (
    <div className="main-padding flex flex-col lg:flex-row">
      <div className="flex flex-col gap-4 text-left mt-10 lg:mt-20">
        <h1 className="text-sm lg:text-2xl font-bold mb-6">Notifications</h1>
        <p className="text-gray-700 text-sm font-semibold mt-1">
          Manage your notifications
        </p>
        <a href="/notification" className="text-primary text-sm font-semibold cursor-pointer">
          View settings
        </a>
      </div>

      <div className="bg-white w-[330px] lg:w-11/12 max-w-3xl mx-auto mt-10 lg:mt-20 mb-10 p-6 rounded-md shadow-md">
        <div className="flex space-x-8 justify-between border-b border-gray-300 pb-2">
          <div className="text-xs lg:text-sm font-semibold text-gray-900 border-b-2 border-blue-600 pb-1">
            All
          </div>
          <a href="/myposts" className="text-xs lg:text-sm font-semibold text-gray-400 hover:text-gray-700 cursor-pointer">
            My posts
          </a>
          <a href="/mentions" className="text-xs lg:text-sm font-semibold text-gray-400 hover:text-gray-700 cursor-pointer">
            Mentions
          </a>
        </div>

        <div className="space-y-8 text-left text-sm">
          {/* Notification 1 */}
          <div className="flex items-center space-x-4">
            <BookOpen className="w-6 h-6 text-gray-700 flex-shrink-0" />
            <div className="flex-grow">
              <p className="text-gray-900 font-medium cursor-pointer">
                Popular books this week: Find popular books people are reading this week.
              </p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <span className="text-gray-700 font-medium text-sm">1h</span>
              <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
          </div>

          {/* Notification 2 */}
          <div className="flex items-center space-x-4">
            <Pen className="w-6 h-6 text-gray-700 flex-shrink-0" />
            <div className="flex-grow">
              <p className="text-gray-900 font-medium cursor-pointer">
                Find creators for your next creative project and hire them.
              </p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <span className="text-gray-700 font-medium text-sm">2d</span>
              <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
          </div>

          {/* Notification 3 */}
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 bg-magenta-100 rounded-md flex items-center justify-center relative">
              <div className="bg-purple-700 h-8 w-8 rounded-md flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">CWM</span>
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-gray-900 font-medium cursor-pointer">
                Trending post from CREATE WITH MIDE: The power of creativity can not be ...
              </p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <span className="text-gray-700 font-medium text-sm">2d</span>
              <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
          </div>

          {/* Notification 4 */}
          <div className="flex items-center space-x-4">
            <img
              src={ariana}
              alt="Ariana Audrey"
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="flex-grow">
              <p className="text-gray-900 font-medium cursor-pointer">
                Ariana Audrey reacted to your post: Creativity is very important when it comes to ...
              </p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <span className="text-gray-700 font-medium text-sm">2d</span>
              <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
          </div>

          {/* Notification 5 */}
          <div className="flex items-center space-x-4">
            <img
              src="https://c.animaapp.com/Y2gfbMH5/img/ellipse-1977-2@2x.png"
              alt="User"
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="flex-grow">
              <p className="text-gray-900 font-medium cursor-pointer">
                Mide commented on Jenni Caldwell’s post: Creativity is very important when it comes to ...
              </p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <span className="text-gray-700 font-medium text-sm">7d</span>
              <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
          </div>

          {/* Notification 6 */}
          <div className="flex items-center space-x-4">
            <img
              src={ariana}
              alt="Ariana Audrey"
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="flex-grow">
              <p className="text-gray-900 font-medium cursor-pointer">
                Ariana Audrey followed you back.
              </p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <span className="text-gray-700 font-medium text-sm">6d</span>
              <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
          </div>

          {/* Notification 7 */}
          <div className="flex items-center space-x-4">
            <img
              src={ariana}
              alt="Ariana Audrey"
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="flex-grow">
              <p className="text-gray-900 font-medium cursor-pointer">
                People are reacting to Ariana Audrey’s post.
              </p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <span className="text-gray-700 font-medium text-sm">6w</span>
              <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />
      </div>
    </div>
  );
};
