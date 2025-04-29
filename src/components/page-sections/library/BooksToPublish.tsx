import { Button } from '@comp/ui/button';
import React from 'react';
import swept from '../../../assets/images/swept.png';

const BooksToPublish = () => {
    return (
        <div>
            <h2 className="text-2xl text-left font-semibold mb-4">Books Ready To Be Published</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <a href="/reading">
                        <img
                            className="w-full h-52 object-cover"
                            src={swept}
                            alt="book"
                        />
                    </a>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-left">Swept Away</h3>
                        <p className="text-sm text-gray-500 text-left">By Jenni Caldwell</p>
                        <div className="flex items-center mt-2 text-gray-500">
                            <Button className='w-full cursor-pointer'>Publish Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BooksToPublish