// First step list import needs like react for now 
import React, { useEffect, useState } from 'react'
// imported the function that will grab all the all the decks
import { listDecks } from '../utils/api'
// importing the funtion that seperates all the decks
import DeckItem from './DeckItem'

function DeckList() {
    // setting a state variable that will take in all the decks
    const [decks, setDecks] = useState([]);
    // making a api call for all the decks
    useEffect(() => {
        // adding in an abort controller
        const abortController = new AbortController()
        // calling the function then setting the state variable to the retrieved data.
        listDecks(abortController.signal).then(setDecks)
        return () => abortController.abort()
    }, [])

    if (!decks) {
        return <p>loading ...</p>
    } else {
      return (
        <div>
            {decks.map((deck, index) => <DeckItem deck={deck} key={index} /> )}
        </div>
      )
    }

}

export default DeckList