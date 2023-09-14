import React from 'react'
import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <section className="Home">
          <h1>You got the travel plans, we got the travel vans.</h1>
          <div>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</div>
          
          <NavLink to="/vans">
            <button>Find your van</button>
          </NavLink>
        </section>
    )
}

export default Home
