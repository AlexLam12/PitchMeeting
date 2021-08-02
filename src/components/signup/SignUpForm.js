import React, { useContext, useEffect, useState } from "react"
import { ArtistContext } from "./ArtistProvider"
import { useHistory, useParams } from 'react-router-dom'


export const SignUpForm = () => {
    const { addArtist, updateArtist, getArtists, artists, getArtistById } = useContext(ArtistContext)
    const {artistId} = useParams()
    const history = useHistory()

  

    const [artistFormData, setArtistFormData] = useState({
        name:"",
        email:"",
        instagram:"",
        instrument:"",
        song:"",
        genre:"",
        date: ""

    });

    useEffect(() => {
        if(artistId){
            getArtistById(artistId)
            .then(artistFormData => {
                setArtistFormData(artistFormData)
            })
        }
    })

    useEffect(() => {
        getArtists()
    }, [])

    const handleControlledInputChange = (event) =>{
        const newArtist = { ...artistFormData }
        newArtist[event.target.id] = event.target.value
        setArtistFormData(newArtist)
    }

    const handleClickSignUp = () =>{
        const foundArtist = artists.find(artist => artist.name === artistFormData.name)
        if (foundArtist){
            updateArtist({
                id: foundArtist.id,
                name: artistFormData.name,
                email: artistFormData.email,
                instagram: artistFormData.instagram,
                instrument: artistFormData.instrument,
                song: artistFormData.song,
                genre: artistFormData.genre,
                date: Date.now()
            })
            .then(() => setArtistFormData({
                name:"",
                email:"",
                instagram:"",
                instrument:"",
                song:"",
                genre:"",
                date: ""
        
            }))
        } else{
        addArtist({
            name: artistFormData.name,
            email: artistFormData.email,
            instagram: artistFormData.instagram,
            instrument: artistFormData.instrument,
            song: artistFormData.song,
            genre: artistFormData.genre,
            date: Date.now()
        })
        .then(() => setArtistFormData({
            name:"",
            email:"",
            instagram:"",
            instrument:"",
            song:"",
            genre:"",
            date: ""
    
        }))
    }}

    return(
        <form className="signUpForm">
            <h2 className="signUpForm__title">Sign Up</h2>
            <fieldset>
                <div className="form-group">
                    <input type="text" 
                        id="name"
                        value={artistFormData.name}
                        className="input__name"
                        placeholder="Full Name"
                        onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <input type="text"
                        id="email" 
                        value={artistFormData.email}
                        className="input__email"
                        placeholder="Email"
                        onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <input type="text" 
                        id="instagram"
                        value={artistFormData.instagram}
                        className="input__instagram"
                        placeholder="Instagram"
                        onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <input type="text" 
                        id="song"
                        value={artistFormData.song}
                        className="input__song"
                        placeholder="Song"
                        onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <input type="text" 
                        id="genre"
                        value={artistFormData.genre}
                        className="input__genre"
                        placeholder="Genre"
                        onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <input type="text"
                        id="instrument"
                        value={artistFormData.instrument} 
                        className="input__instrument"
                        placeholder="Instrument"
                        onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn__signUp"
                onClick={event => {
                    event.preventDefault()
                        handleClickSignUp()
                        history.push(`/signup`)
                }}>
                   SignUp 
                </button>
        </form>
    )
}