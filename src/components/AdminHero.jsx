import React from 'react'
import Admin from '../assets/admin.png'
import PieChart from '../assets/Piechart.png'
import Graph from '../assets/graph.png'
import AdminNavBar from './AdminNavBar'

export default function AdminHero() {
  return (
    <div>
        <AdminNavBar/>
        <div className='max-w-[1200px] w-full h-[800px] mx-auto text-center flex flex-col justify-center  '>
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='text-6xl font-bold text-left'>Welcome Admin !!</h1>
                <button className=' bg-[#000000] w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-white '>view more insigts </button>
            </div>
            <img className='w-[670px] mx-auto my-4' src={Admin} alt="/" />
        </div>

    </div>

    <div className='max-w-[1200px] w-full h-[800px] mx-auto text-center flex flex-col justify-center  '>
        <h1 className='text-6xl font-bold text-center'>Assignment submission status</h1>
        <img className='w-[800px] mx-auto my-4' src={PieChart} alt="/" />
    </div>

    <div className='max-w-[1200px] w-full h-[800px] mx-auto text-center flex flex-col justify-center '>
        <h1 className='text-6xl font-bold text-center'>Submission by date</h1>
        <img className='w-[1000px] mx-auto my-4' src={Graph} alt="/" />
    </div>

    </div>
        
  )
}
