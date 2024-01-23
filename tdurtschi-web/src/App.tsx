import { useState } from 'react'
import './App.css'
import Header from './Header'
import HomePage from './views/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HomePage/>
    </>
  )
}

export default App
