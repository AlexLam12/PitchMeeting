import React from "react";
import { Link, useHistory } from "react-router-dom"
import "./Home.css"

export const Home = () => {
const history = useHistory()

const handleLogout = (event) => {
   event.preventDefault()
   sessionStorage.removeItem("pitch_user")
   history.push("/")
}

 return(
    <div>   
        <h3>
        Management:
            </h3>
                { sessionStorage.getItem("pitch_user")
            ?
            <h3 onClick={(event) => {handleLogout(event)}}>
                <Link className="nav-link" to="/" >
                    Logout 
                </Link>
            </h3>
            :
            <h3>
                <Link className="nav-link" to="/login" >
                    Login 
                </Link>
            </h3>
           }
    </div>
    )
}