import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar_list">
                <li className="navbar_item" ><a className="navbar_link" href="#form">Employees</a></li>
                <li className="navbar_item"><a className="navbar_link" href="#office">Offices</a></li>
            </ul>
        </nav>
    )
}

export default Navbar