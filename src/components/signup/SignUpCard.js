import React from "react"
import "./SignUp.css"

export const SignUpCard = ({ artist }) => (
    <section className="artist">
        <h3 className="artist__name">
            {artist.name}
        </h3>
        <div className="artist__email">{artist.email}</div>
        <div className="artist__instagram">{artist.instagram}</div>
        <div className="artist__song">{artist.song}</div>
        <div className="artist__genre">{artist.genre}</div>
        <div className="artist__instrument">{artist.instrument}</div>
        {/* <button>edit</button> */}
    </section>
)