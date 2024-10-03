import React from 'react'
import StudentNavBar from './StudentNavBar'
import { Link } from 'react-router-dom'

export default function StudentViewCourses() {
  return (
    <div>
        <StudentNavBar/>
        <div className='max-w-[1300px] w-full h-[800px] mx-auto text-center flex flex-col justify-center rounded-lg'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h1 className='text-4xl font-bold text-left'>Course Name</h1>
                <p className='text-lg font-medium text-left'>Course Description</p>
                <button className=' bg-[#000000] w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-white '><Link to="/addsubmisson">view Course</Link></button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h1 className='text-4xl font-bold text-left'>Course Name</h1>
                <p className='text-lg font-medium text-left'>Course Description</p>
                <button className=' bg-[#000000] w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-white '><Link to="/addsubmisson">view Course</Link></button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h1 className='text-4xl font-bold text-left'>Course Name</h1>
                <p className='text-lg font-medium text-left'>Course Description</p>
                <button className=' bg-[#000000] w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-white '><Link to="/addsubmisson">view Course</Link></button>
            </div>
            
        </div>
    </div>
  )
}
