import React from 'react'
import { Link } from 'react-router-dom'
import { Agencies } from '../../assets/Directory'

const Agency = () => {
  return (
    <div className="grid sm:grid-cols-3">
    {Agencies.map((item) => (
      <div
        key={item.id}
        className="grid sm:px-8 px-5 py-12  lg:px-8 border cursor-pointer hover:shadow-lg relative before:contents() before:h-full before:w-0 before:top-0 before:left-0 before:bg-yellow-400 before:absolute hover:before:w-1.5"
      >
        
        <Link to={`/mdas/${item?.agency}`}> <h2 className="text-lg font-semibold capitalize sm:text-lg">
          {item?.agency}
        </h2>
        <h4 className="text-base sm:text-lg lg:w-72">{item?.desc}</h4>
        </Link>
      </div>
    ))}
  </div>
  )
}

export default Agency