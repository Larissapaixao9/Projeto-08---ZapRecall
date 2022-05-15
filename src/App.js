import React from 'react'
import Home from './Home'
import Flashcards from './Flashcards'



export default function App(){
    const [init, setInit]=React.useState(false)
    return(
        <>
         { !init ? 
        
        <Home setInit={setInit} />
        :
        <Flashcards />
    
    }
        </>
    )
}