import React from 'react'
import Home from '../assets/home_page.png';

import StudentNavBar from './StudentNavBar';

export default function StudentHome() {
  return (
    <div>
            <StudentNavBar/>
        <div className='max-w-[1200px] w-full h-[800px] mx-auto text-center flex flex-col justify-center '>
            <div className='flex items-center justify-between'>
            <h1 className='text-6xl font-bold text-left'>
                Online assignments <br />
                submission & <br />
                grading system
            </h1>

            <img className='w-[500px] mx-auto my-4' src={Home} alt="/" />
            </div>
        </div>
        </div>
  )
}
