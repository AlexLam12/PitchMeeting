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
            <h3 className="diplayArtist__name">{artist.name}</h3>
        </section>
    )
}