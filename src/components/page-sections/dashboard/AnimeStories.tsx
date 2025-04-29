import React from 'react';
import { Eye, Heart, Share2, Star, Plus } from 'lucide-react';

const AnimeStories = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-left">Anime Stories Picked For You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <img
            className="w-full h-52 object-cover"
            src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-16@2x.png"
            alt="ATTACK ON TITAN"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium text-left">ATTACK ON TITAN</h3>
            <p className="text-sm text-gray-500 text-left">By Hajime Isayama</p>
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
            src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-15@2x.png"
            alt="FULLMETA ALCHEMIST"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium text-left">FULLMETA ALCHEMIST</h3>
            <p className="text-sm text-gray-500 text-left">By Hiromu Arakawa</p>
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
            src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-13@2x.png"
            alt="DEATH NOTE"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium text-left">DEATH NOTE</h3>
            <p className="text-sm text-gray-500 text-left">By Takeshi Obata</p>
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

export default AnimeStories