import React from 'react'
import Loginimg from '../assets/login.png'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function AdminLoginPage() {
  return (
    <div className='max-w-[1300px] w-full h-[800px] mx-auto text-center flex flex-col justify-center border shadow-xl px-20 bg-[#E6ECF0] rounded-lg'>
      <div className='flex items-center justify-between '>
        <div className=''>
            <h1 className='text-6xl font-bold '>
                Welcome Back 
            </h1>
            <p className=' text-1xl text-left'>please enter your details</p>
            <br/>
            <form className='flex flex-col space-y-1'>
                <label className='text-3xl font-bold text-left'>Username</label>
                <input className='border p-2 ' type='text'  />
                <label className='text-3xl font-bold text-left'>Password</label>
                <input className='border p-2' type='password'/>
                <br/>
                <div className='flex'>
                    <MdOutlineCheckBoxOutlineBlank/>
                    <p className=''>remember for 30 days</p>
                </div>
                <p className='underline'> forgot password</p><br/>
                <button className='bg-blue-500 text-white p-2 rounded'><Link to="/adminhome">Sign in</Link></button>
            </form>
            {/* <button className='bg-blue-500 text-white p-2 rounded w-[400px]'><Link to="/adminhome">Sign in</Link></button> */}
        </div>
        <img className='w-[550px] mx-auto my-4' src={Loginimg} alt="/loginimage" />
      </div>
    </div>
  )
}
