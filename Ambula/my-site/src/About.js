import './App.css';
import React from 'react'
import Navbar from './Navbar'

export default function About() {
  return (
    <>
    <Navbar/>
    <header className="App-header">
        <h1>About Us</h1>
        <p>Our company provides you 3 services : weather app , to-do-list and shopping cart</p>
        <p>Weather app with give you the details about any city you provide in the search box.</p>
        <p>TO-do-List app will help you Users can add new tasks to the to-do list. <br/> Users can mark tasks as completed or remove them from the list. <br />Display the total number of tasks and the number of completed task.</p>
        <p>With shopping cart application users can add items , remove items , display total number of items in the cart and the subtotal. </p>
        <h3>
            Team Members
        </h3>
        <p>Divyanshu Kumar</p>
      </header>
    </>
  )
}
