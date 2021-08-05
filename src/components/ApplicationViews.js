import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { ArtistProvider } from "./signup/ArtistProvider"
import { SignUpForm } from "./signup/SignUpForm"
import { SignUpList } from "./signup/SignUpList"
import { ArtistManagementList } from "./artistmanagement/ArtistManagementList"
import { DisplayArtist } from "./artistmanagement/DisplayArtist"
import { Login } from "./auth/Login"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <ArtistProvider>
                <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/">
                        <SignUpForm />
                    </Route>                    
                    <Route path="/edit/:artistId(\d+)">
                        <SignUpForm />
                    </Route>
                    <Route exact path="/">
                        <SignUpList />
                    </Route>
                    <Route path="/artistmanagement">
                        <ArtistManagementList />
                    </Route>
                    <Route path="/display/:artistId(\d+)">
                        <DisplayArtist />
                    </Route>
                   
                
            </ArtistProvider>
        </>
    )
}