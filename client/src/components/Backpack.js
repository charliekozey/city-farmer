import React, { useState, useEffect } from "react";
import BackpackItem from "./BackpackItem";

function Backpack({backpackContents}) {

    const items = backpackContents.map((e) => {
        return (
        <div>{e}</div>
        )
    })

    console.log(`CONTENTS: ${backpackContents}`)

    return (
        <div>
            In backpack:
            {items}
        </div>
    );
}

export default Backpack;