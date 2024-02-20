import React from 'react'
import { OverviewPage } from '../../assets/AboutData'
import Form from './Form'

const Overview = () => {

  return (
    <>
      <div>
      {
        OverviewPage.map((overview, index) => (
          <div key={index} className='overflow-x-hidden '>
             <div>
             <h1 className='text-3xl font-bold sm:text-4xl '>{overview?.title}</h1>
              <h4 className='py-4 text-lg font-bold uppercase sm:text-xl'> {overview?.subTitle}</h4>
              <p className='text-[16.5px] py-2'>{overview?.VisionDesc1}</p>
              <p className='text-[16.5px] py-5'>{overview?.VisionDesc2}</p>
              <p className='text-[16.5px] pt-4'>{overview?.VisionDesc3}</p>
             </div>
             <div  className='text-[16.5px] px-4 sm:px-12 pt-1 pb-4'>
              <p>-Nana Addo Dankawa Akuffo Addo.</p>
              <p>President of the Republic of Ghana</p>
             </div>
            <div className='relative'>
                <img src="/images/nana-addo.jpg" className='object-cover h-80 sm:h-full' alt="" />
                <h4 className='absolute bottom-0 left-0 px-3 py-2 bg-white w-96'>President Nana Addo Dankwa Akuffo </h4>
            </div>
            <div className='pt-8'>
               <h1 className='py-3 text-xl font-bold uppercase'>{overview?.backgroundtitle}</h1>
               <p className='text-[16.5px] py-2'>{overview?.backgrounddesc1}</p>
               <p className='text-[16.5px] py-5'>{overview?.backgrounddesc2}</p>
               <p className='text-[16.5px] py-2'>{overview?.backgrounddesc3}</p>
            </div>
            <div className='py-4'>
               <h1 className='py-3 text-xl font-bold uppercase'>{overview?.generalTitle}</h1>
               <h4 className='text-[17px] py-2 font-bold'>{overview?.generalSubTitle}</h4>
               <p className='text-[16.5px] py-2'>{overview?.generalDesc1}</p>
               <p className='text-[16.5px] py-5'>{overview?.generalDesc2}</p>
              <div>
              <div>
              <h4 className='text-[16.5px] py-4'>{overview?.portalTitle}</h4>
              <ul className='list-decimal '>
                <li className='text-[16.5px] py-2'>{overview?.portalStep1}</li>
                <li className='text-[16.5px] py-2'>{overview?.portalStep2}</li>
              </ul>
              </div>
              </div>
            </div>
            <div className='py-4'>
            <h1 className='py-3 text-xl font-bold uppercase'>{overview?.approachTitle}</h1>
               <p className='text-[16.5px] py-2'>{overview?.approachDesc1}</p>
               <p className='text-[16.5px] py-2'>{overview?.approachDesc2}</p>
               <p className='text-[16.5px] py-5'>{overview?.approachDesc3}</p>
            </div>
          </div>
        ))
      }
      </div>
      <Form />
    </>
  )
}

export default Overview