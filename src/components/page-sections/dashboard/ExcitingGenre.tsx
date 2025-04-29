import React from 'react';
import romance from '../../../assets/images/romance.png';
import humor from '../../../assets/images/humor.png';
import mystery from '../../../assets/images/mystery.png';

const ExcitingGenre = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-left">Some Exciting Genre You Can Check Out</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <img src={romance} alt="Romance" className="w-full h-52 object-cover" />
                <img src={humor} alt="Humor" className="w-full h-52 object-cover" />
                <img src={mystery} alt="Mystery" className="w-full h-52 object-cover" />
            </div>
        </div>
    )
}

export default ExcitingGenre