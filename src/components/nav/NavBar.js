import React from "react"
import { Link } from "react-router-dom"

export const NavBar = (prop) => {
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">

      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}
