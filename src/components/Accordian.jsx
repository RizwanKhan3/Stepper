import React, { useState } from 'react'

export const Accordian = ({ item, num, curOpen, onOpen }) => {
  const { id, title, content } = item
  const isOpen = num === curOpen

  const handleToggle = () => {
    onOpen(isOpen ? null : num)
  }
  return (
    <div className='flex flex-col justify-center items-center   shadow-md mt-10 m-auto bg-slate-50 w-6/12'>
      <div
        onClick={handleToggle}
        className={`${
          isOpen ? 'border-t-2 ' : ''
        }flex flex-row   items-center cursor-pointer border-green-500 px-5 py-5  w-full  justify-between`}
      >
        <em>{num < 9 ? `0${num + 1}` : `${num + 1}`}</em>
        <h3>{title}</h3>
        <button>{isOpen ? '-' : '+'}</button>
      </div>
      <div className='flex px-10 text-left text-2xl'>
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  )
}
