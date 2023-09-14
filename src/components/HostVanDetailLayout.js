import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi"
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const HostVanDetailLayout = () => {
    const [van, setVan] = useState(null)
    const { id } = useParams()

    const activeStyle = {
        color: "#161616",
        textDecoration: "underline",
        fontWeight: "700",
    }       

  async function fetchVan() {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans[0]))
  }

  useEffect(() => { 
    fetchVan()
  }, [])

  useEffect(() => {
    console.log(van)
  }, [van])

  return (
    <section className="HostVanDetail">
      <Link to=".." className="back">
        <BiArrowBack />
        <span>Back to all vans</span>
      </Link>

      {van && <section className="content">
        <div className="top">
          <div className="img-container">
            <img src={van.imageUrl} alt={van.name} />
          </div>

          <div className="info">
            <button>
              {van.type.substring(0, 1).toUpperCase() + van.type.substring(1)}
            </button>
            <div className="name">{van.name}</div>
            <div className="price">${van.price}<span>/day</span></div>
          </div>
        </div>

        <nav>
          <NavLink 
            to="."
            style={({isActive}) => isActive ? activeStyle : null}
            end
          >
            Details
          </NavLink>

          <NavLink 
            to="pricing"
            style={({isActive}) => isActive ? activeStyle : null}
          >
            Pricing
          </NavLink>

          <NavLink 
            to="photos"
            style={({isActive}) => isActive ? activeStyle : null}
          >
            Photos
          </NavLink>
        </nav>

        <Outlet />
      </section>}

      {!van && <div className="loading">Loading van...</div>}
    </section>
  )
}

export default HostVanDetailLayout
