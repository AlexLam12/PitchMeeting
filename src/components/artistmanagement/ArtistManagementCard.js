import React, { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ArtistContext } from "../signup/ArtistProvider"
import "./ArtistManagement.css"


export const ArtistManagementCard = ({ artist }) => {
    const { updateArtist, getLikes, getArtists } = useContext(ArtistContext)
    const [ isChecked, setIsChecked ] = useState(false)
    
    
    useEffect(() => {
        getArtists()
        .then(getLikes())
    }, [])
    
    const handleRemove = () => {
        updateArtist({
            id: artist.id,
            name: artist.name,
            email: artist.email,
            instagram: artist.instagram,
            instrument: artist.instrument,
            song: artist.song,
            genre: artist.genre,
            date: 0
        })
    }



    return(
    <section className="artist">
        <h3 className="artist__name">
            {artist.name}
        </h3>
        <div className="artist__email">{artist.email}</div>
        <div className="artist__instagram">{artist.instagram}</div>
        <div className="artist__song">{artist.song}</div>
        <div className="artist__genre">{artist.genre}</div>
        <div className="artist__instrument">{artist.instrument}</div>
        <button onClick={handleRemove}>
            Remove
            </button>
        <div className="artist__upnext" >
            <button onClick={() => {setIsChecked(!isChecked)}} className={isChecked ? "ToggleTrue" : "ToggleFalse" }>
            Next
            </button>
            </div>
        <Link to={`/display/${artist.id}`}>Display</Link>
    </section>
)}