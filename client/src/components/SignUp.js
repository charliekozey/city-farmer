import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function SignUp({ handleLogIn, setCurrentUser, currentUser }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors]= useState()
    const history = useHistory();

    function handleSignUp(e) {
        e.preventDefault()

        fetch('/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, password: password})
        })
        .then(res => res.json())
        .then(data =>{
            if(data.errors){
                setErrors(data.errors)
            }else {
                setCurrentUser(data)
                console.log(`created user named ${currentUser.username}`)
                console.log(`logged in ${currentUser.username}`)
                history.push('/') 
            }
        })
        .catch(error => console.log(error))

    }

    return (
        <div className="form-container">
            <h2>Sign Up</h2>

            <form onSubmit={(e) => handleSignUp(e)}>
                <label htmlFor="username">
                    Username: 
                </label>
                <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} value={username}/>
                
                <label htmlFor="password">
                Password: 
                </label>
                <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} value={password}/>
                
                <label htmlFor="confirm-password">
                    Confirm Password: 
                </label>
                <input type="password" name="confirm-password" id="confirm-password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}/>

                <input type="submit" value="Sign Up">
                </input>
            </form>

            <div>
                <Link to="/login">Log in instead </Link>
            </div>

            <div>
                <Link to="/">Back to menu</Link> 
            </div>

        </div>

    )
}
