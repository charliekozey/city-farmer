import React, { useState } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import SplashMenu from "./SplashMenu"
import About from "./About"
import SignUp from "./SignUp"
import LogIn from "./LogIn" 

function Splash({ currentUser, setCurrentUser }) {

    const [errors, setErrors]= useState()
    const history = useHistory();
    
    function handleLogIn(e) {
        e.preventDefault()

        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username: currentUser.username, password: currentUser.password})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.errors){
                setErrors(data.errors)
            }else {
                setCurrentUser(data)
                history.push('/') 
            }
        })
        .catch(error => console.log(error))

    }

    return (

        <div className="splash">

        <h1>
            welcome to cityfarmer!
        </h1>
        
            this is le splash page
        
            <Switch>
                <Route path="/login">
                    <LogIn 
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser} 
                        handleLogIn={handleLogIn}
                    />
                </Route>
                <Route path="/signup" >
                    <SignUp 
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                        handleLogIn={handleLogIn} 
                    />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <SplashMenu 
                        currentUser={currentUser}
                    />
                </Route>
            </Switch>

        </div>
    )
}

export default Splash