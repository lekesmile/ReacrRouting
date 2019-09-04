import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Rejected Programmer Oy</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
           
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
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
                <ul class="nav navbar-nav navbar-right">
                    <li className="nav-item"><a className="nav-link" href="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li className="nav-item"><a className="nav-link" href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
            </div>
        </nav>
       
        
            // <nav class="navbar navbar-expend-lg navbar-dark bg-dark">
            //     <div class="container-fluid">
            //         <div class="navbar-header">
            //             <a class="navbar-brand" href="/"></a>
            //         </div>
            //     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            //         <li class="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
            //         <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
            //         <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            //         </ul>
            //         <ul class="nav navbar-nav navbar-right">
            //             <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            //             <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            //         </ul>
            //     </div>
            // </nav> 
            
      
    )
}

export default Header
