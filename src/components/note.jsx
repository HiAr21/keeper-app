import { useState } from "react";

function Note(props){
    return(
        <>
        <div className="note">
            <h1 className="noteHeading">{props.title}</h1>
            <p className="noteDescription">{props.content}</p>    
        </div>
        </>
    );
}

export default Note