import React, { useState } from 'react'

const data = ['Learn React', 'Learn Redux', 'Learn Context']

export const Stepper = () => {
  const [active, setActive] = useState(1)
  const [open, isOpen] = useState(false)
  const nextButton = () => {
    if (active >= 3) {
      setActive(3)
    } else {
      setActive((prev) => (prev += 1))
    }
  }
  const prevButton = () => {
    if (active <= 1) {
      setActive(1)
    } else {
      setActive((prev) => (prev -= 1))
    }
  }

  const handleOpen = () => isOpen(!open)

  return (
    <div>
      <button
        className='bg-slate-900 mb-2 px-10 py-2 rounded-full shadow-md text-white hover:bg-slate-800'
        onClick={handleOpen}
      >
        {open ? 'Close' : 'Open'}
      </button>
      {open && (
        <div className='border bg-slate-100  m-auto p-10 rounded-md'>
          <div className='flex flex-row  justify-around items-center mb-4 text-white'>
            <h1
              className={`${
                active >= 1 ? 'bg-slate-950' : ''
              } bg-slate-300 rounded-full w-8 h-8 text-center flex items-center justify-center`}
            >
              1
            </h1>
            <h1
              className={`${
                active >= 2 ? 'bg-slate-950' : ''
              } bg-slate-300 rounded-full w-8 h-8 text-center flex items-center justify-center`}
            >
              2
            </h1>
            <h1
              className={`${
                active >= 3 ? 'bg-slate-950' : ''
              } bg-slate-300 rounded-full w-8 h-8 text-center flex items-center justify-center`}
            >
              3
            </h1>
          </div>
          <div className='flex items-center justify-center mb-4'>
            {data[active - 1]}
          </div>
          <div className='flex justify-around text-white'>
            <button
              className='bg-slate-900 px-10 py-2 rounded-full shadow-md hover:bg-slate-800'
              onClick={prevButton}
            >
              Prev
            </button>
            <button
              className='bg-slate-900 px-10 py-2 rounded-full shadow-md hover:bg-slate-800'
              onClick={nextButton}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
