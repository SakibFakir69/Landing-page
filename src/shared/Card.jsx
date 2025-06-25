


import React from 'react'

function Card({    description, title,id,img}) {
  return (
    <div>

        <div className='flex flex-col items-center justify-center gap-y-6 shadow-xl rounded p-2 px-3'>

            <div className=''>
                <img src={img} className='rounded'/>
            </div>
            <div className='flex flex-col gap-y-4'>
                <h1 className='md:text-4xl text-2xl font-semibold text-black'>{title}</h1>
                <p className='text-black'>{description}</p>
            </div>
            <button className='px-10 py-3 bg-blue-400 text-white cursor-pointer rounded hover:bg-blue-200 hover:text-black mb-3'>Read More</button>

        </div>





    </div>
  )
}

export default Card