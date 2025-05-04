import React from 'react';
import { Search } from 'lucide-react';

const SearchSection = () => {
    return (
        <div>
            <div className="flex gap-6 justify-end items-center mt-14 mb-6">
                <a href="/search">
                    <button className="flex items-center px-4 py-4 bg-gray-400 text-white rounded-full hover:bg-gray-500 cursor-pointer">
                        <Search className="w-4 h-4 mr-2" /> Search
                    </button>
                </a>
                <div className='flex gap-12'>
                    <a href="/notifications"> <i className='bx bxs-bell' id="bell"> </i> </a> <a href="/messages"> <i className='bx bx-chat' id="chat"></i> </a> <a href="/explore"> <i className='bx bx-group' id="group"> </i> </a>
                </div>
            </div>
        </div>
    )
}

export default SearchSection