// ## Acknowledgments

// I'm thankful to Drew Conley, whose tutorial on top-down game camera and movement provided the basis for the game's DIY "engine."
// * [YouTube link](https://www.youtube.com/watch?v=H3Fn33lYuE0) 
// * [Codepen link](https://codepen.io/punkydrewster713/pen/WNrXPrb)

import React, { useEffect, useState } from "react";
import Backpack from "./Backpack";
import GameObject from "./GameObject";
import Character from "./Character";

function PlayWindow({ pixelSize }) {

   const [gameObjectsArray, setGameObjectsArray] = useState([])

   useEffect(() => {
      fetch('/game_objects')
      .then(res => res.json())
      .then(objects => setGameObjectsArray(objects))
  }, [])

   const gameObjects = gameObjectsArray.map(obj => {
      return (
         <div style={{
            position: "absolute", 
            left: `${obj.x_coord * pixelSize}px`,
            top: `${obj.y_coord * pixelSize}px`
         }}>
            {<GameObject obj={obj} />} {obj.name}
         </div>
      )
   })


   return (
      <div>
         <div className="play-window">
         <div class="frame">
            <div class="corner_topleft"></div>
            <div class="corner_topright"></div>
            <div class="corner_bottomleft"></div>
            <div class="corner_bottomright"></div>

            <div class="camera">
               <div class="map pixel-art">
               {gameObjects}
               <Character />
               </div>
               </div>
            </div>
         </div>
         <div class="backpack-inventory">
            <Backpack />
         </div>
      </div>
   );
}

export default PlayWindow;
