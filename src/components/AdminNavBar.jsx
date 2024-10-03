import React from 'react'

export default function AdminNavBar() {
  return (
    <div className= 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black ' >
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LOGO.</h1>
        <ul className='flex font-bold'>
        <li className='p-4 whitespace-nowrap'>Home</li>
        <li className='p-4 whitespace-nowrap'>View Courses</li>
        <li className='p-4 whitespace-nowrap'>Manage Submissions</li>
        <li className='p-4 whitespace-nowrap'>View Submitted Assignments</li>
        <li className='p-4 whitespace-nowrap'>View Pending</li>
        </ul>
        <button className=' bg-[#000000] w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Logout</button>
    </div>
  )
}
