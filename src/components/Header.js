import React from 'react'
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    const activeStyle = {
        color: "#161616",
        textDecoration: "underline",
        fontWeight: "700",
    }

    return (
        <header className="Header">
            <nav className="title">
                <Link to="/">#VANLIFE</Link>
            </nav>
            <nav className="links">
                <NavLink
                    to="host"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Host
                </NavLink>
                <NavLink
                    to="about"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="vans"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
