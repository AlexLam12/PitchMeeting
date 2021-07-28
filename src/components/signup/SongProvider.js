import React, { useState, createContext } from "react"

export const SongContext = createContext()

export const SongProvider = (props) => {
    const [ songs, setSongs ] = useState([])

    const getSongs = () => {
        return fetch("http://localhost:8088/songs")
        .then(res => res.json())
        .then(setSongs)
    }

    const addSong = song => {
        return fetch("http://localhost:8088/songs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(song)
        })
        .then(response => response.json())
        .then(getSongs)
    }


      return (
        <SongContext.Provider value={{
            songs, getSongs, addSong
        }}>
            {props.children}
        </SongContext.Provider>
    )
}