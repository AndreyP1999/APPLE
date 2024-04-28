import { useState } from 'react'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'


import { NavBar } from './components/NavBar'
import ModalWindows from './UI/ModalWindows/page';
function App() {
  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = ({ target }) => {
    console.log(target.getAttribute("data-dontWorking"))
    if (target.getAttribute("data-dontWorking") === "true") {
      alert("This feature is not working");
      setIsModalOpen(true);
    }
  }
  return (
    <>
      {isModalOpen ? <ModalWindows children={<h1>данная часть не работает</h1>} setIsModalOpen={setIsModalOpen} /> : null}
      <div className='container' onClick={openModal}>
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
