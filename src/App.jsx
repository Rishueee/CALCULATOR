import { useState } from 'react'
import './App.css'
import Key from './Components/Key'
import Display from './Components/Display'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='cont'>
        <Display />
        <Key/>
      </div>
    </>
  )
}

export default App
