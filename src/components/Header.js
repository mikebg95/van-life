import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="Header">
            <nav className="title">
                <Link to="/">#VANLIFE</Link>
            </nav>
            <nav className="links">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}

export default Header
