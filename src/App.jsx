import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import notes from "./assets/notes"



function App() {
  
  function createCard(notes){
    return <Note  key={notes.key} title={notes.title}  content={notes.content}/>
  }
 

  return (
    <>
    <Header />
      {notes.map(createCard)}
     
     <Footer />
    </>
  )
}

export default App
