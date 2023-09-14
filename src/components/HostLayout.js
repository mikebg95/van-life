import React from 'react'
import { Outlet, NavLink } from "react-router-dom"

const HostLayout = () => {
  const activeStyle = {
    color: "#161616",
    textDecoration: "underline",
    fontWeight: "700",
  }

  return (
    <div className="HostLayout">
        <nav>
            <NavLink 
              to="."
              end
              style={({isActive}) => isActive ? activeStyle : null}
            >
              Dashboard
            </NavLink>

            <NavLink 
              to="income"
              style={({isActive}) => isActive ? activeStyle : null}
            >
              Income
            </NavLink>

            <NavLink 
              to="vans"
              style={({isActive}) => isActive ? activeStyle : null}
            >
              Vans
            </NavLink>

            <NavLink 
              to="reviews"
              style={({isActive}) => isActive ? activeStyle : null}
            >
              Reviews
            </NavLink>
        </nav>
        <Outlet />
    </div>
  )
}

export default HostLayout
