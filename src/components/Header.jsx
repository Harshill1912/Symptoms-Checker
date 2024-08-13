import React from 'react'

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">
       Symptom Checker
      </h1>
      <nav >
        <ul className="flex space-x-4  text-lg">
          <li className='cursor-pointer  hover:text-red-500'>
            
         Home
          </li>
          <li className='cursor-pointer  hover:text-red-500'>
            Result
          </li >
          <li className='cursor-pointer hover:text-red-500'  >
           Contact Us
          </li>
        </ul>
      </nav>
    </div>
  </header>

  )
}

export default Header