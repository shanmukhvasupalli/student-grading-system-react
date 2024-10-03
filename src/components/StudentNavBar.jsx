import React from 'react'
import { Link } from 'react-router-dom'

export default function StudentNavBar() {
  return (
    <div>
        <div className= 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black ' >
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LOGO.</h1>
        <ul className='flex font-bold'>
        <li className='p-4 whitespace-nowrap' ><Link to="/studenthome" >Home</Link></li>
        <li className='p-4 whitespace-nowrap'><Link to="/studentviewcourse">View Courses</Link></li>
        <li className='p-4 whitespace-nowrap' ><Link to="/managesubmission">Manage Submissions</Link></li>
        <li className='p-4 whitespace-nowrap'><Link to="/addsubmisson" >View Submitted Assignments </Link></li>
        <li className='p-4 whitespace-nowrap'>View Pending</li>
        </ul>
        <button className=' bg-[#000000] w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-white'><Link to="/" >Logout</Link></button>
    </div>
    </div>
  )
}
