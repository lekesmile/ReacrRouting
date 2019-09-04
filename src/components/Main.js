import React from 'react'

const Main = (props) => {
   const handleClick = ()=>{
       alert('clicked')
    }
    return (
        <div className="main">
           <h1>{props.title}</h1> 
           <p> {props.text} </p>

           <button className="btn btn-primary" onClick={handleClick}>Click me!</button>
        </div>
       
    )
}

export default Main
