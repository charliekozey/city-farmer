import React from 'react';
import soil from "../img/seed.png";

function GameObject({ obj, removeItem, selectedSoil, setSelectedSoil, renderMessage, receiveSeeds, letterClickCount, setLetterClickCount }) {

    // console.log(`image source ya: ${obj.sprite_url}`)

    function plantSeed() {
        console.log()
        setSelectedSoil(obj.name)
        removeItem()
     }

    function handleClick() {
        if (obj.name === "letter") {
            renderMessage();
            receiveSeeds();
            setLetterClickCount(letterClickCount + 1);
        }

        if (obj.name !== "letter") {
            plantSeed();
        }
    }

    if (selectedSoil === obj.name) {

        return (
            
            <div 
                className="game-object" 
                id={obj.name}
                onClick={handleClick}
                style={{backgroundImage: `url("../seed.png")`}}
                // style={{backgroundColor: "red"}}

            >
            </div>
            
        )
    } else {
        return (
            
            <div 
                className="game-object" 
                id={obj.name}
                onClick={handleClick}
            >
            </div>
            
        )

    }

}

export default GameObject;