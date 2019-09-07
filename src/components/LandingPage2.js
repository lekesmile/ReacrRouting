import React from 'react'
import image5 from '../images/image5.png'


const LandingPage2 = (props) => {
    const handleClick = () => {
        alert('clicked')
    }
    return (
        <div className="main">
            <div className="jumbotron">
                <div className="row">
                    <div className="float-left">
                        <img src={image5} alt="image5" />
                    </div>
                    <div className="float-right mx-auto">
                        <h1 className="display-4">We create <span className="display-3 text-danger font-italic"><u>Software</u></span></h1>
                        <p className="">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt omnis iusto magnam placeat magni eius corporis natus odit. </p>

                        <p>Facilis nostrum sapiente nisi laboriosam praesentium, est hic quisquam ex a, error explicabo eius consequuntur.</p>
                        <button className="btn btn-primary" onClick={handleClick}>Sign Up!</button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default LandingPage2
