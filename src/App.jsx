import { useState } from 'react'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'


import { NavBar } from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <NavBar />
        <div className='content'>
          <Header />
          <MainContent />
        </div>
      </div>
    </>
  )
}

export default App
