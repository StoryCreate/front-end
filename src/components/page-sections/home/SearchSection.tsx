import React from 'react';
import search from '../../../assets/icons/search.png';

const SearchSection = () => {
    return (
        <div>
            <div className='flex'>
                <div className="flex items-center pt-16 lg:ml-80">
                    <a href="/search"> <button className="bg-gray-300 lg:ml-[560px] pr-5 py-4 px-12 text-black rounded-full cursor-pointer" type="button"> Search </button> </a>
                    <img src={search} className="pt-0 -ml-24" width="15px" />
                </div>
                <div className='flex gap-12 ml-40'>
                    <a href="/notifications"> <i className='bx bxs-bell' id="bell"> </i> </a> <a href="/messages"> <i className='bx bx-chat' id="chat"></i> </a> <a href="/explore"> <i className='bx bx-group' id="group"> </i> </a>
                </div>
            </div>
        </div>
    )
}

export default SearchSection