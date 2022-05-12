import React, { useState, useEffect } from "react";

function DialogueBox({messageObject, letterClicked}) {


    // console.log(`messages array set in state: ${messagesArray[0].message_text}`)

    return (
        <div className="dialogue-box">
            { letterClicked ?
                messageObject.message_text :
                ""
            }
        </div>
    );
}

export default DialogueBox;