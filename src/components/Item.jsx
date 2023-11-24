import React from 'react'

export const Item = ({ item, deleteItem, handleToggle }) => {
  const { packed, description, quantity, id } = item
  return (
    <li>
      <input
        type='checkbox'
        name=''
        value={packed}
        onChange={() => handleToggle(id)}
        id=''
      />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => deleteItem(id)}>❌</button>
    </li>
  )
}
