import React from 'react'
import Typed from'react-typed'


function Hero() {
  return (
    <div className='text-white'>

    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
       <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.
       </h1>

       <div >
          <p className='md:text-5xl sm:text-4xl  text-xl font-bold'> Coding can power up your brain          </p>

        <Typed 
        className='md:text-5xl sm:text-4xl  text-xl font-bold pl-2'
         strings={['I' ,'am','a','Backend','Devloper']}
         typeSpeed={120}
         backSpeed={140}
         loop
        /> 
       </div>
    
    </div>

    </div>
  )
}

export default Hero