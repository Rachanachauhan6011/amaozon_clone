import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProductCard from './components/ProductCard'
import ProductCards2 from './components/ProductCards2'
import ProductCard3 from './components/ProductCard3'
import ProductCard4 from './components/ProductCard4'
import ProductCard5 from './components/ProductCard5'
import ProductCard6 from './components/productCard6'
import ProductCard7 from './components/ProductCard7'
import ProductCard8 from './components/ProductCard8'
import ProductCard9 from './components/ProductCard9'
import image from "./assets/bg image.jpg"
function App() {


  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <div className='bg-gray-100 h-auto  w-full  '>
        <img src={image} alt="" className='h-80 w-full ' />
        <div className=' h-auto inline '>
          <ProductCard />
          < ProductCards2 />
          <ProductCard3 />
          <ProductCard4 />
          <ProductCard5 />
          <ProductCard6 />
          <ProductCard7 />
          <ProductCard8 />
          <ProductCard9 />
          <div className='w-full h-auto mt-5 bg-white text-center border-t-1 border-b-1 border-gray-200 '>
            <h1 className='font-bold text-center text-2xl pt-5'>See personalized recommendations</h1>
            <button className='bg-yellow-300 w-60 h-8 items-center justify-center mt-4 rounded-full cursor-pointer hover:bg-yellow-400'>Sign in</button>
            <h1 className='text-xs '>New customer? <button className='text-xs text-blue-600 cursor-pointer hover:underline'>Start here</button></h1>

          </div>
        </div>
        </div>

      <Footer />
    </BrowserRouter>



  )
}

export default App
