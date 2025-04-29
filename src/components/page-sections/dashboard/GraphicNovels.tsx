import React from 'react';
import { Eye, Heart, Share2, Star, Plus } from 'lucide-react';

const GraphicNovels = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-left">Check Out These Graphic Novels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <img
            className="w-full h-52 object-cover"
            src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-11@2x.png"
            alt="WATCHMEN"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium text-left">WATCHMEN</h3>
            <p className="text-sm text-gray-500 text-left">By Alan Moore & Dave Gibbons</p>
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
            src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-10@2x.png"
            alt="SAGA"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium text-left">SAGA</h3>
            <p className="text-sm text-gray-500 text-left">By Brian K. Vaughan & Fiona Staples</p>
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
            src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-8@2x.png"
            alt="MAUS"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium text-left">MAUS</h3>
            <p className="text-sm text-gray-500 text-left">By Art Spiegelman</p>
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

export default GraphicNovels