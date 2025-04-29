import React from 'react';
import { Eye } from 'lucide-react';

const ReadAgain = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-left">Read Again</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img
                        className="w-full h-52 object-cover"
                        src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-31@2x.png"
                        alt="THE GIVERS OF STARS"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-left">THE GIVERS OF STARS</h3>
                        <p className="text-sm text-gray-500 text-left">By Jojo Moyes</p>
                        <div className='flex flex-row justify-between'>
                            <div className="flex items-center mt-2 text-gray-500">
                                <Eye className="w-4 h-4 mr-1" /> <span className="text-sm">1M</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img
                        className="w-full h-52 object-cover"
                        src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-30@2x.png"
                        alt="THE KISS QUOTIENT"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-left">THE KISS QUOTIENT</h3>
                        <p className="text-sm text-gray-500 text-left">By Helen Hoang</p>
                        <div className='flex flex-row justify-between'>
                            <div className="flex items-center mt-2 text-gray-500">
                                <Eye className="w-4 h-4 mr-1" /> <span className="text-sm">500K</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img
                        className="w-full h-52 object-cover"
                        src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-28@2x.png"
                        alt="THE WEDDING DAY"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-left">THE WEDDING DAY</h3>
                        <p className="text-sm text-gray-500 text-left">By Jasmine Guillory</p>
                        <div className='flex flex-row justify-between'>
                            <div className="flex items-center mt-2 text-gray-500">
                                <Eye className="w-4 h-4 mr-1" /> <span className="text-sm">800K</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadAgain