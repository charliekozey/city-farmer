import React from "react"
import { Switch, Route, Link } from "react-router-dom"

function SplashMenu({ currentUser }) {

    console.log(`current user: ${currentUser}`)
    return (

        <div className="splash-menu">
            { currentUser ?
                <>
                    <h3> Hi, {currentUser.username} </h3>

                    <div>
                        <Link to="/character-select">Continue</Link> 
                    </div>
                    <div> 
                        <Link to="/login">Log out</Link>
                    </div>
                    <div>
                        <Link to="/about">About</Link> 
                    </div>
                </>
            :
                <>
                    <div>
                        <Link to="/play">Play</Link> 
                    </div>
                    <div> 
                        <Link to="/login">Log in </Link>
                    </div>
                    <div>
                        <Link to="/signup">Sign up</Link> 
                    </div>
                    <div>
                        <Link to="/about">About</Link> 
                    </div>
                </>
            }
        </div>
    )
}

export default SplashMenu