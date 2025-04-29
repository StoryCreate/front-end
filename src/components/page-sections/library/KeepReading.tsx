import { Button } from '@comp/ui/button'
import React from 'react'

const KeepReading = () => {
  return (
    <div>
        <h2 className="text-2xl text-left font-semibold mb-4">Keep Reading</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <a href="/reading">
              <img
                className="w-full h-52 object-cover"
                src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-25@2x.png"
                alt="THE FLATSHARE"
              />
            </a>
            <div className="p-4">
              <h3 className="text-lg font-medium text-left">THE FLATSHARE</h3>
              <p className="text-sm text-gray-500 text-left">By Beth O'Leary</p>
              <div className="flex items-center mt-2 text-gray-500">
                <Button className='w-full cursor-pointer'>Continue Reading</Button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <a href="/reading">
              <img
                className="w-full h-52 object-cover"
                src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-26@2x.png"
                alt="BEACH READ"
              />
            </a>
            <div className="p-4">
              <h3 className="text-lg font-medium text-left">BEACH READ</h3>
              <p className="text-sm text-gray-500 text-left">By Emily Henry</p>
              <div className="flex items-center mt-2 text-gray-500">
                <Button className='w-full cursor-pointer'>Continue Reading</Button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <a href="/reading">
              <img
                className="w-full h-52 object-cover"
                src="https://c.animaapp.com/qFkmpUOx/img/rectangle-45-23@2x.png"
                alt="THE SILENT PATIENT"
              />
            </a>
            <div className="p-4">
              <h3 className="text-lg font-medium text-left">THE SILENT PATIENT</h3>
              <p className="text-sm text-gray-500 text-left">By Alex Michaelides</p>
              <div className="flex items-center mt-2 text-gray-500">
                <Button className='w-full cursor-pointer'>Continue Reading</Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default KeepReading