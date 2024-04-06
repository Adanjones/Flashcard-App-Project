import React, { useState, useEffect }from "react";
import { useNavigate, Link } from 'react-router-dom'
import { createDeck } from "../utils/api";
import DeckForm from "./DeckForm"

function CreateDeck(){
    
    const initialState = {
        name:"", 
        description:""
    }
 const navigate = useNavigate()
 
 const [formData, setFormData] = useState({...initialState})
 
 
 function onChangeHandler({target}){
    setFormData({
        ...formData,
        [target.name]:target.value
    })
 }

 async function onSubmitHandler(event){
    const abortController = new AbortController()
    event.preventDefault()
    const response = await createDeck(formData, abortController.signal)
    setFormData(initialState)
    navigate(`/decks/${response.id}`)
 }
  function onCancelHandler() {
    navigate('/')
  }
 
 useEffect(()=>{},[])

    return (
        <section>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                    </ol>
                </nav>

            <h2>Create Deck</h2>
            <DeckForm 
            onChangeHandler={onChangeHandler} 
            onSubmitHandler={onSubmitHandler}
            formData={formData}
            onCancelHandler={onCancelHandler}
                />
        </section>
    )

}



export default CreateDeck