import React, { useState, createContext } from "react"

export const ArtistContext = createContext()

export const ArtistProvider = (props) => {
    const [ artists, setArtists ] = useState([])
    const [ likes, setLikes ] = useState([])
    const [ users, setUsers ] = useState([])
    
    const getUsers = () => {
        return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers)
    }

    const getArtists = () => {
        return fetch("http://localhost:8088/artists")
        .then(res => res.json())
        .then(setArtists)
    }

    const getLikes = () => {
      return fetch("http://localhost:8088/likes?_expand=user&_expand=artist")
      .then(res => res.json())
      .then(setLikes)
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
        .then(getArtists)
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

      const getArtistById = (id) => {
          return fetch(`http://localhost:8088/artists/${id}`)
          .then(res => res.json())
      }

      const deleteLike = likeId => {
        return fetch(`http://localhost:8088/likes/${likeId}`, {
            method: "DELETE"
      })
        .then(getLikes)}

        const addLike = (like) => {
            return fetch("http://localhost:8088/likes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(like)
            })
            .then(response => response.json())
            .then(getLikes)
        }
        
      return (
        <ArtistContext.Provider value={{
            artists,
            users, 
            getArtists,
            getUsers, 
            addArtist, 
            updateArtist, 
            getArtistById,
            likes,
            getLikes,
            deleteLike,
            addLike 
        }}>
            {props.children}
        </ArtistContext.Provider>
    )
    }