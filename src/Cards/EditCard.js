import React, { useState, useEffect } from "react";
import { readCard, updateCard, readDeck } from "../utils/api"
import { useParams, useNavigate, Link } from "react-router-dom"
import CardForm from "./CardForm";
function EditCard() {
    // create a state variable to store the current data in. 
    const [formData, setFormData] = useState({})
    const [currentDeck, setCurrentDeck] = useState({})
    // grab the current card from the useParams to stick it in the read card fucntion
    const { deckId } = useParams()
    const { cardId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const abortController = new AbortController()
        readDeck(deckId, abortController.signal).then(setCurrentDeck)
        return () => abortController.abort
    }, [deckId])

    useEffect(() => {
        const abortController = new AbortController()
        readCard(cardId, abortController.signal)
            .then(setFormData)
        return () => abortController.abort()
    }, [cardId])

    const changeHandler = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }
   
    const submitHandler = (event) => {
        event.preventDefault()
        const abortController = new AbortController()
        updateCard(formData, abortController.signal).then(navigate(`/decks/${deckId}`))
    }

    if (!currentDeck.id) {
        return <p>Loading...</p>
    } else {
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to ={'/'}>Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{currentDeck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{formData.id}</li>
                    </ol>
                </nav>


                <h1>Edit Deck</h1>
                <CardForm
                    formData={formData}
                    changeHandler={changeHandler}
                    submitHandler={submitHandler}
                />
          
            </div>

        )
    }

}

export default EditCard