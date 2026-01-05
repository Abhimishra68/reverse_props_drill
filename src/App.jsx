import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [Theme, setTheme] = useState('light')
  
  return (
    <div>
       <h1>Theme is {Theme}</h1>

       <Navbar theme={Theme} set={setTheme} />
    </div>
  )
}

export default App