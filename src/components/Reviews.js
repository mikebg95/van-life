import React from 'react'
import { BsFillStarFill } from "react-icons/bs"

const Reviews = () => {
  return (
    <section className="Reviews">
      <section className="top">
        <div className="title">Your reviews</div>
        <div>last <span>30 days</span></div>
      </section>

      <section className="overview">
        <div className="score">
          <span>5.0</span>
        </div>
        <BsFillStarFill />
        <span>overall rating</span>
      </section>

      <section className="charts">
        Charts
      </section>
    </section>
  )
}

export default Reviews
