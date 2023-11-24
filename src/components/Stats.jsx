import React from 'react'

export const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className='stats'>
        <em>Start Adding Items</em>
      </p>
    )
  }
  const numsItem = items.length
  const numPacked = items.filter((item) => item.packed).length
  const percentage = Math.round((numPacked / numsItem) * 100)

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'Ready To Goo'
          : `You Have ${numsItem} Items on your list, and you already packed (
        ${numPacked}) %${percentage}`}
      </em>
    </footer>
  )
}
