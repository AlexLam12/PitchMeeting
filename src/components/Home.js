import React from "react";
import { Link, useHistory } from "react-router-dom"
import "./Home.css"

export const Home = () => {
const history = useHistory()

const handleClickLogin = (event) => {
   

}

 return(
    <div>   
        <h3>
        Management:
        </h3>
        <h3>
        <Link className="nav-link" 
                to="/login" >
            Login 
            </Link>
        </h3>   
    </div>
    )
}