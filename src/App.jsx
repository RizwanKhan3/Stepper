import { useState } from 'react'

import './App.css'
import { Logo } from './components/Logo.jsx'
import { Form } from './components/Form.jsx'
import { PackingList } from './components/PackingList.jsx'
import { Stats } from './components/Stats.jsx'

function App() {
  const [items, setItems] = useState([])
  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem])
  }

  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  const handleToggleItem = (id) => {
    setItems((items) => {
      return items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      )
    })
  }

  const handleClearList = () => {
    const confirmed = window.confirm('Are you sure you want to clear List!')
    if (confirmed) setItems([])
  }
  return (
    <div className='app'>
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        initial={items}
        deleteItem={deleteItem}
        handleToggleItem={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  )
}

export default App
