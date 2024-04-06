import React from "react";
//import { Switch } from "react-router";
import { Route, Routes } from 'react-router-dom';
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home/Home";
import Deck from "../Deck/Deck"
import Study from "../Deck/Study";
import CreateDeck from "../Deck/CreateDeck"
import EditDeck from "../Deck/EditDeck"
import AddCard from "../Cards/AddCard";
import EditCard from "../Cards/EditCard";



function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>

          <Route path="/decks/new" element={<CreateDeck />} />
          
          <Route path="/decks/:deckId/edit" element={<EditDeck />} />
          
          <Route path="/decks/:deckId/study" element={<Study />} />
          
          <Route path="/decks/:deckId/cards/new" element={<AddCard />} />
        
          <Route path="/decks/:deckId/cards/:cardId/edit" element={<EditCard />} />
          
          <Route path="/decks/:deckId" element={<Deck />} />
     
          <Route exact path="/" element={<Home />} />
          
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </div>
  );
}

export default Layout;
