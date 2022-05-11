import React from 'react';

function GameObject({ obj }) {

    return (
        <div>
            <img src={obj.spriteUrl} alt={obj.name} />
        </div>
    )

}

export default GameObject;