import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (prop) => {
  return (
    <nav className="navbar">

      <div className="nav">
          <Link className="nav-link" to="/">
            <img src="./images/pitchmeeting3A.png" alt="logo" width="250" height="250" />
            </Link>
      </div>
    </nav>
  )
}
