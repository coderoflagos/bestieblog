import React from 'react'


function Navbar() {
   

  return (
    <div className='text-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 dark:bg-black'>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] dark:text-white">BLOG.</h1>
        <ul className="flex">
            <li className="p-4 dark:text-white">Home</li>
        </ul> 
    </div>
  )
}

export default Navbar