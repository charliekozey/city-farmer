import React from "react";
import plant1 from "../plant-1.png";
import plant2 from "../plant-2.png";

function BackpackItem() {

    return (
        <div>
            <img src={plant1} alt="item 1"/>
            <img src={plant2} alt="item 2"/>
        </div>
    );
}

export default BackpackItem;