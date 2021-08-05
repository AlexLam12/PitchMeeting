import React, { useContext, useEffect } from "react"
import { ArtistContext } from "../signup/ArtistProvider"
import "./ArtistManagement.css"

import { ArtistManagementCard } from "./ArtistManagementCard"

export const ArtistManagementList = () => {
    const { artists, getArtists } = useContext(ArtistContext)

    useEffect(() => {
        getArtists()
    }, [])

    return(
        <> 
        <h1>Artist Management</h1>
        <div className="artists">
        {artists.map(artist => { if(artist.date > Date.now()-86400000){
                return <ArtistManagementCard key={artist.id} artist={artist} />
            }})}
        </div>
        </>
    )
}