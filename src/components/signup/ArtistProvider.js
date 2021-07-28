import React, { useState, createContext } from "react"

export const ArtistContext = createContext()

export const ArtistProvider = (props) => {
    const [ artists, setArtists ] = useState([])

    const getArtists = () => {
        return fetch("http://localhost:8088/artists?_embed=song")
        .then(res => res.json())
        .then(setArtists)
    }

    const addArtist = artist => {
        return fetch("http://localhost:8088/artists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artist)
        })
        .then(response => response.json())
    }

    const updateArtist = artist => {
        return fetch(`http://localhost:8088/artists/${artist.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(artist)
        })
          .then(getArtists)
      }

      return (
        <ArtistContext.Provider value={{
            artists, getArtists, addArtist, updateArtist
            // , getArtistById, removeArtist
        }}>
            {props.children}
        </ArtistContext.Provider>
    )
    }