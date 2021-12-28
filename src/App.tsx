import { useState } from 'react'
import './App.css'
import { D3Sample } from './D3Sample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div><D3Sample /></div>
      </header>
    </div>
  )
}

export default App
