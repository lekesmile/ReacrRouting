import React from 'react'
import { FaUserPlus } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom'




const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <Link className="navbar-brand text-danger" to="/">Programming Angels Oy</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarNav">

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>

                </ul>


                <ul className="navbar-nav mr-sm-2">
                    <li className="nav-item"><Link className="nav-link" to="/signup"> <FaUserPlus /> Sign Up</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login"> <FaUserTie /> Login</Link></li>
                </ul>
            </div>


        </nav>

    )
}

export default Header
