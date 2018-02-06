import React from 'react';
import './MealTitleContainer.css';

const mealTitleContainer = (props) => {
    const placeholder = "Enter " + props.mealTitle + " here...";
    return(
        <div className="Title-Container">
            <h2 className={props.mealTitle + "Title"}>{props.mealTitle}</h2>
            <div className="Title-Container-Options">
                <button 
                    className="SaveMealButton"
                    onClick={props.saveToDB}>
                </button>
                <input
                    className="InputBox"
                    value={props.enteredText}
                    onKeyPress={props.handlePressEnter}
                    onChange={props.handleChange} 
                    placeholder={placeholder}  
                    type="text">
                </input>
                <button 
                    className="AddLineButton"
                    onClick={props.addToList}>
                </button>
            </div>
        </div>
    );
}

export default mealTitleContainer;