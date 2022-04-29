import React, { useState } from "react";

function PlayWindow() {
  
    let character = document.querySelector(".character");
let map = document.querySelector(".map");

//start in the middle of the map
let x = 170;
let y = 34;
let held_directions = []; //State of which arrow keys we are holding down
let speed = 1; //How fast the character moves in pixels per frame

const placeCharacter = () => {
   
   let pixelSize = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
   );
   
   const held_direction = held_directions[0];
   if (held_direction) {
      if (held_direction === directions.right) {x += speed;}
      if (held_direction === directions.left) {x -= speed;}
      if (held_direction === directions.down) {y += speed;}
      if (held_direction === directions.up) {y -= speed;}
      character.setAttribute("facing", held_direction);
   }
   character.setAttribute("walking", held_direction ? "true" : "false");
   
   //Limits (gives the illusion of walls)
   let leftLimit = -8;
   let rightLimit = (16 * 11)+8;
   let topLimit = -8 + 32;
   let bottomLimit = (16 * 7);
   if (x < leftLimit) { x = leftLimit; }
   if (x > rightLimit) { x = rightLimit; }
   if (y < topLimit) { y = topLimit; }
   if (y > bottomLimit) { y = bottomLimit; }
   
   
   let camera_left = pixelSize * 66;
   let camera_top = pixelSize * 42;
   
   map.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0 )`;
   character.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`;  
}


//Set up the game loop
const step = () => {
   placeCharacter();
   window.requestAnimationFrame(() => {
      step();
   })
}
step(); //kick off the first step!



/* Direction key state */
const directions = {
   up: "up",
   down: "down",
   left: "left",
   right: "right",
}
const keys = {
   38: directions.up,
   37: directions.left,
   39: directions.right,
   40: directions.down,
}
document.addEventListener("keydown", (e) => {
   let dir = keys[e.which];
   if (dir && held_directions.indexOf(dir) === -1) {
      held_directions.unshift(dir)
   }
})

document.addEventListener("keyup", (e) => {
   let dir = keys[e.which];
   let index = held_directions.indexOf(dir);
   if (index > -1) {
      held_directions.splice(index, 1)
   }
});






  return (
    <div className="play-window">
      <div class="frame">
        <div class="corner_topleft"></div>
        <div class="corner_topright"></div>
        <div class="corner_bottomleft"></div>
        <div class="corner_bottomright"></div>

        <div class="camera">
          <div class="map pixel-art">
            <div class="character" facing="down" walking="true">
              <div class="shadow pixel-art"></div>
              <div class="character_spritesheet pixel-art"></div>
            </div>
          </div>
        </div>
         
      </div>
    </div>
  );
}

export default PlayWindow;
