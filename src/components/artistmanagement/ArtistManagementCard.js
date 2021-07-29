import React from "react"
import "./ArtistManagement.css"

export const ArtistManagementCard = ({ artist }) => (
    <section className="artist">
        <h3 className="artist__name">
            {artist.name}
        </h3>
        <div className="artist__email">{artist.email}</div>
        <div className="artist__instagram">{artist.instagram}</div>
        <div className="artist__song">{artist.song}</div>
        <div className="artist__genre">{artist.genre}</div>
        <div className="artist__instrument">{artist.instrument}</div>
        <div>mark favorite</div>
        <button>Remove</button>
        <button>Up Next</button>
        <button>Display</button>
    </section>
)