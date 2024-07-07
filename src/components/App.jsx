import React from 'react';
import '../../public/App.css';
import Header from './header';
import Footer from './footer';
import AllNotes from './Allnotes';

function App() {
  return (
    <>
      <Header/>
      <AllNotes/>
      <Footer/>
    </>
  )
}

export default App