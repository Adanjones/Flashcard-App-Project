import React, { useState, useEffect } from "react";
import { createCard, readDeck } from "../utils/api"
import { useParams, Link, } from "react-router-dom"
import CardForm from "./CardForm"

function AddCard() {
    const initialState = {
        front: "",
        back: "",
    };
    const [deck, setDeck] = useState({})
    const [formData, setFormData] = useState({ ...initialState });
    const { deckId } = useParams()

    useEffect(() => {
        setDeck({})
        const abortController = new AbortController()
        readDeck(deckId, abortController.signal).then(setDeck)
        return () => abortController.abort()

    }, [deckId])

    const changeHandler = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault()
        const abortController = new AbortController()
        createCard(deckId, formData, abortController.signal)
        setFormData(initialState)
    }

    if (!deck.id) {
        return <p>Loading...</p>
    } else {
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                    </ol>
                </nav>

                <h1>{deck.name}: Add Card</h1>
                <CardForm
                    changeHandler={changeHandler}
                    submitHandler={submitHandler}
                    formData={formData}
                />
            </div>

        )
    }

}

export default AddCard