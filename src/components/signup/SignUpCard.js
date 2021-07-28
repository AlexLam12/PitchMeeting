import React from "react"
import "./SignUp.css"

export const SignUpCard = ({ artist }) => (
    <section className="artist">
        <h3 className="artist__name">
            {artist.name}
        </h3>
        <div className="artist__instagram">{artist.instagram}</div>
    </section>
)