import React from 'react'

const RightCardContent = (props) => {
  return (
   
    <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-4' >
            <h2 className='bg-white rounded-full w-10 h-10 flex items-center justify-center font-semibold'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-100 pb-2 leading-normal text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum quo non voluptatibus quibusdam, numquam ea culpa, eum, vel unde fugit eos doloribus exercitationem.</p>
                <div className='flex justify-between '>
                  <button style={{backgroundColor:props.color}} className='  rounded-full px-8 py-2 text-white font-medium' >{props.tag}</button>
                  <button style={{backgroundColor:props.color}} className=' rounded-full text-white  px-3 py-2 font-medium'><i className="ri-arrow-right-line "></i></button>
                </div>
            </div>
    </div>
  )
}

export default RightCardContent
