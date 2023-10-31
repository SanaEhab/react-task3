import React from 'react'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Resta from './components/rest/Resta'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pizza from './components/pizza/Pizza'
import Onion from './components/onion/Onion'
import Salad from './components/salad/Salad'


function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/restaurant' element={<Resta/>}></Route>
        <Route path='/pizza' element={<Pizza/>}></Route>
        <Route path='/onion' element={<Onion/>}></Route>
        <Route path='/salad' element={<Salad/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App