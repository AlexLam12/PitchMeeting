import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { ArtistContext } from "../signup/ArtistProvider"
import "./ArtistManagement.css"


export const ArtistManagementCard = ({ artist, like }) => {
    const { likes, updateArtist, addLike, deleteLike } = useContext(ArtistContext)
    const [ isChecked, setIsChecked ] = useState(false)
    const [ isDisabled, setIsDisabled ] = useState(false)
    const [ likeImage, setLikeImage ] = useState("")
    const history = useHistory()
    
    

    const handleDisplay = () => {
        window.open(`/display/${artist.id}`)
        setIsDisabled(!isDisabled)
    }
    
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

    const saveLike = () => {
    const newLike = {
        userId: parseInt(sessionStorage.getItem("pitch_user")),
        artistId: artist.id
    }
    addLike(newLike)
    }

    const foundLike = likes.find(like => {
    return like.userId === parseInt(sessionStorage.getItem("pitch_user")) && artist.id === like.artistId
    })

    const removeLike = (foundLike) => {
    deleteLike(foundLike.id)
    }
    

    const conditionalImage = () => {if (foundLike !== undefined) {
        return <a onClick = {() => removeLike(foundLike)} className="button artist-unlike"><img className="likeIcon"src="./images/Check-removebg-preview.png" height="40" width="40"/> </a>
    } else {
        return <a onClick = {saveLike} className="button artist-like"><img className="unlikeIcon"src="./images/Uncheck-removebg-preview.png" height="40" width="40"/> </a>
    }}

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
        <div className="artist__fave">
            {conditionalImage()}
        </div>

        <button className="btn" onClick={handleRemove}>
            Remove
            </button>
        <div className="btn artist__upnext" >
            <button onClick={() => {setIsChecked(!isChecked)}} className={isChecked ? "ToggleTrue" : "ToggleFalse" }>
            Next Up
            </button>
        </div>
            <button className="btn btn-display"
                disabled={isDisabled}
                onClick={handleDisplay}>
                Display
          </button>
    </section>
)}