import React, { useContext } from "react";
import { BookOpen, Pen, MoreHorizontal } from "lucide-react";
// import ariana from './../assets/icons/ariana.png';
import { NotificationsContext } from "../context/NotificationsContext";

const getRelativeTime = (timestamp: string) => {
  const now = new Date();
  const notifDate = new Date(timestamp);
  const diff = (now.getTime() - notifDate.getTime()) / 1000; // seconds

  if (diff < 60) {
    return Math.floor(diff) + 's';
  } else if (diff < 3600) {
    return Math.floor(diff / 60) + 'm';
  } else if (diff < 86400) {
    return Math.floor(diff / 3600) + 'h';
  } else if (diff < 604800) {
    return Math.floor(diff / 86400) + 'd';
  } else {
    return Math.floor(diff / 604800) + 'w';
  }
};

export const Notifications = () => {
  const { notifications, filter, setFilter, markAsRead } = useContext(NotificationsContext);

  const handleNotificationClick = (id: number) => {
    markAsRead(id);
    // Additional logic for notification click can be added here
  };

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
          <div
            className={`text-xs lg:text-sm font-semibold pb-1 cursor-pointer ${filter === 'all' ? 'text-gray-900 border-b-2 border-blue-600' : 'text-gray-400'}`}
            onClick={() => setFilter('all')}
          >
            All
          </div>
          <div
            className={`text-xs lg:text-sm font-semibold pb-1 cursor-pointer ${filter === 'myposts' ? 'text-gray-900 border-b-2 border-blue-600' : 'text-gray-400'}`}
            onClick={() => setFilter('myposts')}
          >
            My posts
          </div>
          <div
            className={`text-xs lg:text-sm font-semibold pb-1 cursor-pointer ${filter === 'mentions' ? 'text-gray-900 border-b-2 border-blue-600' : 'text-gray-400'}`}
            onClick={() => setFilter('mentions')}
          >
            Mentions
          </div>
        </div>

        <div className="space-y-8 text-left text-sm">
          {notifications.length === 0 ? (
            <div>No notifications available.</div>
          ) : (
            notifications.map((notif) => (
              <div
                key={notif.id}
                className={`flex items-center space-x-4 cursor-pointer ${notif.read ? 'bg-gray-100' : 'bg-white'}`}
                onClick={() => handleNotificationClick(notif.id)}
              >
                {notif.avatarUrl ? (
                  <img
                    src={notif.avatarUrl}
                    alt={notif.author || "User"}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : notif.type === 'book' ? (
                  <BookOpen className="w-6 h-6 text-gray-700 flex-shrink-0" />
                ) : notif.type === 'pen' ? (
                  <Pen className="w-6 h-6 text-gray-700 flex-shrink-0" />
                ) : (
                  <div className="h-8 w-8 bg-magenta-100 rounded-md flex items-center justify-center relative">
                    <div className="bg-purple-700 h-8 w-8 rounded-md flex items-center justify-center">
                      <span className="text-white font-extrabold text-xs">{notif.author?.substring(0,3).toUpperCase()}</span>
                    </div>
                  </div>
                )}
                <div className="flex-grow">
                  <p className="text-gray-900 font-medium">
                    {notif.message}
                  </p>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className="text-gray-700 font-medium text-sm">{getRelativeTime(notif.timestamp)}</span>
                  <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
                </div>
              </div>
            ))
          )}
        </div>

        <hr className="my-8 border-gray-300" />
      </div>
    </div>
  );
};
