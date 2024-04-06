import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { readCard } from "../utils/api";

function Card({cards}){
    
   
    const [cardIndex, setCardIndex] = useState(0)
    // setting the state to true
    const [flipCard, setFlipCard]= useState(true)
    // Current card that will be displayed
    const [currentCard, setCurrentCard] = useState(cards[0])
    // grabs the index of the all ids at certain index
    const cardId = cards[cardIndex].id
    // used usehistory to push me back to home if user is done with cards
    const navigate = useNavigate() 
    // my useEffect takes in card id to grab the specific card and set 
    //current card state to that card
       


    useEffect(() => {   
        // created my abort controller 
        const abrotContriller = new AbortController()
        // called the read card fucntionto grab specific card
        readCard(cardId, abrotContriller.signal).then(setCurrentCard)
        // return the cleanup function
        return () => abrotContriller.abort()
        // set dependency array to run useEffect when id changes
    }, [cardId])
     
    const flipHandler = () => {
        setFlipCard(!flipCard)   
    }
     
    const nextHandler = () => {
    
        if (cardIndex === cards.length - 1){
       
        window.confirm("Restart cards?")? setCardIndex(0) : navigate('/')
        } else {   
           
            setCardIndex(cardIndex + 1)           
        }

    }

    if (flipCard){
        return (
            <div className="card">
                <h4>Card {cardIndex + 1} of {cards.length}</h4>
                <p>{currentCard.front}</p>            
                <div> 
                    <button onClick={flipHandler} className="btn btn-secondary">Flip</button>
                </div>
            </div>
        )
    } else{
        return (
            <div className = "card">
                <h4>Card {cardIndex + 1} of {cards.length}</h4>
                <p>{currentCard.back}</p>            
                <div> 
                    <button onClick={flipHandler} className="btn btn-secondary">Flip</button>
                    <button onClick={nextHandler} className="btn btn-primary">Next</button>
                </div>
            </div>
        )
    }

  
    
}

export default Card;
