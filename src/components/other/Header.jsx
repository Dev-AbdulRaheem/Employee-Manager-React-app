import React from 'react'

const Header = () => {
  return (
    <div className='flex h-10  items-end justify-between '>
        <h1 className='text-2xl text-white'>Hello<br/><span className='text-3xl font-semibold'>Raheem</span> </h1>
        <button className='bg-red-600 text-lg font-medium text-white px-3 py-2 rounded-small mb-5'>Log Out</button>
    </div>
  )
}

export default Header