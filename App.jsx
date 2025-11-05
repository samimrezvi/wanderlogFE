import { useState } from 'react'
import { NavbarLayout } from './COMPONENTS/navbar'
import { Hero1 } from './COMPONENTS/hero1'
import {  Home1, Home2, Home3, Home4,Home5, Home6 } from './COMPONENTS/places'
import { ThreeDCard, ThreeDCard2, ThreeDCard3, ThreeDCard4, ThreeDCard5, ThreeDCard6 } from './COMPONENTS/threeDcard'
import { Press } from './COMPONENTS/press'


function App() {


return (
<div>
  <div className='bg-black'>
     <NavbarLayout/>
  </div>

  <div className='flex justify-center mt-40'> 
      <Hero1/>
</div>

    <h1 className='flex justify-center text-5xl mt-30 font-bold'>Explore hundreds of places to visit</h1>
    <h1 className='flex justify-center text-5xl mt-10 font-bold'> for every corner of the world</h1>
<div className='-my-30'>
  <div className='flex flex-wrap justify-center gap-10'>
        <div><Home1 /></div>
        <div><Home2 /></div>
        <div><Home3 /></div>
  </div>
  <div className='flex flex-wrap justify-center gap-10 -my-100'>
          <div><Home4 /></div>
          <div><Home5 /></div>
<Home6/>
  </div>
</div>

<h1 className='flex justify-center text-5xl my-80 font-bold'>Features to replace all your other tools</h1>

<div className='bg-gray-100 -my-50 '>
   <div className='flex flex-wrap justify-center gap-10'>
          <ThreeDCard />
          <ThreeDCard2 />
          <ThreeDCard3 />
  </div>
   <div className='flex flex-wrap justify-center gap-10 -my-20'>
        <ThreeDCard4/>
        <ThreeDCard5/>
        <ThreeDCard6/>
  </div>
</div>

    <div className="flex justify-center mt-70 gap-20">
      <button className="w-90 bg-orange-500 text-white rounded-full pt-5 pb-5  text-xl hover:bg-orange-400 cursor-pointer ">Start planning</button>
      <button className=" hover:text-blue-500 border-1 w-90 rounded-full">Get the app</button>
    </div>

<div className='mt-40 bg-violet-100'>
      <h1 className='flex justify-center mb-10 text-5xl  font-bold'>Recommended by the press</h1>
      <h2 className="text-gray-500  text-lg flex justify-center">Leading companies and media outlets are talking about Wanderlog.</h2>
      <h2 className="text-gray-500  text-lg flex justify-center"> Discover why we're their top choice for travel planning.</h2>
    <div>
    <Press/>
  </div>
</div>


</div>
  )
}

export default App
