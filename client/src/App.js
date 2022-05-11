import './App.css';
import { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom"
import Splash from "./components/Splash"
import PlayWindow from './components/PlayWindow';
import PlayControls from './components/PlayControls';

function App() {

  const [currentUser, setCurrentUser] = useState("")

  const character = document.querySelector(".character");

    // if (character === null) {
    //    character = <div>hi</div>
    // }
 
    const map = document.querySelector(".map");
    const pixelSize = parseInt(
       getComputedStyle(document.documentElement).getPropertyValue(
          "--pixel-size"
       )
       );
 
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
            character={character}
            map={map}
            pixelSize={pixelSize}
          />
          <PlayControls 
            character={character}
            map={map}
            pixelSize={pixelSize}
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
