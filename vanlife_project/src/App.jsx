import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App