import {React, useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [nav , setNav] = useState(true)

    const handleNav =() =>{
        setNav(!nav)
    }
  return (
    <div className= 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black ' >
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LOGO.</h1>
        <ul className='flex font-bold '>
            <li className='p-4'><Link to="/" >Home</Link></li>
            <li className='p-4'><Link to="/about" >About</Link></li>
            <li className='p-4'><Link to="/contact">Contact</Link></li>
            <li className='p-4'><Link to="/adminlogin" > AdminLogin</Link></li>
        </ul>
        <button className=' bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'><Link to="/login" >Login</Link></button>
        {/* <div onClick={handleNav} className='block md:hidden'>
            { !nav? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>}
            */}
        {/* </div>
        <div className={ !nav? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#ffffff] ease-in-out duration-500' :'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>LOGO.</h1>
        <ul className='uppercase p-4 font-bold'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
            <li className='p-4 border-b border-gray-600'>Instructions</li>
        </ul>
        </div> */}
    </div>
  )
}
