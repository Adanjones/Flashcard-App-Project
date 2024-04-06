import React from "react";
import { Link, useNavigate} from "react-router-dom";
import { deleteDeck } from "../utils/api";

function DeckItem({deck}) {
    const navigate = useNavigate()

    function handleDeckDelete(){
       
        if (window.confirm("Delete this deck ? You will not be able to recover it.")){
            const abortController = new AbortController()
            deleteDeck(deck.id, abortController.signal).then( navigate(0))
           
        }
    }
  return (

    <section>
        <section className="card">
            <div className="d-flex justify-content-between">
                <h2>{deck.name}</h2>
                <p>{deck.cards.length} cards</p>
            </div>       
            <p>{deck.description}</p>
            <div className="d-flex ">
                <Link to={`/decks/${deck.id}`}>
                    <button className="btn btn-secondary">View</button>                        
                </Link>
                <Link to={`/decks/${deck.id}/study`}>
                    <button className="btn btn-primary">Study</button>
                </Link>                    
              <button onClick={handleDeckDelete} className="btn btn-danger">Delete</button>
            </div>
        
        </section> 
       
    </section>
  )
}

export default DeckItem