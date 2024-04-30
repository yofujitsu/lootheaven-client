import { useEffect, useState } from 'react'
import './App.css'
import { Auth } from './components/Auth'
import { Catalog } from './components/Catalog'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/auth' element={<Auth/>}></Route>
        <Route path='/catalog' element={<Catalog/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
