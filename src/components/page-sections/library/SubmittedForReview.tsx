import React from 'react';
import moonlight from '../../../assets/images/moonlight.png'

const SubmittedForReview = () => {
    return (
        <div>
            <h2 className="text-2xl text-left font-semibold mb-4">Submitted For Review</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <a href="/reading">
                        <img
                            className="w-full h-52 object-cover"
                            src={moonlight}
                            alt="book"
                        />
                    </a>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-left">MOONLIGHT PROMISE</h3>
                        <p className="text-sm text-gray-500 text-left">By Jenni Caldwell</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmittedForReview