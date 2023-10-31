import React from 'react'
import { Link } from 'react-router-dom'
function Resta() {
  return (
    <>
    <div className="container">
    <div className="row mt-5 pt-5 text-center">
        <Link to='/pizza' className=' col-md-4 text-decoration-none card'>Pizza</Link>
        <Link to='/onion' className=' col-md-4 text-decoration-none card'>Onion</Link>
        <Link to='/salad' className=' col-md-4 text-decoration-none card'>Salad</Link>
    </div>
    </div>
    </>
  )
}

export default Resta