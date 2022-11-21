import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Card'
import data from './data'

function App() {
  const [count, setCount] = useState(0)

  const cards = data.map(item => {
    return (
      <Card 
      key={item.id}
      item={item}
    
    />
    )
  }
    
    
    )

  return (
    <>
    <Navbar />
    {cards}

    </>
  )
}

export default App