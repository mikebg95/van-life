import React from 'react'
import { BsFillStarFill } from "react-icons/bs"
import DashboardVans from './DashboardVans'

const Dashboard = () => {
  return (
    <section className="Dashboard">
      <section className="dashboard-income">
        <div className="welcome">Welcome!</div>
        <div className="time-section">
          <span>Income last <span className="days">30 days</span></span>
          <button className="details-btn">Details</button>
        </div>
        <div className="amount">$2,260</div>
      </section>

      <section className="dashboard-reviews">
        <div className="score-section">
          <div className="text">Review score</div>
          <div className="rating">
            <BsFillStarFill />
            <span>5.0</span>/5
          </div>
        </div>
        <button className="details-btn">Details</button>
      </section>

      <DashboardVans withButtons={true} />
    </section>
  )
}

export default Dashboard
