import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom"
import { deleteDeck, readDeck } from "../utils/api";
import CardItem from "../Cards/CardItem"

function Deck() {
    const location = useLocation();
    const { deckId } = useParams()
    const [deck, setDeck] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const abortController = new AbortController()
        readDeck(deckId, abortController.signal).then(setDeck)
    }, [deckId])

    function handleDeckDelete() {
        if (window.confirm("Delete this deck ? You will not be able to recover it.")) {
            const abortController = new AbortController()
            deleteDeck(deckId, abortController.signal).then(setDeck).then(navigate('/'))
        }
    }
    if (!deck.id) {
        return <p>loading ...</p>
    } else {
        return (
            <section>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
                    </ol>
                </nav>



                <h2>{deck.name}</h2>
                <p>{deck.description}</p>
                <div>
                    <Link to={`${location.pathname}/edit`} >
                        <button className="btn btn-secondary">edit</button>
                    </Link>
                    <Link to={`${location.pathname}/study`}>
                        <button className="btn btn-primary">study</button>
                    </Link>
                    <Link to={`${location.pathname}/cards/new`}>
                        <button className="btn btn-primary">add cards</button>
                    </Link>

                    <button onClick={handleDeckDelete} className="btn btn-danger">delete</button>
                </div>
                <br />
                <h2>Cards</h2>
                <div>
                    {deck.cards.map((card, index) => <CardItem card={card} key={index} />)}
                </div>
            </section>
        )
    }

}

export default Deck