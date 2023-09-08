import React from 'react'
import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation()
    console.log(location.pathname)

    return (
        <header className="Header">
            <nav className="title">
                <Link to="/">#VANLIFE</Link>
            </nav>
            <nav className="links">
                <Link to="/host">Host</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}

export default Header
