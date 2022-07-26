import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import From from './components/from'
import Fromof from './components/fromof'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<From/>} />
      <Route path='/foter' element={<Fromof/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App