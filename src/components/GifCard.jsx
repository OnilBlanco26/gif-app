import React from 'react'

const GifCard = ({title, url}) => {



  return (
    <div className='rounded-md w-auto h-auto overflow-hidden bg-white text-black flex flex-col items-center'>
        <img className='w-96 h-96' src={url} alt="" />
        <p>{title}</p>
    </div>
  )
}

export default GifCard