import React from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import './index.css'
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
   <BrowserRouter>
   <header className="">
    <Link to="/">#VANLIFE</Link>
    <nav>
        <Link to="/about">About</Link>
    </nav>
   </header>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />} />
   {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
   </Routes>
   </BrowserRouter>

  )
}

export default App