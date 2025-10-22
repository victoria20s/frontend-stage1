import { Routes, Route, NavLink } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
        <NavLink to="/about" className="nav-link">About Me</NavLink>
      </nav>

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
