import React, { useContext, useEffect } from "react"
import "./SignUp.css"
import { ArtistContext } from "./ArtistProvider"
import { SignUpCard } from "./SignUpCard"

export const SignUpList = () => {
    const { artists, getArtists } = useContext(ArtistContext)

    useEffect(() => {
        getArtists()
    }, [])

    return(
        <> 
        <article className="artists">
            {artists.map(artist => { if(artist.date > Date.now()-86400000){
                return <SignUpCard key={artist.id} artist={artist} />
            }})}
        </article>
        </>
    )
}