import React, { useContext, useEffect, useState } from "react"
import { ArtistContext } from "./ArtistProvider"
import { SongContext } from "./SongProvider"

export const SignUpForm = () => {
    const { addArtist, updateArtist, getArtists, artists } = useContext(ArtistContext)
    const { addSong } = useContext(SongContext)

  

    const [artist, setArtist] = useState({
        name:"",
        email:"",
        instagram:"",
        instrument:"",
        date:""

    });
    const [song, setSongs] = useState({
        song:"",
        genre:"",
        artistId: 0
    })


    // const handleClickSignUp = () =>{}

    return(
        <form className="signUpForm">
            <h2 className="signUpForm__title">Sign Up</h2>
            <fieldset>
                <div className="form-group">
                    <input type="text" 
                        className="input__name"
                        placeholder="Full Name" />
                        {/* <select className="input__name" >
                            <option value="0">Full Name</option>
                            {artists.map(a => (
                                <option key={a.id} value={a.id}>
                                    {a.name}
                                </option>
                            )) }
                        </select> */}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    
                </div>
            </fieldset>
        </form>
    )
}