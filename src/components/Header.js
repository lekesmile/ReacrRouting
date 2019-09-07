import React from 'react'
import { FaUserPlus } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';




const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a className="navbar-brand text-danger" href="/">Rejected Programmer Oy</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarNav">

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/users">Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>

                </ul>


                <ul className="navbar-nav mr-sm-2">
                    <li className="nav-item"><a className="nav-link" href="/signup"> <FaUserPlus /> Sign Up</a></li>
                    <li className="nav-item"><a className="nav-link" href="/login"> <FaUserTie /> Login</a></li>
                </ul>
            </div>


        </nav>

    )
}

export default Header
