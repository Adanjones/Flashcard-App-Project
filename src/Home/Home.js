import DeckList from "./DeckList";
import React from "react";
import { Link } from "react-router-dom"
const Home = () => {
    return ( 
        <div className="d-flex flex-column w-75  ">
            <Link to={"/decks/new"}>
               <button className="btn btn-secondary" >Create Deck</button> 
            </Link>
            <DeckList />
        </div>
    );
}
 
export default Home;