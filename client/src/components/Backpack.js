import React, { useState } from "react";
import plant1 from "../plant-1.png";
// import BackpackItem from "./BackpackItem";

function Backpack({backpackArray}) {

    // const backpackContents = backpackArray.map(
    //     <BackpackItem />
    // );

    return (
        <div>
            Backpack inventory goes here
            <img src={plant1} alt="item 1"/>
        </div>
    );
}

export default Backpack;