import React, { useState, useEffect } from "react";
import BackpackItem from "./BackpackItem";

function Backpack({backpackArray}) {

    // const backpackContents = backpackArray.map(
    //     <BackpackItem />
    // );

    // useEffect(() => {
    //     fetch('/')
    //     .then(res => res.json())
    //     .then(reviews => setBackpackContents(reviews))
    // }, [])

    return (
        <div>
            Backpack inventory goes here: 
            <BackpackItem />
        </div>
    );
}

export default Backpack;