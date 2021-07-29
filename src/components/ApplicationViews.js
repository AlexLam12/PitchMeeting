import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { ArtistProvider } from "./signup/ArtistProvider"
import { SongProvider } from "./signup/SongProvider"
import { SignUpForm } from "./signup/SignUpForm"
import { SignUpList } from "./signup/SignUpList"
import { ArtistManagementList } from "./artistmanagement/ArtistManagementList"
import { DisplayArtist } from "./artistmanagement/DisplayArtist"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <ArtistProvider>
                <SongProvider>
                    <Route path="/signup">
                        <SignUpForm />
                    </Route>
                    <Route path="/signup">
                        <SignUpList />
                    </Route>
                    <Route path="/artistmanagement">
                        <ArtistManagementList />
                    </Route>
                    <Route path="/display/:artistId(\d+)">
                        <DisplayArtist />
                    </Route>
                </SongProvider>
            </ArtistProvider>
        </>
    )
}