import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ArtistContext } from "../signup/ArtistProvider"
import "./ArtistManagement.css"

export const DisplayArtist = () => {
    const { getArtistById } = useContext(ArtistContext)

        const [artist, setArtist] = useState({})
        const {artistId} =useParams()

    useEffect(() => {
        console.log("useEffect", artistId)
        getArtistById(artistId)
        .then((response) =>{
            setArtist(response)
        })
    }, [])

    return(
        <section className="displayArtist">
            <div className="displayArtist__name">{artist.name}</div>
            <h3 className="diplayArtist__song">{artist.song}</h3>
            <div className="displayArtist__instagram">{artist.instagram}</div>
        </section>
    )
}