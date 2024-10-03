import React from 'react'
import AdminNavBar from './AdminNavBar'


export default function AdminAddSubmission() {
  return (
    <div>
      <AdminNavBar/>
        <div className='max-w-[1300px] w-full h-[800px] mx-auto text-center flex flex-col justify-center border shadow-xl px-20 bg-[#E6ECF0] rounded-lg'>
            <h1 className='text-4xl font-bold '> JAVA FULL STACK DEVELOPMENT + MICROSERVICES</h1>
            <br/>
            <div className='max-w-[1300px] w-full h-[650px] mx-auto text-center flex flex-col justify-center border shadow-xl px-20 bg-[#E6ECF0] rounded-lg'>
                <h1 className='font-bold text-start'>Statement:</h1><br/>
                <p className='text-start'> Rama, working as Assistant Professor at K L University, needs to keep up the information about his students in his database. He wants to save student details such as Id, name, gender, department, program, date of birth, contact number, graduation status, CGPA, no of backlogs.</p>
                
                <table className='w-full text-left bg-white shadow rounded-lg mb-8'>
            <tbody>
              <tr>
                <td className='p-4 font-bold'>Submission Status:</td>
                <td className='p-4'>Submitted for grading</td>
              </tr>
              <tr className='bg-gray-100'>
                <td className='p-4 font-bold'>Grading Status:</td>
                <td className='p-4'>Not graded</td>
              </tr>
              <tr>
                <td className='p-4 font-bold'>Time Remaining:</td>
                <td className='p-4'>Assignment was submitted 2 days 8 hours early</td>
              </tr>
              <tr className='bg-gray-100'>
                <td className='p-4 font-bold'>Latest Modified:</td>
                <td className='p-4'>Monday, 30 September 2024, 3:16 PM</td>
              </tr>
              <tr>
                <td className='p-4 font-bold'>File Submission:</td>
                <td className='p-4'>file_name</td>
              </tr>
              <tr className='bg-gray-100'>
                <td className='p-4 font-bold'>Submission Comments:</td>
                <td className='p-4'>Comments (0)</td>
              </tr>
            </tbody>
          </table> 
                <div className=' flex justify-around w-[600px]'>
                
                <button className='bg-black text-white p-2 rounded'>Edit submission</button>
                <button className='bg-black text-white p-2 rounded'>Remove Submission</button>
                </div>
            </div>
         </div>
    </div>
  )
}
