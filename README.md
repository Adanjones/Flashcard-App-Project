## Project Overview

This project evaluates your proficiency in React, focusing on rendering and state management. Before proceeding, ensure you're comfortable with the following:

- Installing packages via NPM
- Running tests from the command line
- Writing React function components
- Creating routes, including nested routes, using React Router
- Using hooks like useState(), useParams(), and useHistory()
- Debugging React code through console output and using the VS Code debugger

**Note**: Ensure Node v18 is running before running `npm install`. Check your Node version with `node -v`. If needed, switch to version v18 using `nvm use v18`.

For additional guidance, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module.

## Project Setup

Follow these steps to set up the project on your local machine:

1. Download the Qualified assessment files to your computer.
2. Run `npm install` to install the project dependencies.
   
**Note**: Work on this project locally, as Qualified's online IDE and Web Preview features don't function correctly for this assessment.

To run tests, use `npm test`. Since most tests wait for content to load via the API, expect initial test runs to be slow. Subsequent runs will speed up as you progress.

To start the application, run `npm start`. This command concurrently starts an API server (powered by json-server) on `http://localhost:5000` and a React application on `http://localhost:3000`. Use `Control+C` to stop both servers.

## Instructions

You're tasked with building various screens for users of the flashcard app. Here's a summary:

| Screen       | Path                  | Description                                           |
|--------------|-----------------------|-------------------------------------------------------|
| Home         | /                     | Shows decks with options for creating, studying, viewing, or deleting a deck |
| Study        | /decks/:deckId/study  | Allows studying cards from a deck                     |
| Create Deck  | /decks/new            | Allows creating a new deck                            |
| Deck         | /decks/:deckId        | Displays deck info with options to edit, add cards, navigate to study screen, or delete deck |
| Edit Deck    | /decks/:deckId/edit   | Allows modifying info on an existing deck             |
| Add Card     | /decks/:deckId/cards/new | Allows adding a new card to an existing deck       |
| Edit Card    | /decks/:deckId/cards/:cardId/edit | Allows modifying info on an existing card     |

Refer to the provided screenshots and tests as guidance. You can create screens in any order and organize code using the grouping-by-route technique.

## API

The project uses two datasets: decks and cards. Data is stored in `data/db.json`.

### Decks
Each deck is an object with the following format:
```json
{
  "id": 1,
  "name": "Rendering in React",
  "description": "React's component structure allows for quickly building a complex web application that relies on DOM manipulation."
}
