import React from 'react'
import pdf from '../assets/pdf.png'

export default function AdminGrading() {
  return (
    <div>
         <div className='max-w-[1300px] w-full h-[800px] mx-auto text-center flex flex-col justify-center border shadow-xl px-20 bg-[#E6ECF0] rounded-lg'>
            <h1 className='text-4xl font-bold '> submission JAVA FULL STACK DEVELOPMENT + MICROSERVICES</h1>
            <br/>
            <div className='max-w-[1300px] w-full h-[650px] mx-auto text-center flex flex-col justify-center border shadow-xl px-20 bg-[#E6ECF0] rounded-lg'>
                <div className='flex'>
                    <h1 className='text-left font-bold'>Student name :</h1>
                    <h1 className=''>name of the student</h1>
                </div>
                <div className='flex'>
                    <h1 className='text-left font-bold'>Student name :</h1>
                    <h1 className=''>name of the student</h1>
                </div>
                <img className='w-[1200px] mx-auto my-4' src={pdf} alt="/loginimage" />
                <div className=' flex justify-around w-[600px]'>
                <input className='border p-2 ' type='text' placeholder='upload total marks for 10'  />
                <button className='bg-black text-white p-2 rounded'>Upload grade</button>
                <button className='bg-black text-white p-2 rounded'>Next Submission</button>
                </div>
            </div>
         </div>
    </div>
  )
}
