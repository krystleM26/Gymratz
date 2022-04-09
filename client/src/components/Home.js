import React from 'react'
import logo from '../img/logo.png'
import {  Navigate } from 'react-router-dom'

const Home =() => {
  
  
    return (

        <div>
          <h1>Welcome Gymratz</h1>
          <div className='info'>

          <h2> We are your one stop shop to get all of the best workout classes anyplace in the world, simply register and/or login to schedule your next favorite workout today!</h2>
    
          </div>
          <div>
            <img src={logo} alt="Cartoon Rat Holding dumbbells" width="500" height="600"></img>
          </div>
        </div>
    )
}

export default Home