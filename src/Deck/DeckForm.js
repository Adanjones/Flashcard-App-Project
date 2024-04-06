import React, {useState} from "react";
import { Link } from "react-router-dom"
const DeckForm = ({ formData, onChangeHandler, onSubmitHandler }) => {
    // need the form data to access its properties. 

    const [placeHolder, setPlaceHolder] = useState({...formData})
    
    if (!placeHolder.name  && !placeHolder.description ){
        setPlaceHolder({
            name: "Deck Name",
            description: "Breif description of the deck"
        })
    } 

    if (!formData){
        return <p>Loading...</p>
    } else{
        return (
            <form name="create" onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="name" className="d-flex flex-column">
                        Name
                        <input 
                            id="name"
                            type="text"
                            name="name"
                            onChange={onChangeHandler}
                            value={formData.name}
                            placeholder={placeHolder.name}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="description" className="d-flex flex-column">
                        Description
                        <textarea
                            id="description"
                            type="text"
                            name="description"
                            onChange={onChangeHandler}
                            value={formData.description}
                            placeholder={placeHolder.description}
                            required
                        />
                   </label>
                </div>
                <div className="pt-3">
                    <Link to='/'>
                      <button type = "button"className="btn btn-secondary ">Cancel</button>
                    </Link>
                    <span className="p-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </span>
                </div>
            </form>
        )
    }
    
}
 
export default DeckForm;