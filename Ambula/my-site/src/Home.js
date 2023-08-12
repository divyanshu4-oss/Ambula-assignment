import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Website</h1>
        <p>Our company provides you best services. We are excited to have you here!</p>
        <div className='flex'>
        <button className='btn btn-primary mx-2' onClick={()=> navigate("/TOdoList")}>TO-do_list</button>
        <button className='btn btn-primary mx-2' onClick={()=> navigate("/ShoppingCart")}>Shopping Cart</button>
        <button className='btn btn-primary mx-2' onClick={()=> navigate("/WeatherApp")}>Weather App</button>
        </div>
      </header>
    </div>
    </>
  )
}
