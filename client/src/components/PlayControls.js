import React, { useEffect } from "react";

function PlayControls({ character, map, pixelSize }) {
 
    //start in the middle of the map
    let x = 170;
    let y = 34;
    let held_directions = []; //State of which arrow keys we are holding down
    let speed = 1; //How fast the character moves in pixels per frame
 
    const placeCharacter = () => {
 
       const held_direction = held_directions[0];
       if (held_direction) {
       if (held_direction === directions.right) {
          x += speed;
       }
       if (held_direction === directions.left) {
          x -= speed;
       }
       if (held_direction === directions.down) {
          y += speed;
       }
       if (held_direction === directions.up) {
          y -= speed;
       }
 
       character.setAttribute("facing", held_direction);
       }
       character.setAttribute("walking", held_direction ? "true" : "false");
 
       //Limits (gives the illusion of walls)
       let leftLimit = -8;
       let rightLimit = 16 * 11 + 8;
       let topLimit = -8 + 32;
       let bottomLimit = 16 * 7;
       if (x < leftLimit) {
       x = leftLimit;
       }
       if (x > rightLimit) {
       x = rightLimit;
       }
       if (y < topLimit) {
       y = topLimit;
       }
       if (y > bottomLimit) {
       y = bottomLimit;
       }
 
       let camera_left = pixelSize * 66;
       let camera_top = pixelSize * 42;
 
       map.style.transform = `translate3d( ${-x * pixelSize + camera_left}px, ${
       -y * pixelSize + camera_top
       }px, 0 )`;
       character.style.transform = `translate3d( ${x * pixelSize}px, ${
       y * pixelSize
       }px, 0 )`;
    };
 
    //Set up the game loop
 
    const step = () => {
       placeCharacter();
       window.requestAnimationFrame(() => {
       step();
       });
    };
 
    // useEffect(() => {
    //     step(); //kick off the first step!

    // }, [character])
 
 
 
    /* Direction key state */
    const directions = {
       up: "up",
       down: "down",
       left: "left",
       right: "right",
    };
    const keys = {
       38: directions.up,
       37: directions.left,
       39: directions.right,
       40: directions.down,
    };
    document.addEventListener("keydown", (e) => {
       let dir = keys[e.which];
       if (dir && held_directions.indexOf(dir) === -1) {
       held_directions.unshift(dir);
       }
    });
 
    document.addEventListener("keyup", (e) => {
       let dir = keys[e.which];
       let index = held_directions.indexOf(dir);
       if (index > -1) {
       held_directions.splice(index, 1);
       }
    });

    return <div></div>
}

export default PlayControls;