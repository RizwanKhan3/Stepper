import React, { useState } from 'react'

import { Item } from './Item.jsx'

export const PackingList = ({
  initial,
  deleteItem,
  handleToggleItem,
  handleClearList,
}) => {
  const [sortBy, setSortBy] = useState('input')
  let sortedItems
  if (sortBy === 'input') {
    sortedItems = initial
  }
  if (sortBy === 'description') {
    sortedItems = initial
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))
  }

  if (sortBy === 'packed') {
    sortedItems = initial
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed))
  }
  console.log(sortedItems)
  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              deleteItem={deleteItem}
              handleToggle={handleToggleItem}
            />
          )
        })}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort By Input</option>
          <option value='description'>Sort By description</option>
          <option value='packed'>Sort By Packed</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  )
}
