import React from 'react'

const Footer = () => {
  return (
    <footer className=' text-gray-200'>
      <div className='bg-slate-800 w-full h-auto'>
      <div className='text-center max-w-4xl mx-auto mb-3'>
        <a href="">Back to Top</a>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-t border-gray-700 pt-10">
        <div >
          <h3 className='font-semibold text-white mb-3'> Get to Know Us</h3>
          <ul className='space-y-2 text-sm'>
            <li className='hover:underline '>About Amazon</li>
            <li className='hover:underline '>Careers</li>
            <li className='hover:underline '>Press Releases</li>
            <li className='hover:underline '>Amazon Science</li>

          </ul>
        </div>
        <div >
          <h3 className='font-semibold text-white mb-3'> Connect with Us</h3>
          <ul className='space-y-2 text-sm'>
            <li className='hover:underline '>Facebook</li>
            <li className='hover:underline '>Twitter</li>
            <li className='hover:underline '>Instagram</li>

          </ul>
        </div>
        <div >
          <h3 className='font-semibold text-white mb-3'> Make Money with Us</h3>
          <ul className='space-y-2 text-sm'>
            <li className='hover:underline '>Sell on Amazon</li>
            <li className='hover:underline '>Sell under Amazon Accelerator</li>
            <li className='hover:underline '>Protect and Build Your Brand</li>
            <li className='hover:underline '>Amazon Global Selling</li>
            <li className='hover:underline '>Supply to Amazon</li>
            <li className='hover:underline '>Become an Affiliate</li>
            <li className='hover:underline '>Fulfilment by Amazon</li>
            <li className='hover:underline '>Advertise Your Products</li>
            <li className='hover:underline '>Amazon Pay on Merchants</li>
          </ul>
        </div>

        <div >
          <h3 className='font-semibold text-white mb-3'>Let Us Help You</h3>
          <ul className='space-y-2 text-sm'>
            <li className='hover:underline '>Your Account</li>
            <li className='hover:underline '>Returns Centre</li>
            <li className='hover:underline '>Recalls and Product Safety Alerts</li>
            <li className='hover:underline '>100% Purchase Protection</li>
            <li className='hover:underline '>Amazon App Download</li>
            <li className='hover:underline '>Help</li>
          </ul>
        </div>
      </div>
      </div>
      <div className=' bg-slate-950 text-gray-200 pt-5 '>
        <div className='max-w-3xl mx-auto gap-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pb-12 p-10'>
          <div >

            <ul className='space-y-2 text-sm'>
              <li className='hover:underline '> <h3 className='font-semibold text-xs text-white mb-3'> AbeBooks</h3>
                <h3 className='text-gray-500'>Books,Art & Collectibles</h3></li>
            </ul><br /><br />
            <ul className='space-y-2 text-sm'>
              <li className='hover:underline '> <h3 className='font-semibold text-xs text-white mb-3'> Sopbop</h3>
                <h3 className='text-gray-500'>Designer Fashion Brand</h3></li>
            </ul>
          </div>
          <div >

            <ul className='space-y-2 text-sm'>
              <li className='hover:underline '> <h3 className='font-semibold text-xs text-white mb-3'> Amazon Web Services</h3>
                <h3 className='text-gray-500'>Scalable Cloud Computing Services</h3></li>
            </ul><br /><br />
            <ul className='space-y-2 text-sm'>
              <li className='hover:underline '> <h3 className='font-semibold text-xs text-white mb-3'> Amazon Business</h3>
                <h3 className='text-gray-500'>Everything For Your Business</h3></li>
            </ul>
          </div>

          <div >

            <ul className='space-y-2 text-sm'>
              <li className='hover:underline '> <h3 className='font-semibold text-xs text-white mb-3'> Audible</h3>
                <h3 className='text-gray-500'>Download Audio Books</h3></li>
            </ul><br /><br />
            <ul className='space-y-2 text-sm'>
              <li className='hover:underline '> <h3 className='font-semibold text-xs text-white mb-3'> Prime Now</h3>
                <h3 className='text-gray-500'>2-Hour Delivery on Everyday Items</h3></li>
            </ul>
          </div>

          <div >

            <ul className='space-y-2 text-sm'>
              <li className='hover:underline '> <h3 className='font-semibold text-xs text-white mb-3'> IMDb</h3>
                <h3 className='text-gray-500'>Movies, TV & Celebrities</h3></li>
            </ul><br /><br />
            <ul className='space-y-2 text-sm'>
              <li className='hover:underline '> <h3 className='font-semibold text-xs text-white mb-3'> Amazon Prime Music</h3>
                <h3 className='text-gray-500'>100 million songs, ad-freeOver 15 million podcast episodes</h3></li>
            </ul>
          </div>
        </div>
        <div className='text-center pb-7'>
          <div className='p-4 text-gray-200 text-xs'><a href="" className='hover:underline p-2'>Conditions of Use & Sale  </a> <a href="" className='hover:underline p-2'> Privacy Notice  </a><a href="" className='hover:underline p-2'> Interest-Based Ads  </a>
          <h1 className='text-gray-200 text-xs p'>© 1996-2025, Amazon.com, Inc. or its affiliates</h1>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer