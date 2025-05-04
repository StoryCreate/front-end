import React from "react";
import { Search, Send, Circle } from "lucide-react";
import profile_picture1 from './../assets/icons/profile_picture1.png';
import profile_picture2 from './../assets/icons/profile_picture2.png';

export const Messages = () => {
  return (
    <div className="main-padding flex flex-col lg:flex-row h-full bg-white mb-8">
      <div className="flex flex-col w-full max-w-7xl mx-auto p-4">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center w-full max-w-md border border-gray-300 rounded-lg px-3 py-2">
              <input
                type="text"
                className="flex-grow outline-none font-normal text-gray-700 placeholder-gray-400 p-1"
                placeholder="Search"
              />
              <Search className="w-4 h-4 ml-2 text-gray-500" />
            </div>
          </div>
          <div className="space-y-8 overflow-y-auto max-h-[70vh]">
            <div className="flex items-center space-x-16">
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={profile_picture1}
                  alt="Austin Usman"
                />
                <Circle className="absolute bottom-0 right-0 w-4 h-4 text-green-500" />
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-left text-gray-900">Austin Usman</div>
                  <div className="text-xs text-gray-500 pr-6">10:10 AM</div>
                </div>
                <div className="text-sm text-left text-gray-600">Fiction Book</div>
                <p className="text-sm text-left text-gray-700 truncate">Can you take a look and...</p>
              </div>
            </div>

            <div className="flex items-center space-x-16">
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={profile_picture2}
                  alt="Austin Usman"
                />
                <Circle className="absolute bottom-0 right-0 w-4 h-4 text-green-500" />
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-left text-gray-900">Austin Usman</div>
                  <div className="text-xs text-gray-500 pr-6">10:10 AM</div>
                </div>
                <div className="text-sm text-left text-gray-600">Fiction Book</div>
                <p className="text-sm text-left text-gray-700 truncate">Can you take a look and...</p>
              </div>
            </div>

            <div className="flex items-center space-x-16">
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={profile_picture2}
                  alt="Austin Usman"
                />
                <Circle className="absolute bottom-0 right-0 w-4 h-4 text-green-500" />
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-left text-gray-900">Austin Usman</div>
                  <div className="text-xs text-gray-500 pr-6">10:10 AM</div>
                </div>
                <div className="text-sm text-left text-gray-600">Fiction Book</div>
                <p className="text-sm text-left text-gray-700 truncate">Can you take a look and...</p>
              </div>
            </div>

            <div className="flex items-center space-x-16">
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={profile_picture2}
                  alt="Austin Usman"
                />
                <Circle className="absolute bottom-0 right-0 w-4 h-4 text-green-500" />
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-left text-gray-900">Austin Usman</div>
                  <div className="text-xs text-gray-500 pr-6">10:10 AM</div>
                </div>
                <div className="text-sm text-left text-gray-600">Fiction Book</div>
                <p className="text-sm text-left text-gray-700 truncate">Can you take a look and...</p>
              </div>
            </div>

            <div className="flex items-center space-x-16">
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={profile_picture2}
                  alt="Austin Usman"
                />
                <Circle className="absolute bottom-0 right-0 w-4 h-4 text-green-500" />
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-left text-gray-900">Austin Usman</div>
                  <div className="text-xs text-gray-500 pr-6">10:10 AM</div>
                </div>
                <div className="text-sm text-left text-gray-600">Fiction Book</div>
                <p className="text-sm text-left text-gray-700 truncate">Can you take a look and...</p>
              </div>
            </div>

            <div className="flex items-center space-x-16">
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={profile_picture2}
                  alt="Austin Usman"
                />
                <Circle className="absolute bottom-0 right-0 w-4 h-4 text-green-500" />
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-left text-gray-900">Pete Kort</div>
                  <div className="text-xs text-gray-500 pr-6">10:10 AM</div>
                </div>
                <div className="text-sm text-left text-gray-600">Fiction Book</div>
                <p className="text-sm text-left text-gray-700 truncate">Can you take a look and...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col w-full max-w-7xl mx-auto p-4 border-t border-gray-200 overflow-y-auto max-h-[70vh]">
          <div className="flex flex-col space-y-6">
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto p-4 border-t border-gray-200">
              <div className="flex flex-col gap-2 text-left">
                <div className="font-semibold text-gray-900">Austin Usman</div>
                <div className="text-xs text-gray-500">8:00 AM GMT</div>
                <p className="text-sm text-gray-700">I need a fiction writer</p>
              </div>
              <div>
                <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-purple-950 transition cursor-pointer">
                  Contract
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={profile_picture1}
                  alt="Austin Usman"
                />
                <Circle className="absolute bottom-0 right-0 w-4 h-4 text-green-500" />
              </div>
              <div className="flex flex-col flex-grow text-left bg-gray-100 rounded-lg p-4">
                <div className="font-semibold text-gray-900 pb-2">Austin Usman</div>
                <p className="text-gray-700 text-sm whitespace-pre-line">
                  Hi Jenni{"\n\n"}
                  I have a fiction project that I’d like to have you on. Please send me your email address so I’d
                  send the details
                </p>
                <div className="text-xs text-gray-500 mt-2">10:10 AM</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={profile_picture2}
                  alt="Jenni Caldwell"
                />
                <Circle className="absolute bottom-0 right-0 w-4 h-4 text-gray-400" />
              </div>
              <div className="flex flex-col flex-grow text-left bg-gray-100 rounded-lg p-4">
                <div className="font-semibold text-gray-900 pb-2">Jenni Caldwell</div>
                <p className="text-gray-700 text-sm whitespace-pre-line">
                  Hi Austin!{"\n\n"}
                  Thank you for considering me for this gig. I’d love to know more details about your project please. My
                  email is jenni@gmail.com I look forward to you mail. Thank you
                </p>
                <div className="text-xs text-gray-500 mt-2">10:10 AM</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={profile_picture1}
                  alt="Austin Usman"
                />
                <Circle className="absolute bottom-0 right-0 w-4 h-4 text-green-500" />
              </div>
              <div className="flex flex-col flex-grow text-left bg-gray-100 rounded-lg p-4">
                <div className="font-semibold text-gray-900 pb-2">Austin Usman</div>
                <p className="text-gray-700 text-sm whitespace-pre-line">
                  Can you take a look and let me know your thoughts? I just sent you a mail.
                </p>
                <div className="text-xs text-gray-500 mt-2">10:10 AM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start w-full max-w-7xl mx-auto p-4 border-t border-gray-200">
          <div className="flex justify-between w-full">
            <textarea
              className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              placeholder="Type a message ..."
            />
            <Send className="w-6 h-6 ml-3 cursor-pointer text-gray-600" />
          </div>
          <div>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition cursor-pointer">
              Attach
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
