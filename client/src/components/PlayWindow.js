// ## Acknowledgments

// I'm thankful to Drew Conley, whose tutorial on top-down game camera and movement provided the basis for the game's DIY "engine."
// * [YouTube link](https://www.youtube.com/watch?v=H3Fn33lYuE0)
// * [Codepen link](https://codepen.io/punkydrewster713/pen/WNrXPrb)

import React, { useEffect, useState } from "react";
import Backpack from "./Backpack";
import DialogueBox from "./DialogueBox";
import GameObject from "./GameObject";
import Character from "./Character";

function PlayWindow({ pixelSize }) {
   const [gameObjectsArray, setGameObjectsArray] = useState([]);
   const [messageObject, setMessageObject] = useState([]);
   const [letterClicked, setLetterClicked] = useState(false);
   const [letterClickCount, setLetterClickCount] = useState(0);
   const [backpackContents, setBackpackContents] = useState(["small trowel", "watering can"])
   const [selectedSoil, setSelectedSoil] = useState(0)


   useEffect(() => {
      fetch("/game_objects")
      .then((res) => res.json())
      .then((objects) => setGameObjectsArray(objects));
   }, []);

   useEffect(() => {
      fetch("/messages/1")
      .then((res) => res.json())
      .then((msg) => setMessageObject(msg));
   }, []);

   // useEffect(() => {
   //    fetch('/backpacks/1')
   //    .then(res => res.json())
   //    .then(data => setBackpackContents(data))
   // }, [])

   function renderMessage() {
      console.log("NOW rendering message:");
      console.log(messageObject.message_text);
      setLetterClicked(!letterClicked)
   }

   function receiveSeeds() {
      if (letterClickCount < 1) {
         alert("You received a radish seed from Auntie Lou!")
         // addToBackpack()
         setBackpackContents([...backpackContents, "radish seed"])
      }
   }

   function removeItem() {
      setBackpackContents(["small trowel", "watering can"])
   }

 

   // function addToBackpack() {
   //    fetch(`/backpacks/1`, {
   //       method: 'PATCH',
   //       headers: { 'Content-Type': 'application/json'},
   //       body: JSON.stringify({item_1: "radish seeds"})
   //   })
   //   .then(res => res.json())
   //   .then(data =>{
   //       console.log(`updated backpack`)
   //   })
   // }

   const gameObjects = gameObjectsArray.map((obj) => {
      return (
      <div
         style={{
            position: "absolute",
            left: `${obj.x_coord * pixelSize}px`,
            top: `${obj.y_coord * pixelSize}px`,
         }}
      >
         {<GameObject 
            obj={obj} 
            renderMessage={renderMessage}
            receiveSeeds={receiveSeeds}
            setLetterClickCount={setLetterClickCount} 
            letterClickCount={letterClickCount}
            // plantSeed={plantSeed}
            selectedSoil={selectedSoil}
            setSelectedSoil={setSelectedSoil}
            removeItem={removeItem}
         />}
      </div>
      );
   });

   return (
      <div>
         <div className="play-window">
            
            <DialogueBox 
               messageObject={messageObject}
               letterClicked={letterClicked} 
            />

            <div className="frame">
               <div className="corner_topleft"></div>
               <div className="corner_topright"></div>
               <div className="corner_bottomleft"></div>
               <div className="corner_bottomright"></div>

               <div className="camera">
                  <div className="map pixel-art">
                     {gameObjects}
                     <Character />
                  </div>
               </div>

            </div>
         </div>
      
         <div className="backpack-inventory">
            <Backpack
               backpackContents={backpackContents} 
            />
         </div>
      
      </div>
   );
   }

export default PlayWindow;
