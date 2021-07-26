import React from "react";
import { Link } from "react-router-dom"

export const Home = () => (
    <>
        <h2>
            <Link className="nav-link" to="/display">
                Display Screen
            </Link>
        </h2>
        <h2>
        <Link className="nav-link" to="/signup">
            Sign Up Page
        </Link>
            </h2>
        <h2>
        <Link className="nav-link" to="/artistmanagement">
            Artist Management
        </Link>
        </h2>

    </>
)