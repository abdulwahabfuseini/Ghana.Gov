import React from 'react'
import Form from './Form'

const Support = () => {
  return (
    <div>
      <h1 className="text-xl font-bold ">Help and Suport</h1>
      <div className='py-6'>
      <details className='border'>
         <summary className='px-4 py-4 font-bold border-b'>National Infomation Technology Agency Call Center</summary>
         <ul className='px-5 py-4 leading-10'>
           <li><a href='mailto: help@gmail.com'>Email us on: help@ghana.gov.gh</a></li>
           <li><a href='tel: 0307000575'>Call us on: 0307000575</a></li>
           <li>Visit us: Ministry of Communications Office Complex, 1st Floor Abdul Diof Road, Ridge. Accra.</li>
         </ul>
      </details>
      </div>
      <Form />
    </div>
  )
}

export default Support