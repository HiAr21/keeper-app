import React from 'react';
import '../../public/App.css';
import Header from './header';
import Footer from './footer';
import Note from './note';
import notes from './notes';

function App() {
  return (
    <>
      <Header/>
      {notes.map(note=>
        <Note key="note.key" title={note.title} content={note.content}/>
      )}
      <Footer/>
    </>
  )
}

export default App