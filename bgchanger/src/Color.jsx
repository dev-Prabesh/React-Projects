import React, { useState } from 'react'

const Color = () => {
  
    let [bgcol, changebgcol] = useState("black")

  return (
    <div style={{background: bgcol}} className=' h-[100%] w-[100%] '>

        <div className="colorcontainer bg-white px-2 rounded-xl py-4 absolute flex gap-10 justify-center">
            <div onClick={() => {
                changebgcol("red")
            }} id="red" className='bg-red-500 px-4 py-2 rounded-lg'>red</div>
            <div onClick={() => {
                changebgcol("green")
            }} id="green" className='bg-green-500 px-4 py-2 rounded-lg'>green</div>
            <div onClick={() => {
                changebgcol(("blue"))
            }} id="blue" className='bg-blue-500 px-4 py-2 rounded-lg'>blue</div>
            <div onClick={() => {
                changebgcol("purple")
            }} id="purple" className='bg-purple-500 px-4 py-2 rounded-lg'>purple</div>
        </div>
    </div>
  )
}

export default Color