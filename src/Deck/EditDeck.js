import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import DeckForm from "./DeckForm";

function EditDeck() {
    const { deckId } = useParams()
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()


    useEffect(() => {
        const abortController = new AbortController()
        readDeck(deckId, abortController.signal).then(setFormData)
    }, [deckId])


    const changeHandler = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        const abortController = new AbortController()
        const response = await updateDeck(formData, abortController.signal)
        navigate(`/decks/${response.id}`)
    }

    if (!formData.id) {
        return <p>Loading...</p>
    } else {
        return (
            <section>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{formData.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
                    </ol>
                </nav>

                <h1>Edit Deck</h1>
                <DeckForm
                    onChangeHandler={changeHandler}
                    onSubmitHandler={submitHandler}
                    formData={formData}
                />
            </section>

        )
    }


}


export default EditDeck