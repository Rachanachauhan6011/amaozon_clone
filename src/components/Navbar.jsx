import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-sky-950 h-12  text-white'>
      <ul className='flex   m-4 items-center justify-center text-[13px]  '>
        <li className=' hover:border-1 px-2 py-[10px] rounded-sm border-solid cursor-pointer'>All</li>
        <li className=' hover:border-1 px-2 py-[10px] rounded-sm border-solid cursor-pointer'>Fresh</li>
        <li className=' hover:border-1 px-2 py-[10px] rounded-sm  border-solid cursor-pointer'>Mx Player</li>
        <li className=' hover:border-1 px-2 py-[10px] rounded-sm border-solid cursor-pointer'>Sell</li>
        <li className=' hover:border-1 px-2 py-[10px] rounded-sm border-solid cursor-pointer'>Bestseller</li>
        <li className=' hover:border-1 px-2 py-[10px] rounded-sm border-solid cursor-pointer'>Mobile</li>
        <li className=' hover:border-1 px-2 py-[10px] rounded-sm border-solid cursor-pointer'>Today's Deals</li>
        <li className=' hover:border-1 px-2 py-[10px] rounded-sm  border-solid cursor-pointer'>Prime</li>
        <li className=' hover:border-1 px-2 py-[10px] rounded-sm border-solid cursor-pointer'>CustomerService</li>
        <li className=' hover:border-1 px-2 py-[10px] rounded-sm border-solid cursor-pointer'>Electronics</li>
        <li className=' hover:border-1 px-2 py-[10px] rounded-sm  border-solid cursor-pointer'>Fashion</li>
        <li className=' hover:border-1 px-2 py-[10px] rounded-sm border-solid cursor-pointer'>New Releases</li>
        <li className=' hover:border-1 px-2 py-[10px] rounded-sm  border-solid cursor-pointer'>Home & kitchen</li>
      </ul>
      <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/August2025/HariHarVeeraMallu-ent/400x39-SWM_NP._CB802509678_.jpg" alt="" className='hover:border-1 border-solid duration-100 cursor-pointer' />
    </div>
  )
}

export default Navbar