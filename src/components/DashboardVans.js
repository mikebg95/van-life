import { React, useEffect, useState } from 'react'
import DashboardVanTile from './DashboardVanTile'
import { Link } from 'react-router-dom'

const DashboardVans = ({ withButtons }) => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    }

    const [hostVans, setHostVans] = useState([])

    async function fetchHostVans() {
      fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setHostVans(data.vans))
    }

    useEffect(() => {
      fetchHostVans()
    }, [])

    useEffect(() => {
      console.log(hostVans)
    }, [hostVans])

    

    return (
      <section className="DashboardVans"> 
          <div className="top">
            <div>Your listed vans</div>
            {withButtons && <button className="details-btn">View all</button>}
          </div>
          {hostVans.length > 0 && <div className="van-tiles">
            {hostVans.map(van => (
              <Link to={`/host/vans/${van.id}`} style={linkStyle}>
                <DashboardVanTile key={van.id} van={van} withButton={withButtons} />
              </Link>
            ))}
          </div>}
          {hostVans.length === 0 && <h2 className="loading">Loading vans...</h2>}
      </section>
    )
}

export default DashboardVans
