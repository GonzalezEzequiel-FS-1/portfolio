import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavigationBar from './components/NavigationBar'

const App = () => {
  return (
    <Router>
      <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-start">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Future pages like /about, /projects can go here */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
