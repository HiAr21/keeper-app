import React from "react";
import Note from './note';
import notes from './notes';

function AllNotes(){
    return(
        <div className="allNotes">
            {notes.map(note=>
                <Note key="note.key" title={note.title} content={note.content}/>
            )}
        </div>
      
    );
}

export default AllNotes