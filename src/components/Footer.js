import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"


const Footer = () => {
    return (
        <div className="headfoot">
            <div className="row">
                <div className="col-md-4">
                    <h3>Yhteystiedot</h3>
                    <p>Where we are </p>
                    <em>Helsinginkatu 10 </em>
                    <em>Pasila, Helsinki</em>
                </div>
                <div className="col-md-4">
                    <h3> Partner with us </h3>
                    <p> Never a boring day with us ! </p>
                </div>
                <div className="col-md-4 ">
                    <h3> Seuraa meitä </h3>
                    <div className="row mx-auto social">
                        <p> <FaFacebookF /> </p>
                        <p> <FaInstagram /></p>
                        <p> <FaLinkedinIn /></p>
                    </div>
                </div>
            </div>
            <p> © 2019 – All Rights Reserved</p>
        </div>
    )
}

export default Footer
