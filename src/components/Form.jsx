import React, { useState } from 'react'

export const Form = ({ handleAddItem }) => {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description) return
    const newItem = { description, quantity, packed: false, id: Date.now() }
    handleAddItem(newItem)
    setDescription('')
    setQuantity(1)
  }

  return (
    <form className='add-form'>
      <h3>What do you want for your trip</h3>
      <select
        name='quantity'
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => {
          return (
            <option key={num} value={num}>
              {num}
            </option>
          )
        })}
      </select>
      <input
        type='text'
        name='description'
        placeholder='Item.....'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  )
}
