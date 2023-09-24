import React from 'react'
import { Link } from 'react-router-dom'
import { MinistriesInfo } from '../../assets/Directory'

const Ministry = () => {
  return (
    <div className="grid sm:grid-cols-3">
      {MinistriesInfo.slice(6, 32).map((item) => (
        <div
          key={item.id}
          className="grid sm:px-8 px-2 py-9  lg:px-8 border cursor-pointer hover:shadow-lg relative before:contents() before:h-full before:w-0 before:top-0 before:left-0 before:bg-yellow-400 before:absolute hover:before:w-1.5"
        >
          
          <Link to={`/ministries/${item?.ministry}`}> <h2 className="text-lg font-semibold capitalize sm:text-lg">
            {item?.ministry}
          </h2></Link>
        </div>
      ))}
    </div>
  )
}

export default Ministry