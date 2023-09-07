import React from 'react'
import img from "../img/about-img.png"


const About = () => {
    return (
        <section className="About">
          <div className="img-container">
            <img src={img} />
          </div>
    
          <div className="content">
            <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
    
            <div className="text">
              Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br/>
              (Hitch costs extra 😉)<br/><br/>
    
              Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </div>
    
            <div className="colored-block">
              <div>
                Your destination is waiting. <br/>
                Your van is ready.
              </div>
    
              <button>
                <span>Explore our vans</span>
              </button>
            </div>
          </div>
        </section>
      )
}

export default About
