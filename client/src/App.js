import './App.css';
import { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom"
import Splash from "./components/Splash"
import PlayWindow from './components/PlayWindow';

function App() {

  const [currentUser, setCurrentUser] = useState("")
 
  useEffect(()=>{
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])
  
  // function onLogout() {
  //   setCurrentUser(null)
  // }

  return (
    <div className="App">

      <Switch>
        <Route path="/play">
          <PlayWindow 
            setCurrentUser={setCurrentUser} 
          />
        </Route>
        <Route path="/">
          <Splash 
            currentUser={currentUser} 
            setCurrentUser={setCurrentUser} 
          />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
