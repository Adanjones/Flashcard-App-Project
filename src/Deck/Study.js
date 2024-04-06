import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import { readDeck } from "../utils/api";
import Card from "..//Cards/Card"

function Study() {
    const { deckId } = useParams()
    const [deck, setDeck] = useState({})


    useEffect(() => {
        setDeck({})
        const abortController = new AbortController()
        readDeck(deckId, abortController.signal).then(setDeck)
    }, [deckId])

    if (!deck.id) {
        return <p>loading ...</p>

    } else if (deck.cards.length < 3) {
        return (
            <div>

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Study</li>
                    </ol>
                </nav>
                <h1>{deck.name}: Study</h1>
                <h2> Not enough cards.</h2>
                <p>You need at lest 3 cards to study.
                    There are 2 cards in this deck
                </p>
                <Link to={`/decks/${deckId}/cards/new`}>
                    <button>Add Cards</button>
                </Link>

            </div>

        )
    } else {
        return (
            <section>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Study</li>
                    </ol>
                </nav>

                <h1>{deck.name}: Study</h1>
                <Card cards={deck.cards} />
            </section>

        )
    }


}



export default Study