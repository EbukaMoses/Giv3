import React from 'react'
import Button from './Button'

const Card = ({ title, label, fee, description, list, btnTitle, path }: { title: string, label?: string, fee: string, description: string, list: string[], btnTitle: string, path: string }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto my-4 border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base text-gray-800 font-semibold">{title}</h2>
        {/* {label && (
          <span className="text-sm text-white bg-yellow-500 px-2 py-1 rounded-full">
            {label}
          </span>
        )} */}
      </div>
      <h2 className="text-gray-600 font-semibold text-xl mb-4">{fee}</h2>
      <h4 className='text-medium font-bold'>{description}</h4>
      <ul className="list-style-none text-gray-700 space-y-2 my-5">
        {list.map((item, idx) => (
          <li key={idx} className='text-sm'>{item}</li>
        ))}
      </ul>
      <Button title={btnTitle} path={path} className="bg-[#FFA300] text-white flex justify-center items-center rounded-lg" />
    </div>
  );
}

export default Card

