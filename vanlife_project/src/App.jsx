import React from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import './index.css'
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
   <BrowserRouter>
   <header className="h-[110px] flex items-center py-2.5">
    <Link to="/" className="text-black mr-auto uppercase font-black text-[25px] p-5">#VANLIFE</Link>
    <nav>
        <Link to="/about" className="no-underline text-[#4D4D4D] font-semibold py-1.5 px-5 hover:text-[#161616] hover:underline">About</Link>
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