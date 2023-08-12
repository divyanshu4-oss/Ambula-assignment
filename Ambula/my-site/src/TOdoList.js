import React from 'react'
import React, { useState, useEffect } from 'react';

export default function TOdoList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('itemsJson')) || [];
        setItems(storedItems);
    }, []);

    const getAndUpdate = () => {
        console.log("Updating List...");
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;

        if (title.trim() !== '' && description.trim() !== '') {
            const updatedItems = [...items, [title, description]];
            setItems(updatedItems);
            localStorage.setItem('itemsJson', JSON.stringify(updatedItems));

            // Clear input fields after adding
            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
        }
    }

    const handleDelete = (itemIndex) => {
        console.log("Delete", itemIndex);
        const updatedItems = items.filter((_, index) => index !== itemIndex);
        setItems(updatedItems);
        localStorage.setItem('itemsJson', JSON.stringify(updatedItems));
    }

    const handleClearStorage = () => {
        if (window.confirm("Do you really want to clear?")) {
            console.log('Clearing the storage');
            setItems([]);
            localStorage.removeItem('itemsJson');
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-dark bg-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/">To-DO-List</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">About</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="container my-4">
                <h2 className="text-center">TODOs List</h2>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-dark">Add an item to the list</small>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows={3} defaultValue={""} />
                </div>
                <button id="add" className="btn btn-primary " onClick={getAndUpdate}>Add to list</button>
                <button id="clear" className="btn btn-primary mx-3" onClick={handleClearStorage}>Clear list</button>
                <div id="items" className="my-4">
                    <h2>Your Items</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">SNo</th>
                                <th scope="col">Item Title</th>
                                <th scope="col">Item Description</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody id="tableBody">
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary" onClick={() => handleDelete(index)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
