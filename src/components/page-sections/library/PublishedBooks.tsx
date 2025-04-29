import React from 'react';
import { Eye } from 'lucide-react';
import hidden from '../../../assets/images/hidden.png';
import enchanted from '../../../assets/images/enchanted.png';

const PublishedBooks = () => {
  return (
    <div>
        <h2 className="text-2xl text-left font-semibold mb-4">Published Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <a href="/reading">
              <img
                className="w-full h-52 object-cover"
                src={hidden}
                alt="THE FLATSHARE"
              />
            </a>
            <div className="p-4">
              <h3 className="text-lg font-medium text-left">THE GIVERS OF STARS</h3>
              <p className="text-sm text-gray-500 text-left">By Jenni Caldwell</p>
              <div className="flex items-center mt-2 text-gray-500">
                <Eye className="w-4 h-4 mr-1" /> <span className="text-sm">1M</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <a href="/reading">
              <img
                className="w-full h-52 object-cover"
                src={enchanted}
                alt="Book"
              />
            </a>
            <div className="p-4">
              <h3 className="text-lg font-medium text-left">ENCHANTED HEARTS : A SPELLBINDING LOVE STORY</h3>
              <p className="text-sm text-gray-500 text-left">By Jenni Caldwell</p>
              <div className="flex items-center mt-2 text-gray-500">
                <Eye className="w-4 h-4 mr-1" /> <span className="text-sm">500K</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PublishedBooks