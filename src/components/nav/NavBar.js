import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (prop) => {
  return (
    <nav className="navbar">

      <ul className="nav nav-pills nav-fill">
          <Link className="nav-link" to="/">
            <img src="../images/pitchmeeting4A.1.jpg" alt="logo" />
            </Link>
      </ul>
    </nav>
  )
}
