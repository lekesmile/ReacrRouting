import React from 'react'
import Jumbotron from '../components/Jumbotron'
import LandingPage1 from '../components/LandingPage1'
import LandingPage2 from '../components/LandingPage2'
import Look from '../components/Look'


const home = () => {
    return (
        <div>
         <Jumbotron />
         <LandingPage1 />
         <LandingPage2 />
         <Look />
        </div>

    )
}

export default home
