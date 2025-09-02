import React from 'react'
import {MapPin} from "lucide-react"
import { Search } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'

const Header = () => {
  return (
    <div className='bg-slate-950 flex items-center justify-between p-3 text-white h-15'>
      <div className='flex items-center text-white gap-3'><a className='text-3xl hover:border-solid-white hover:border-1 px-2 py-[10px] rounded-sm  border-solid cursor-pointer'>Amazon</a>
      <a href="" className='hover:border-1  py-[7px] rounded-sm  border-solid cursor-pointer'><h1 className='text-gray-600 text-xs'>Delivering to lucknow</h1> <h1 className='flex gap-1 text-xs'> <MapPin />Update Location</h1></a>
      </div>
      <div className='flex  items-center justify-between w-1/2 p-4'>
      <button className='bg-gray-300 p-2 rounded-l-md border w-15 cursor-pointer'>All</button>
        <input type="text" placeholder='Search Amazon.in' className='bg-white text-gray-700 border p-2  w-full' />
        <button className='bg-yellow-400 p-2 rounded-r-md border cursor-pointer'><Search/></button>
      </div>
      <div className='flex items-center justify-between '>
        <h1 className='flex items-center justify-center p-2 hover:border-1 px-2 py-[10px] rounded-sm  border-solid cursor-pointer'><img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/640px-Flag_of_India.svg.png" alt="" className='h-5 flex' />EN</h1>
        <a href="#"><h1 className='flex text-[13px] hover:border-1 px-2 py-[10px] rounded-sm  border-solid cursor-pointer'>Hello,sign in Account & Lists</h1></a>
        <a href="#"><h1 className='flex  text-[13px] hover:border-1 px-2 py-[10px] rounded-sm  border-solid v'>Return & Order</h1></a>
        <a href="#" className='flex text-[13px] hover:border-1 px-2 py-[10px] rounded-sm  border-solid v'><ShoppingCart />Cart</a>
        

      
      </div>
   
    </div>
  )
}

export default Header