import React, { useRef, useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavigationBar from './components/NavigationBar'

const App = () => {
  const homeRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  return (
    <Router>
      <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-start">
        {/* Pass scroll container ref */}
        <NavigationBar scrollY={scrollY} />

        <Routes>
          <Route path="/" element={<Home ref={homeRef} onScrollChange={setScrollY} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
