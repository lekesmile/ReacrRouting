import React from 'react'
import { FaUserPlus } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom'




const Header = () => {
    return (

        <nav className="  navbar navbar-expand-lg navbar-dark bg-dark ">
            <Link className="navbar-brand text-danger" to="/">Programming Angels Oy</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarTogglerDemo02">

                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 float-left ">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>

                </ul>


                <ul className="navbar-nav mt-2 mr-sm-2 float-right ">
                    <li className="nav-item"><Link className="nav-link" to="/signup"> <FaUserPlus /> Sign Up</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login"> <FaUserTie /> Login</Link></li>
                </ul>
            </div>


        </nav>

    )
}

export default Header
