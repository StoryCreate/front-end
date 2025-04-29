import React from 'react';
import { Eye, Heart, Share2, Star, Plus } from 'lucide-react';

const HighlyRated = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-left">Highly Rated Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <img
            className="w-full h-52 object-cover"
            src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-26@2x.png"
            alt="BEACH READ"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium text-left">BEACH READ</h3>
            <p className="text-sm text-gray-500 text-left">By Emily Henry</p>
            <div className='flex flex-row justify-between'>
              <div className="flex items-center mt-2 text-gray-500">
                <Eye className="w-4 h-4 mr-1" /> <span className="text-sm">35K</span>
              </div>
              <div className="flex items-center mt-4 space-x-4">
                <Heart className="w-5 h-5 text-black hover:text-primary cursor-pointer" />
                <Share2 className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />
                <button className="p-1 bg-black text-white rounded-full hover:bg-primary cursor-pointer">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary" />
              ))}
              <span className="ml-2 text-sm text-gray-500">5/5 ratings</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <img
            className="w-full h-52 object-cover"
            src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-25@2x.png"
            alt="THE FLATSHARE"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium text-left">THE FLATSHARE</h3>
            <p className="text-sm text-gray-500 text-left">By Beth O'Leary</p>
            <div className='flex flex-row justify-between'>
              <div className="flex items-center mt-2 text-gray-500">
                <Eye className="w-4 h-4 mr-1" /> <span className="text-sm">35K</span>
              </div>
              <div className="flex items-center mt-4 space-x-4">
                <Heart className="w-5 h-5 text-black hover:text-primary cursor-pointer" />
                <Share2 className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />
                <button className="p-1 bg-black text-white rounded-full hover:bg-primary cursor-pointer">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary" />
              ))}
              <span className="ml-2 text-sm text-gray-500">5/5 ratings</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <img
            className="w-full h-52 object-cover"
            src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-23@2x.png"
            alt="THE TESTAMENTS"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium text-left">THE TESTAMENTS</h3>
            <p className="text-sm text-gray-500 text-left">By Margaret Atwood</p>
            <div className='flex flex-row justify-between'>
              <div className="flex items-center mt-2 text-gray-500">
                <Eye className="w-4 h-4 mr-1" /> <span className="text-sm">35K</span>
              </div>
              <div className="flex items-center mt-4 space-x-4">
                <Heart className="w-5 h-5 text-black hover:text-primary cursor-pointer" />
                <Share2 className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />
                <button className="p-1 bg-black text-white rounded-full hover:bg-primary cursor-pointer">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary" />
              ))}
              <span className="ml-2 text-sm text-gray-500">5/5 ratings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HighlyRated