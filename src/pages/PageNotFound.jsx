import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='grid h-full py-20 sm:py-10 md:py-20 place-content-center place-items-center'>
      <div className='relative'>
        <h1 className='text-gray-100 text-[12rem] md:text-[20rem] font-bold'>404</h1>
      <div className='absolute grid top-8 md:top-40 place-items-center gap-y-4'>
      <img src="/images/favicon.png" alt="" className='h-20'/>
      <h1 className='text-lg font-semibold'>Something went wrong..</h1>
      <p className='text-lg text-center'>Apologies. Something went wrong. Please click on the button below and try again</p>
      <Link to="/"><button className='px-4 py-2 text-white bg-black'>Take me home</button></Link>
      </div>
      </div>
    </div>
  )
}

export default PageNotFound