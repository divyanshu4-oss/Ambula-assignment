import React from 'react'
import  './About'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-dark bg-dark ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                            <Link to='./' className="nav-link text-white">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='./About' className="nav-link text-white">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='./Contact' className="nav-link text-white">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
    </>
  )
}