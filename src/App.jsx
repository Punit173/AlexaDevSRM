import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Events from './components/Events'
import Ourteam from './components/Ourteam'
import Blogs from './components/Blogs'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Events />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  )
}

export default App
