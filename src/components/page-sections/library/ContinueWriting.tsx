import { Button } from '@comp/ui/button'
import React from 'react'
import whispered from '../../../assets/images/whispered.png';
import eternal from '../../../assets/images/eternal.png';

const ContinueWriting = () => {
    return (
        <div>
            <h2 className="text-2xl text-left font-semibold mb-4">Continue Writing Your Amazing Story</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <a href="/reading">
                        <img
                            className="w-full h-52 object-cover"
                            src={whispered}
                            alt="book"
                        />
                    </a>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-left">Whispered Love : A Tale of passion and Secrets</h3>
                        <div className="flex items-center mt-2 text-gray-500">
                            <Button className='w-full cursor-pointer'>Continue Writing</Button>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <a href="/reading">
                        <img
                            className="w-full h-52 object-cover"
                            src={eternal}
                            alt="Book"
                        />
                    </a>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-left">Eternal Embrace : Love Across Time</h3>
                        <div className="flex items-center mt-2 text-gray-500">
                            <Button className='w-full cursor-pointer mt-7'>Continue Writing</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContinueWriting